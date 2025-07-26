import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { 
  LogOut, 
  Home as HomeIcon, 
  BarChart3, 
  FolderOpen, 
  Users as UsersIcon,
  Plus,
  Edit,
  Trash2,
  Shield,
  ShieldCheck,
  Mail,
  Calendar,
  Search,
  Filter
} from 'lucide-react';
import { authService } from '../../lib/auth';
import { getSupabaseClient } from '../../lib/supabase';

interface AdminUser {
  id: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
  createdAt: string;
  lastLoginAt?: string;
  isActive: boolean;
  fullName?: string;
}

const Sidebar = ({ onLogout }: { onLogout: () => void }) => (
  <aside className="h-screen w-64 bg-purple-900 text-white flex flex-col p-6 fixed left-0 top-0 z-20 justify-between">
    <div>
      <h2 className="text-2xl font-bold mb-8 tracking-tight">Admin</h2>
      <nav className="space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-purple-200 hover:text-white py-2 px-4 rounded hover:bg-purple-800 transition-colors"
        >
          <HomeIcon size={20} /> Home
        </Link>
        
        <Link 
          href="/admin/projects" 
          className="flex items-center gap-2 text-purple-200 hover:text-white py-2 px-4 rounded hover:bg-purple-800 transition-colors"
        >
          <FolderOpen size={20} /> Projects
        </Link>
        
        <Link 
          href="/admin/users" 
          className="flex items-center gap-2 bg-purple-800 text-white py-2 px-4 rounded font-semibold"
        >
          <UsersIcon size={20} /> Users
        </Link>
      </nav>
    </div>
    
    <button
      className="flex items-center gap-2 text-purple-200 hover:text-white mt-8 py-2 px-4 rounded hover:bg-purple-800 font-semibold transition-colors"
      onClick={onLogout}
    >
      <LogOut size={18} /> Log Out
    </button>
  </aside>
);

export default function AdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authService.isAuthenticated();
        if (!isAuth) {
          router.push('/admin');
          return;
        }
        await loadUsers();
      } catch (error) {
        console.error('Auth check error:', error);
        setAuthError('Authentication error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const loadUsers = async () => {
    try {
      const supabase = getSupabaseClient();
      
      // Fetch admin users from Supabase
      const { data, error } = await supabase
        .from('admin_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading users:', error);
        return;
      }

      // Transform data to match expected format
      const transformedUsers: AdminUser[] = data?.map(user => ({
        id: user.id,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        lastLoginAt: user.last_login_at,
        isActive: user.is_active,
        fullName: user.full_name
      })) || [];
      
      setUsers(transformedUsers);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      router.push('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }
    
    try {
      // TODO: Implement actual user deletion with Supabase
      setUsers(prev => prev.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Delete user error:', error);
    }
  };

  const handleToggleUserStatus = async (userId: string) => {
    try {
      // TODO: Implement actual status toggle with Supabase  
      setUsers(prev => prev.map(user => 
        user.id === userId ? { ...user, isActive: !user.isActive } : user
      ));
    } catch (error) {
      console.error('Toggle user status error:', error);
    }
  };

  // Filter users based on search and role filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = !searchQuery || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = !filterRole || user.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <ShieldCheck className="text-red-500" size={16} />;
      case 'admin':
        return <Shield className="text-blue-500" size={16} />;
      case 'editor':
        return <Edit className="text-green-500" size={16} />;
      default:
        return <UsersIcon className="text-gray-500" size={16} />;
    }
  };

  const getRoleBadge = (role: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (role) {
      case 'super_admin':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'admin':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'editor':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-700">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state if authentication failed
  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <p className="text-red-600 mb-4">{authError}</p>
          <button
            onClick={() => router.push('/admin')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>User Management | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar onLogout={handleLogout} />
        
        <main className="ml-64 flex-1 p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-purple-900">User Management</h1>
              <p className="text-gray-600 mt-1">Manage admin users and permissions</p>
            </div>
            
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <Plus size={20} />
              Add User
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search users by email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors"
                />
              </div>
              
              {/* Role Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors min-w-[150px]"
                >
                  <option value="">All Roles</option>
                  <option value="super_admin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                </select>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">User</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Role</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Last Login</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Created</th>
                    <th className="text-right py-4 px-6 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-100 rounded-full">
                            <Mail className="text-purple-600" size={16} />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{user.email}</div>
                            <div className="text-sm text-gray-500">ID: {user.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {getRoleIcon(user.role)}
                          <span className={getRoleBadge(user.role)}>
                            {user.role.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.isActive 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar size={14} />
                          {user.lastLoginAt 
                            ? new Date(user.lastLoginAt).toLocaleDateString()
                            : 'Never'
                          }
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar size={14} />
                          {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 justify-end">
                          <button
                            onClick={() => handleToggleUserStatus(user.id)}
                            className={`p-2 rounded text-sm font-medium transition-colors ${
                              user.isActive
                                ? 'text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50'
                                : 'text-green-600 hover:text-green-700 hover:bg-green-50'
                            }`}
                            title={user.isActive ? 'Deactivate user' : 'Activate user'}
                          >
                            {user.isActive ? 'Deactivate' : 'Activate'}
                          </button>
                          
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                            title="Delete user"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <UsersIcon className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No users found</h3>
                <p className="text-gray-600 mb-6">
                  {users.length === 0 
                    ? "No admin users have been created yet"
                    : "Try adjusting your search or filters"
                  }
                </p>
              </div>
            )}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <UsersIcon className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{users.length}</h3>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <ShieldCheck className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {users.filter(u => u.isActive).length}
                  </h3>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-full">
                  <Shield className="text-red-600" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {users.filter(u => u.role === 'super_admin').length}
                  </h3>
                  <p className="text-sm text-gray-600">Super Admins</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
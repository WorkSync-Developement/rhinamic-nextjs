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
  Settings,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  ChevronUp,
  ChevronDown,
  Tractor,
  Flower,
  Grid2X2,
  Sprout,
  Droplets,
  Trees
} from 'lucide-react';
import { authService } from '../../lib/auth';
import { getSupabaseClient } from '../../lib/supabase';

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  details: string[];
  display_order: number;
  is_visible: boolean;
}

const serviceIcons = {
  tractor: <Tractor className="w-7 h-7" />,
  flower: <Flower className="w-7 h-7" />,
  grid: <Grid2X2 className="w-7 h-7" />,
  sprout: <Sprout className="w-7 h-7" />,
  droplets: <Droplets className="w-7 h-7" />,
  trees: <Trees className="w-7 h-7" />
};

const Sidebar = ({ onLogout }: { onLogout: () => void }) => (
  <aside className="h-screen w-64 bg-purple-900 text-white flex flex-col p-6 fixed left-0 top-0 z-20 justify-between">
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Rhinamic Admin</h2>
        <p className="text-purple-200 text-sm mt-1">Services Settings</p>
      </div>
      
      <nav className="space-y-2">
        <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <FolderOpen size={20} />
          Projects
        </Link>
        <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <UsersIcon size={20} />
          Users
        </Link>
        <Link href="/admin/gallery" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <BarChart3 size={20} />
          Gallery
        </Link>
        <Link href="/admin/homepage-settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
          <Settings size={20} />
          Homepage Settings
        </Link>
        <Link href="/admin/services-settings" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-purple-800 text-white">
          <Settings size={20} />
          Services Settings
        </Link>
      </nav>
    </div>
    
    <div className="space-y-4">
      <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors">
        <HomeIcon size={20} />
        View Website
      </Link>
      <button
        onClick={onLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-800 transition-colors text-left"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  </aside>
);

export default function ServicesSettings() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  // Default services data that matches the current ServicesSection
  const defaultServices: ServiceItem[] = [
    {
      id: 'lawn-care',
      title: 'Lawn Care Services',
      slug: 'lawn-care-services',
      description: 'Comprehensive lawn care including soil analysis, aeration, precision mowing, and seasonal fertilization programs for sustainable, drought-resistant turf systems.',
      icon: 'tractor',
      details: [
        'Seasonal soil analysis and pH balancing',
        'Core aeration and thatch management',
        'Custom fertilization programs (typically 4-6 annual visits)',
        'Drought-resistant grass varieties suited to Texas climate'
      ],
      display_order: 1,
      is_visible: true
    },
    {
      id: 'landscape-design',
      title: 'Landscape Design',
      slug: 'landscape-design',
      description: 'Expert landscape design featuring native plant selection, seasonal color planning, and sustainable perennial gardens tailored to your property\'s microclimate.',
      icon: 'flower',
      details: [
        'Custom 3D landscape renderings and planning',
        'Native and adaptive plant selection for sustainability',
        'Phased implementation plans for large projects',
        'Seasonal color rotation management'
      ],
      display_order: 2,
      is_visible: true
    },
    {
      id: 'paver-patio',
      title: 'Paver Patio Installation',
      slug: 'paver-patio-installation',
      description: 'Premium hardscape elements including permeable pavers, natural stone installations, retaining walls, and custom outdoor living structures with drainage integration.',
      icon: 'grid',
      details: [
        'Natural stone and premium paver installations',
        'Custom outdoor kitchens and living spaces',
        'Retaining walls and terraced landscapes',
        'Drainage solutions for water management'
      ],
      display_order: 3,
      is_visible: true
    },
    {
      id: 'drip-irrigation',
      title: 'Drip Irrigation Systems',
      slug: 'drip-irrigation-systems',
      description: 'Water-efficient drip irrigation, smart controller technology, and zoned sprinkler systems designed for conservation and optimal plant health maintenance.',
      icon: 'sprout',
      details: [
        'Smart controller systems with weather adaptation',
        'Water-saving drip irrigation installation',
        'Seasonal system audits and maintenance',
        'Rain/moisture sensor integration'
      ],
      display_order: 4,
      is_visible: true
    },
    {
      id: 'landscape-lighting',
      title: 'Landscape Lighting Installation',
      slug: 'landscape-lighting-installation',
      description: 'Energy-efficient LED landscape lighting with layered illumination techniques for security, accent features, and enhanced outdoor aesthetics.',
      icon: 'droplets',
      details: [
        'Energy-efficient LED lighting systems',
        'Security and pathway illumination',
        'Accent lighting for landscape features',
        'Holiday lighting setup and removal'
      ],
      display_order: 5,
      is_visible: true
    },
    {
      id: 'tree-trimming',
      title: 'Tree Trimming',
      slug: 'tree-trimming',
      description: 'Certified arborist-led tree care including structural pruning, disease management, and preservation techniques for mature tree specimens.',
      icon: 'trees',
      details: [
        'ISA Certified arborist consultations',
        'Structural pruning and crown maintenance',
        'Disease treatment and prevention protocols',
        'Root system management and protection'
      ],
      display_order: 6,
      is_visible: true
    }
  ];

  // Check authentication and load services
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authService.isAuthenticated();
        if (!isAuth) {
          router.push("/login");
          return;
        }
        await loadServices();
      } catch (error) {
        console.error("Auth check error:", error);
        setAuthError("Authentication error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const loadServices = async () => {
    try {
      const supabase = getSupabaseClient();
      
      // Try to fetch services from database
      const { data, error } = await supabase
        .from('homepage_services')
        .select('*')
        .order('display_order', { ascending: true });

      if (error && error.code === '42P01') {
        // Table doesn't exist, use default services
        console.log('Homepage services table not found, using defaults');
        setServices(defaultServices);
        return;
      }

      if (error) {
        console.error('Error loading services:', error);
        setServices(defaultServices);
        return;
      }

      // If no data found, use defaults
      if (!data || data.length === 0) {
        setServices(defaultServices);
      } else {
        setServices(data);
      }
    } catch (error) {
      console.error('Failed to load services:', error);
      setServices(defaultServices);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleVisibility = (serviceId: string) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId 
        ? { ...service, is_visible: !service.is_visible }
        : service
    ));
  };

  const moveService = (serviceId: string, direction: 'up' | 'down') => {
    setServices(prev => {
      const currentIndex = prev.findIndex(s => s.id === serviceId);
      if (currentIndex === -1) return prev;
      
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;
      
      const newServices = [...prev];
      [newServices[currentIndex], newServices[newIndex]] = [newServices[newIndex], newServices[currentIndex]];
      
      // Update display_order
      return newServices.map((service, index) => ({
        ...service,
        display_order: index + 1
      }));
    });
  };

  const saveSettings = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const supabase = getSupabaseClient();
      
      // Clear existing services
      await supabase.from('homepage_services').delete().neq('id', '');
      
      // Insert updated services
      const servicesToSave = services.map(service => ({
        ...service,
        details: JSON.stringify(service.details)
      }));
      
      const { error } = await supabase
        .from('homepage_services')
        .insert(servicesToSave);

      if (error) {
        throw error;
      }

      setMessage({ type: 'success', text: 'Services settings saved successfully!' });
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setIsSaving(false);
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const resetSettings = () => {
    setServices(defaultServices);
    setMessage({ type: 'success', text: 'Settings reset to defaults.' });
    setTimeout(() => setMessage(null), 3000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-r-transparent"></div>
      </div>
    );
  }

  if (authError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
          <p className="text-gray-600">{authError}</p>
        </div>
      </div>
    );
  }

  const visibleCount = services.filter(s => s.is_visible).length;

  return (
    <>
      <Head>
        <title>Services Settings | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar onLogout={handleLogout} />
        
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-purple-900">Professional Services Settings</h1>
                <p className="text-gray-600 mt-1">Manage which services are displayed on the homepage and their order</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{visibleCount}</span> of <span className="font-medium">{services.length}</span> services visible
                </div>
                
                <button
                  onClick={resetSettings}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <RotateCcw size={20} />
                  Reset
                </button>
                
                <button
                  onClick={saveSettings}
                  disabled={isSaving}
                  className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  <Save size={20} />
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </div>

            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {message.text}
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Service Management</h2>
                <p className="text-gray-600 mt-1">Drag to reorder, toggle visibility, and manage service display settings.</p>
              </div>
              
              <div className="divide-y">
                {services.map((service, index) => (
                  <div key={service.id} className={`p-6 flex items-center gap-6 ${!service.is_visible ? 'bg-gray-50' : ''}`}>
                    {/* Order Controls */}
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveService(service.id, 'up')}
                        disabled={index === 0}
                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronUp size={20} />
                      </button>
                      <span className="text-sm font-medium text-gray-500 text-center">{service.display_order}</span>
                      <button
                        onClick={() => moveService(service.id, 'down')}
                        disabled={index === services.length - 1}
                        className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronDown size={20} />
                      </button>
                    </div>
                    
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                      {serviceIcons[service.icon as keyof typeof serviceIcons] || serviceIcons.tractor}
                    </div>
                    
                    {/* Service Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-purple-600 font-medium mb-2">/{service.slug}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                      <div className="mt-2">
                        <span className="text-xs text-gray-500">{service.details.length} details configured</span>
                      </div>
                    </div>
                    
                    {/* Visibility Toggle */}
                    <button
                      onClick={() => toggleVisibility(service.id)}
                      className={`p-3 rounded-lg transition-colors ${
                        service.is_visible
                          ? 'bg-green-50 text-green-600 hover:bg-green-100'
                          : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                      }`}
                      title={service.is_visible ? 'Hide from homepage' : 'Show on homepage'}
                    >
                      {service.is_visible ? <Eye size={24} /> : <EyeOff size={24} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
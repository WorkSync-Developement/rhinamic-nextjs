import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authService } from "../../lib/auth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();
  
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authService.isAuthenticated();
        if (isAuth) {
          router.push("/admin/projects");
          return;
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const result = await authService.signIn(email, password);
      
      if (result.success) {
        router.push("/admin/projects");
      } else {
        setError(result.error || "Invalid credentials");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  }

  // Show loading state while checking authentication
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-sm border border-purple-100 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-700">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg w-full max-w-sm border border-purple-100">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-purple-900">Admin Login</h1>
        </div>
        
        <label className="block mb-4">
          <span className="text-purple-800 font-medium">Email</span>
          <input
            type="email"
            className="mt-1 block w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </label>
        
        <label className="block mb-4">
          <span className="text-purple-800 font-medium">Password</span>
          <input
            type="password"
            className="mt-1 block w-full border border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </label>
        
        {error && (
          <div className="text-red-600 mb-4 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Signing in...
            </div>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
}

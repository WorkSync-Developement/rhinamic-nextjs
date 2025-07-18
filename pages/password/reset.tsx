import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';

export default function PasswordReset() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement password reset logic
      // For now, simulate success
      setTimeout(() => {
        setSuccess(true);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Password reset error:', error);
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Reset Password - Rhinamic Landscape Design</title>
        <meta name="description" content="Reset your password for Rhinamic admin access." />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-purple-900 mb-2">
                Reset Password
              </h1>
              <p className="text-gray-600">
                Enter your email and we'll send you a link to reset your password.
              </p>
            </div>

            {success ? (
              <div className="text-center">
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  <p className="font-medium">Check your email!</p>
                  <p className="text-sm mt-1">
                    If an account with that email exists, we've sent you a password reset link.
                  </p>
                </div>
                <Link 
                  href="/login"
                  className="text-purple-600 hover:text-purple-800 underline"
                >
                  Back to Login
                </Link>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="admin@example.com"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                      {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <Link 
                    href="/login"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    Back to Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

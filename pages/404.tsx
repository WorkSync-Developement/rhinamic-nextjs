import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.asPath
    );
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Rhinamic Landscape Design</title>
        <meta name="description" content="The page you're looking for couldn't be found." />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-rhinamic-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/" className="bg-rhinamic-primary hover:bg-rhinamic-dark text-white px-6 py-3 rounded-lg transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}

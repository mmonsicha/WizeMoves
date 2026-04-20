import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-slate-900">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 px-6 py-2 bg-slate-900 text-white rounded-full font-bold">
        Go Home
      </Link>
    </div>
  );
}

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Managed IT Solutions</h1>
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            Services
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/kaito-logo-dark.png" alt="Kaito IT Logo" width={140} height={40} className="h-10" />
        </Link>
        <div className="space-x-8 text-gray-700 font-medium">
          <Link href="/services/iso-27001">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/resources">Resources</Link>
        </div>
        <Link href="/contact" className="bg-blue-900 text-white font-bold py-2 px-5 rounded-md hover:bg-blue-800">
          Book a Consultation
        </Link>
      </nav>
    </header>
  );
}

export default Header;
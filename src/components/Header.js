import Link from 'next/link';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a><img src="/images/kaito-logo-dark.png" alt="Kaito IT Logo" className="h-10" /></a>
        </Link>
        <div className="space-x-8 text-gray-700 font-medium">
          <Link href="/services/iso-27001"><a>Services</a></Link>
          <Link href="/about"><a>About Us</a></Link>
          <Link href="/resources"><a>Resources</a></Link>
        </div>
        <Link href="/contact">
          <a className="bg-blue-900 text-white font-bold py-2 px-5 rounded-md hover:bg-blue-800">
            Book a Consultation
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
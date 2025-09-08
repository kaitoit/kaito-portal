export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Kaito IT Pty Ltd. All rights reserved.</p>
        <p className="mt-2 text-sm">ABN: 12 345 678 901</p>
        <div className="mt-4 space-x-6 text-sm">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="/contact" className="hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

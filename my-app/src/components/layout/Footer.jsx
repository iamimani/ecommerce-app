import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-amber-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-amber-800">GlamTowers</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Redefine your beauty, one strand at a time. Discover premium wigs,
            braids, and beauty products crafted to make you shine.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="#" className="hover:text-amber-700">Home</a></li>
            <li><a href="#" className="hover:text-amber-700">About</a></li>
            <li><a href="#" className="hover:text-amber-700">Products</a></li>
            <li><a href="#" className="hover:text-amber-700">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-amber-800 mb-3">
            Contact Us
          </h3>
          <p className="text-gray-700 text-sm">Nairobi, Kenya</p>
          <p className="text-gray-700 text-sm">+254 712 345 678</p>
          <p className="text-gray-700 text-sm">support@glamtowers.com</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-amber-800 mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-700">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-amber-700">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-amber-700">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-100 mt-10 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} GlamTowers Beauty. All rights reserved.
      </div>
    </footer>
  );
}

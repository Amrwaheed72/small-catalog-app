import { FaInstagram, FaTwitter } from 'react-icons/fa6';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute right-0 w-full bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-white">
              <NavLink to="/">NeXus</NavLink>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Your one-stop shop for timeless fashion and modern trends. Dress
              your best, feel your best.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/" className="transition-colors hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="transition-colors hover:text-white"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="transition-colors hover:text-white"
                >
                  Your Cart
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <p className="transition-colors hover:text-white">FAQ</p>
              </li>
              <li>
                <p className="transition-colors hover:text-white">Contact Us</p>
              </li>
              <li>
                <p className="transition-colors hover:text-white">
                  Privacy Policy
                </p>
              </li>
              <li>
                <p className="transition-colors hover:text-white">
                  Terms of Service
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex items-center space-x-4">
              <p className="text-gray-400 transition-colors hover:text-white">
                <span className="sr-only">Facebook</span>
                <RiFacebookCircleLine size={24} />
              </p>
              <p className="text-gray-400 transition-colors hover:text-white">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={22} />
              </p>
              <p className="text-gray-400 transition-colors hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter size={22} />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

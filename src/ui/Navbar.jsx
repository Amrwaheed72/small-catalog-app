import { NavLink } from 'react-router';
import { NavbarLinks } from '../utils/constants';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-400 bg-white/80 p-1 backdrop:blur-sm">
      <div className="mx-2 flex items-center justify-around sm:mx-6">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {NavbarLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.link}
              className={({ isActive }) =>
                `flex items-center justify-center gap-1 text-xs text-gray-600 sm:gap-2 sm:text-lg ${isActive ? 'font-semibold text-black' : ''}`
              }
            >
              <p>{link.label}</p>
              <span>{link.icon}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

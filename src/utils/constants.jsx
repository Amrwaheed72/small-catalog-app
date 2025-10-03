import { GiClothes } from 'react-icons/gi';
import { IoHome } from 'react-icons/io5';
import { IoIosInformationCircle } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';

export const NavbarLinks = [
  { link: '/', label: 'Home', icon: <IoHome /> },
  { link: '/products', label: 'Products', icon: <GiClothes /> },
  {
    link: '/about',
    label: 'About us',
    icon: <IoIosInformationCircle />,
  },
  {
    link: '/cart',
    label: '',
    icon: <FaCartShopping />,
  },
];

import { Outlet } from 'react-router';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

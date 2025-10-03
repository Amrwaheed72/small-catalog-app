import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import Navbar from './ui/Navbar';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/item-details/:id" element={<ItemDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

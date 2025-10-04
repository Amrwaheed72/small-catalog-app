import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import CartPage from './pages/CartPage';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/product-details/:id" element={<ItemDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

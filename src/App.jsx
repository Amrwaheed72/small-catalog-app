import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Layout from './pages/Layout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';

function App() {
    return (
        <div className="h-full bg-gray-100">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/about" element={<AboutUsPage />} />
                        <Route
                            path="/product-details/:id"
                            element={<ProductDetailsPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

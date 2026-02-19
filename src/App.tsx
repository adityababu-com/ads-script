import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Shop } from './pages/Shop';
import { Checkout } from './pages/Checkout';
import { Quiz } from './pages/Quiz';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Cart } from './pages/Cart';

const NotFound = () => <div className="pt-32 text-center h-screen">404 - Page Not Found</div>;

function App() {
  console.log("App component rendering...");
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-tallpop-light font-sans selection:bg-tallpop-pink selection:text-white">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

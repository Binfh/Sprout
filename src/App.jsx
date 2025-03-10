import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { ProductProvider } from './context/ProductContext';
import AddCartClick from './components/AddCartClick';
import { PriceProvider } from './context/PriceContext';
import { CartProvider } from './context/CartContext';
import CartMini from './components/CartMini';
import { ColorProvider } from './context/ColorContext';
import Plants from './pages/Plants';
import Pots from './pages/Pots';
import Sale from './pages/Sale';
import Sub from './pages/Sub';
import { Care } from './pages/Care';
import Arr1 from './pages/Arrival1';
import AllProducts from './pages/AllProducts';
import DetailProduct from './components/Detail_Products';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import Checkout from './pages/CheckOut';
import Story from './pages/Story';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <ColorProvider>
        <ProductProvider>
          <PriceProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/plants"
                  element={<Plants />}
                />
                <Route path="/pots" element={<Pots />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/sub" element={<Sub />} />
                <Route path="/care" element={<Care />} />
                <Route path="/arrival" element={<Arr1 />} />
                <Route path="/story" element={<Story />} />
                <Route
                  path="/shop"
                  element={<AllProducts />}
                />
                <Route
                  path="/cart_detail"
                  element={<Cart />}
                />
                <Route
                  path="/register"
                  element={<Register />}
                />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
                <Route
                  path="/checkout"
                  element={<Checkout />}
                />
              </Routes>
              <AddCartClick />
              <DetailProduct />
              <CartMini />
            </CartProvider>
          </PriceProvider>
        </ProductProvider>
      </ColorProvider>
    </>
  );
}

export default App;

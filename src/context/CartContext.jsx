import PropTypes from 'prop-types';
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { ProductContext } from './ProductContext';
import { PriceContext } from './PriceContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { selectedProduct, setShowCart } =
    useContext(ProductContext);
  const { price, updatePrice, priceSale } =
    useContext(PriceContext);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('small');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updatePrice(selectedSize);
  }, [selectedSize, updatePrice]);

  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const updateSize = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (!selectedProduct) return;

    const currentPrice = price;
    const currentPriceSale = priceSale;

    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === selectedProduct.id &&
          item.size === selectedSize
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === selectedProduct.id &&
          item.size === selectedSize
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...selectedProduct,
          quantity,
          size: selectedSize,
          price: currentPrice,
          priceSale: currentPriceSale,
        },
      ];
    });

    setQuantity(1);
  };

  const reduceFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === productId && item.size === size)
      )
    );
  };

  const cartTotal = cartItems
    .reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
    .toFixed(2);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const openCart = () => {
    setShowCart(true);
  };

  const dotAnimationStyle = `
    @keyframes dotFade {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }
    
    .dot-1 {
      animation: dotFade 1.2s infinite 0s;
    }
    
    .dot-2 {
      animation: dotFade 1.2s infinite 0.4s;
    }
    
    .dot-3 {
      animation: dotFade 1.2s infinite 0.8s;
    }
  `;

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantity,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        selectedSize,
        updateSize,
        addToCart,
        removeFromCart,
        reduceFromCart,
        cartTotal,
        cartCount,
        openCart,
        isLoading,
        setIsLoading,
        dotAnimationStyle,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;

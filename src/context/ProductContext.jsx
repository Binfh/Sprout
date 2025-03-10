import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] =
    useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isCheckoutActive, setIsCheckoutActive] =
    useState(false);

  const value = {
    selectedProduct,
    setSelectedProduct,
    showCart,
    setShowCart,
    cartOpen,
    setCartOpen,
    showDetail,
    setShowDetail,
    isCheckoutActive,
    setIsCheckoutActive,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

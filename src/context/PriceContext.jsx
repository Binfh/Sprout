import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from './ProductContext';

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const { selectedProduct } = useContext(ProductContext);
  const [price, setPrice] = useState(0);
  const [priceSale, setPriceSale] = useState(null);
  const [selectedSize, setSelectedSize] = useState('small');

  useEffect(() => {
    if (selectedProduct) {
      setPrice(selectedProduct.price);
      setPriceSale(selectedProduct.priceSale || null);
      setSelectedSize('small');
    }
  }, [selectedProduct]);

  const updatePrice = useCallback(
    (size) => {
      if (!selectedProduct) return;

      setSelectedSize(size);

      let newPrice = selectedProduct.price;
      let newPriceSale = selectedProduct.priceSale;

      switch (size) {
        case 'small':
          newPrice = selectedProduct.price * 1;
          newPriceSale = selectedProduct.priceSale
            ? selectedProduct.priceSale * 1
            : null;
          break;
        case 'medium':
          newPrice = selectedProduct.price * 1.4;
          newPriceSale = selectedProduct.priceSale
            ? selectedProduct.priceSale * 1.4
            : null;
          break;
        case 'large':
          newPrice = selectedProduct.price * 1.7;
          newPriceSale = selectedProduct.priceSale
            ? selectedProduct.priceSale * 1.7
            : null;
          break;
        default:
          newPrice = selectedProduct.price;
          newPriceSale = selectedProduct.priceSale
            ? selectedProduct.priceSale
            : null;
      }

      setPrice(newPrice);
      setPriceSale(newPriceSale);
    },
    [selectedProduct]
  );

  return (
    <PriceContext.Provider
      value={{
        price,
        updatePrice,
        priceSale,
        setPriceSale,
        selectedSize,
        setSelectedSize,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

PriceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

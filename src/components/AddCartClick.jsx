import {
  useContext,
  useRef,
  useEffect,
  useState,
} from 'react';
import { ProductContext } from '../context/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { PriceContext } from '../context/PriceContext';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

const AddCartClick = () => {
  const {
    selectedProduct,
    showCart,
    setShowCart,
    setCartOpen,
    setSelectedProduct,
    setShowDetail,
  } = useContext(ProductContext);
  const cartRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] =
    useState(0);
  const {
    price,
    updatePrice,
    priceSale,
    selectedSize,
    setSelectedSize,
  } = useContext(PriceContext);

  const {
    quantity,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    updateSize,
    addToCart,
    isLoading,
    setIsLoading,
    dotAnimationStyle,
  } = useCart();

  useEffect(() => {
    if (selectedProduct) {
      updatePrice(selectedSize);
      updateSize(selectedSize);
    }
  }, [
    selectedProduct,
    selectedSize,
    updatePrice,
    updateSize,
  ]);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    updatePrice(newSize);
  };

  const handleIncreaseQuantity = (e) => {
    e.preventDefault();
    increaseQuantity();
  };

  const handleDecreaseQuantity = (e) => {
    e.preventDefault();
    decreaseQuantity();
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      addToCart();
      setShowCart(false);
      setCartOpen(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleOpenDetail = (prd) => {
    setSelectedProduct(prd);
    setShowCart(false);
    setShowDetail(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setShowCart(false);
      }
    };

    if (showCart) {
      document.addEventListener(
        'mousedown',
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [showCart, setShowCart]);

  if (!showCart) return null;

  const totalPrice = (price * quantity).toFixed(2);
  const totalPriceSale = priceSale
    ? (priceSale * quantity).toFixed(2)
    : null;

  return (
    <div className="fixed inset-0 bg-[var(--bg-4)]/50 z-[100] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        ref={cartRef}
        className="fixed top-0 bottom-0 max-w-[936px] w-full h-screen z-[101] border-l border-r border-solid border-black bg-[var(--bg-arr)]"
      >
        <div className="px-8 pt-5">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowCart(false)}
              className="text-white text-2xl !bg-[var(--bg-5)] px-2 py-1 rounded-full hover:opacity-70"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>

          {selectedProduct && (
            <div className="grid grid-cols-2 gap-5 pb-4 mt-4">
              <div className="pl-10 relative">
                <div className="relative w-full h-[95%] max-sm:h-[90%] overflow-hidden">
                  {selectedProduct.image.map(
                    (img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={selectedProduct.name}
                        className={`absolute top-0 left-0 w-full h-full rounded object-cover transition-opacity duration-300 ${
                          index === selectedImageIndex
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    )
                  )}
                </div>

                <div className="flex justify-center items-center gap-2 mt-2 ">
                  {selectedProduct.image.map((_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="options"
                      checked={selectedImageIndex === index}
                      onChange={() =>
                        setSelectedImageIndex(index)
                      }
                      className="mt-2 cursor-pointer
                              appearance-none 
                              w-3 h-3 
                              rounded-full 
                              border border-black/50
                              !bg-transparent
                              checked:!bg-white checked:!border-black 
                              hover:!border-black hover:!bg-white"
                    />
                  ))}
                </div>
              </div>
              <div className="pl-10 max-sm:pl-5 pt-5 max-md:pt-0">
                <h1 className="font-[forum] text-[34px] py-2">
                  {selectedProduct.name}
                </h1>
                <p className="!pt-7 text-[21px] font-[questrial]">
                  {priceSale && totalPriceSale && (
                    <span className="!pr-2 line-through text-gray-500">
                      ${totalPriceSale}
                    </span>
                  )}
                  ${totalPrice}
                  {quantity > 1 && (
                    <span className="text-sm pt-2 block text-gray-500">
                      (${parseFloat(price).toFixed(2)} each)
                    </span>
                  )}
                </p>
                <form className="mt-2 pr-[6px]">
                  <div className="pt-9 relative">
                    <label
                      className="block font-[questrial] text-[18px]"
                      htmlFor="size"
                    >
                      Size
                    </label>
                    <select
                      className="block mt-4 p-3 appearance-none w-full font-[questrial] cursor-pointer !bg-white border border-solid border-[var(--bg-4)]"
                      name="size"
                      id="size"
                      value={selectedSize}
                      onChange={handleSizeChange}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                    <div className="absolute top-[90px] right-4 transform -translate-y-1/2 pointer-events-none text-black">
                      ▼
                    </div>
                  </div>
                  <div className="pt-9 relative">
                    <label
                      className="block mb-4"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <input
                      className="!bg-white p-3 appearance-none w-[80px] text-center border border-solid border-[var(--bg-4)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-inner-spin-button]:appearance-none"
                      min={1}
                      max={999}
                      value={quantity}
                      type="number"
                      id="quantity"
                      onChange={(e) =>
                        updateQuantity(
                          parseInt(e.target.value, 10) || 1
                        )
                      }
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={handleIncreaseQuantity}
                      className="absolute top-[70px] left-[60px] text-black text-[20px]"
                    >
                      <FontAwesomeIcon icon={faSortUp} />
                    </button>
                    <button
                      type="button"
                      onClick={handleDecreaseQuantity}
                      className="absolute top-[90px] left-[60px] text-black text-[20px]"
                    >
                      <FontAwesomeIcon icon={faSortDown} />
                    </button>
                  </div>
                </form>
                <style>{dotAnimationStyle}</style>
                <button
                  onClick={handleAddToCart}
                  className="mt-10 w-[90%] py-3 px-5 rounded text-center text-white !bg-[var(--bg-hover1)] hover:opacity-80"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-1 ">
                      <span className="p-[2px] rounded-full bg-black dot-1"></span>
                      <span className="p-[2px] rounded-full bg-black dot-2"></span>
                      <span className="p-[2px] rounded-full bg-black dot-3"></span>
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <p
                  key={selectedProduct.id}
                  onClick={() =>
                    handleOpenDetail(selectedProduct)
                  }
                  className="hover:underline cursor-pointer font-[questrial] !pt-4 block"
                >
                  View More Detail
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AddCartClick;

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
  faMinus,
  faPlus,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { PriceContext } from '../context/PriceContext';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const DetailProduct = () => {
  const {
    selectedProduct,
    showDetail,
    setShowDetail,
    setCartOpen,
  } = useContext(ProductContext);
  const detailRef = useRef(null);
  const [selectedImageIndex, setSelectedImageIndex] =
    useState(0);
  const {
    price,
    updatePrice,
    priceSale,
    selectedSize,
    setSelectedSize,
  } = useContext(PriceContext);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

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
      setSelectedSize('small');
      updatePrice('small');
      updateSize('small');
      updateQuantity(1);
    }
  }, [selectedProduct]);

  useEffect(() => {
    updatePrice(selectedSize);
    updateSize(selectedSize);
  }, [selectedSize, updatePrice, updateSize]);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    updatePrice(newSize);
    updateSize(newSize);
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
      setShowDetail(false);
      setCartOpen(true);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        detailRef.current &&
        !detailRef.current.contains(event.target)
      ) {
        setShowDetail(false);
      }
    };

    if (showDetail) {
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
  }, [showDetail, setShowDetail]);

  if (!showDetail) return null;

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
        ref={detailRef}
        className={`max-w-[936px] absolute inset-0 m-auto w-full border-l border-r border-t border-solid border-black bg-[var(--bg-arr)] overflow-y-auto max-h-screen h-full pt-2 pb-6 ${
          openSection ? 'pb-[60px]' : 'pb-[120px]'
        }`}
      >
        <div className="px-8 pt-4">
          <div className="flex justify-between items-center gap-2 mb-10 text-[18px] font-[questrial]">
            <h1 className="font-[forum] max-md:w-[50px] text-5xl">
              {selectedProduct.name} Detail
            </h1>
            <button
              onClick={() => setShowDetail(false)}
              className="text-white text-2xl !bg-[var(--bg-5)] px-2 py-1 rounded-full hover:opacity-70"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>

          {selectedProduct && (
            <div className="grid grid-cols-5 gap-5 pb-4 mt-4">
              <div className="col-span-3 relative">
                <div className="relative max-w-[500px] w-full max-h-[678px] h-full overflow-hidden">
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

                <div className="flex justify-center items-center gap-2 mt-2">
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
                <div className="mt-5 w-full">
                  <p className="text-[18px] font-[questrial] whitespace-pre-wrap">
                    {selectedProduct.des}
                  </p>
                </div>
              </div>
              <div className="col-span-2 ">
                <h1 className="font-[forum] text-[34px] !pb-7">
                  {selectedProduct.name}
                </h1>
                <Rating
                  rating={selectedProduct.rating}
                  reviews={selectedProduct.review}
                />
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
                <div className="w-full">
                  <div className="block">
                    <div className="flex items-center justify-between border-b border-black/60 w-full">
                      <span className="py-6 font-[questrial] text-[21px]">
                        Product Info
                      </span>
                      <FontAwesomeIcon
                        onClick={() =>
                          toggleSection('productInfo')
                        }
                        icon={
                          openSection === 'productInfo'
                            ? faMinus
                            : faPlus
                        }
                        className="cursor-pointer"
                      />
                    </div>
                    {openSection === 'productInfo' && (
                      <p className="!pb-6 font-[questrial] text-[16px] leading-[1.5]">
                        {selectedProduct.detail}
                      </p>
                    )}
                  </div>

                  <div className="block">
                    <div className="flex items-center justify-between border-b border-black/60 w-full">
                      <span className="py-6 font-[questrial] text-[21px]">
                        Return & Refund Policy
                      </span>
                      <FontAwesomeIcon
                        onClick={() =>
                          toggleSection('returnPolicy')
                        }
                        icon={
                          openSection === 'returnPolicy'
                            ? faMinus
                            : faPlus
                        }
                        className="cursor-pointer"
                      />
                    </div>
                    {openSection === 'returnPolicy' && (
                      <p className="!pb-6 font-[questrial] text-[16px] leading-[1.5]">
                        We want you to be completely
                        satisfied with your purchase...
                      </p>
                    )}
                  </div>

                  <div className="block">
                    <div className="flex items-center justify-between">
                      <span className="py-6 font-[questrial] text-[21px]">
                        Shipping Information
                      </span>
                      <FontAwesomeIcon
                        onClick={() =>
                          toggleSection('shippingInfo')
                        }
                        icon={
                          openSection === 'shippingInfo'
                            ? faMinus
                            : faPlus
                        }
                        className="cursor-pointer"
                      />
                    </div>
                    {openSection === 'shippingInfo' && (
                      <p className="!pb-6 font-[questrial] text-[16px] leading-[1.5]">
                        We strive to provide clear and
                        transparent shipping details...
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      to={
                        'https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fsprout%2Fproduct-page%2Fgraphite-pot'
                      }
                    >
                      <svg
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <g>
                          <path
                            fill="#E0E0E0"
                            d="M13.6,2.3C12.1,0.8,10.2,0,8,0C3.7,0,0.1,3.6,0.1,7.9c0,1.4,0.4,2.8,1.1,4L0,16l4.2-1.1c1.2,0.6,2.5,1,3.8,1h0 h0c4.4,0,7.9-3.6,7.9-7.9C16,5.8,15.1,3.8,13.6,2.3L13.6,2.3z M8,14.5L8,14.5c-1.2,0-2.3-0.3-3.4-0.9l-0.2-0.1l-2.5,0.7l0.7-2.4 l-0.2-0.2c-0.7-1-1-2.3-1-3.5c0-3.6,3-6.6,6.6-6.6c1.8,0,3.4,0.7,4.7,1.9c1.2,1.2,1.9,2.9,1.9,4.7C14.6,11.6,11.7,14.5,8,14.5z"
                          ></path>
                          <path
                            fill="#60D66A"
                            d="M0.4,15.5l1.1-3.9c-0.7-1.1-1-2.4-1-3.8c0-4.2,3.4-7.6,7.6-7.6c2,0,3.9,0.8,5.4,2.2c1.4,1.4,2.2,3.3,2.2,5.4 c0,4.2-3.4,7.6-7.6,7.6c0,0,0,0,0,0h0c-1.3,0-2.5-0.3-3.6-0.9L0.4,15.5L0.4,15.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M6.1,4.6C5.9,4.2,5.8,4.2,5.6,4.2c-0.1,0-0.2,0-0.4,0c-0.1,0-0.3,0-0.5,0.2C4.6,4.7,4,5.1,4,6.1 c0,1,0.7,1.9,0.8,2c0.1,0.1,1.4,2.2,3.3,3c1.7,0.7,2,0.5,2.4,0.5c0.4,0,1.2-0.5,1.3-0.9C12,10.2,12,9.8,12,9.7 c0-0.1-0.2-0.1-0.4-0.2c-0.2-0.1-1.2-0.6-1.3-0.6C10.1,8.8,10,8.7,9.8,8.9C9.7,9.1,9.3,9.6,9.2,9.7C9.1,9.8,9,9.9,8.8,9.8 C8.6,9.7,8,9.5,7.2,8.8c-0.6-0.5-1-1.2-1.1-1.4C6,7.2,6.1,7.1,6.2,7c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.2,0.2-0.3 c0.1-0.1,0-0.2,0-0.3C6.6,5.9,6.2,4.9,6.1,4.6L6.1,4.6z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M13.6,2.3C12.1,0.8,10.1,0,8,0C3.7,0,0.2,3.5,0.2,7.8c0,1.4,0.4,2.7,1,3.9l-1.1,4.1l4.2-1.1 c1.1,0.6,2.4,1,3.7,1h0h0c4.3,0,7.8-3.5,7.8-7.8C15.9,5.8,15.1,3.8,13.6,2.3L13.6,2.3z M8,14.4L8,14.4c-1.2,0-2.3-0.3-3.3-0.9 l-0.2-0.1L2,14l0.7-2.4l-0.2-0.2c-0.7-1-1-2.2-1-3.5c0-3.6,2.9-6.5,6.5-6.5c1.7,0,3.4,0.7,4.6,1.9c1.2,1.2,1.9,2.9,1.9,4.6 C14.5,11.4,11.6,14.4,8,14.4z"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                    <Link to={'https://www.facebook.com/'}>
                      <svg
                        viewBox="0 0 8 16"
                        fill="currentColor"
                        width="8"
                        height="16"
                        className="text-[#3a5897]"
                      >
                        <path
                          fill="currentColor"
                          d="M7.829 3.505h-2.21c-0.229 0-0.533 0.305-0.533 0.762v1.6h2.743v2.21h-2.743v6.705h-2.514v-6.705h-2.362v-2.21h2.362v-1.295c0-1.905 1.295-3.429 3.124-3.429h2.133c0 0 0 2.362 0 2.362z"
                        ></path>
                      </svg>
                    </Link>
                    <Link to={'https://x.com/'}>
                      <svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        className="text-[#2fc7f2]"
                      >
                        <path
                          fill="currentColor"
                          d="M15.238 3.962c-0.533 0.229-1.067 0.381-1.676 0.457 0.61-0.381 1.067-0.914 1.295-1.6-0.533 0.305-1.143 0.533-1.829 0.686-0.533-0.533-1.295-0.914-2.133-0.914-1.6 0-2.895 1.295-2.895 2.895 0 0.229 0 0.457 0.076 0.686-2.362-0.152-4.495-1.295-5.943-2.971-0.229 0.381-0.381 0.914-0.381 1.371 0 1.067 0.533 1.905 1.295 2.438-0.457 0-0.914-0.152-1.295-0.381 0 0 0 0 0 0 0 1.371 0.99 2.59 2.286 2.819-0.229 0.076-0.533 0.076-0.762 0.076-0.152 0-0.381 0-0.533-0.076 0.381 1.143 1.448 1.981 2.667 1.981-0.99 0.762-2.21 1.219-3.581 1.219-0.229 0-0.457 0-0.686-0.076 1.295 0.838 2.819 1.295 4.419 1.295 5.257 0 8.152-4.419 8.152-8.152 0-0.152 0-0.229 0-0.381 0.61-0.229 1.067-0.762 1.524-1.371z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DetailProduct;

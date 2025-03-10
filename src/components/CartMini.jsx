import {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faShoppingCart,
  faTrash,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

const CartMini = () => {
  const { cartOpen, setCartOpen, setIsCheckoutActive } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const {
    cartItems,
    cartTotal,
    cartCount,
    removeFromCart,
    resetCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleCheckout = () => {
    if (!paymentMethod) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      localStorage.setItem('paymentMethod', paymentMethod);
      localStorage.setItem('isCheckoutActive', 'true');
      setIsCheckoutActive(true);
      setCartOpen(false);
      navigate('/checkout');
      setPaymentMethod('');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setCartOpen(false);
      }
    };

    if (cartOpen) {
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
  }, [cartOpen, setCartOpen]);

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 bg-[var(--bg-4)]/50 z-[100] flex items-center justify-center">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 1 }}
        ref={cartRef}
        className="fixed top-0 right-0 max-w-[450px] max-md:max-w-[350px] w-full h-screen z-[101] p-6 border-l border-solid rounded-tl-2xl rounded-bl-2xl bg-white shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-thin text-[24px]">
            Cart ( {cartCount} )
          </h3>
          <button
            onClick={() => setCartOpen(false)}
            className="text-[var(--bg-5)] text-xl hover:opacity-70"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        {cartItems.length > 0 && (
          <>
            <div className="block h-[55%] overflow-auto">
              <div className="border-t border-b border-gray-200 py-4 my-3">
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between"
                  >
                    <div className="flex gap-4 mb-5 w-[60%]">
                      <div className="w-24 h-24 overflow-hidden">
                        <img
                          src={item.image[0]}
                          alt={item.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-[forum] text-lg mb-1">
                          {item.name}
                        </h4>
                        <div className="text-sm font-[questrial] text-gray-600 mb-2">
                          <p>
                            Size:{' '}
                            {item.size
                              .charAt(0)
                              .toUpperCase() +
                              item.size.slice(1)}
                          </p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="mb-9 mt-2 hover:text-blue-400"
                        onClick={() =>
                          removeFromCart(item.id, item.size)
                        }
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <p className="font-[questrial] text-lg">
                        $
                        {(
                          item.price * item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center my-3">
              <div>
                <p className="font-[questrial] font-bold text-lg">
                  Total: ${cartTotal}
                </p>
              </div>
              <div className="flex items-center">
                Remove all from cart
                <button
                  onClick={() => resetCart()}
                  className=" p-2 ml-1 rounded !bg-amber-200"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <button
                className="w-full py-3 px-5 rounded text-center text-white !bg-[var(--bg-hover1)] hover:opacity-80"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Select Payment Method:
                </h3>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="credit_card"
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />
                    Credit Card
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />
                    PayPal
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="payment_upon_receipt"
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />
                    Payment upon receipt
                  </label>
                </div>
              </div>
              <Link
                to="/cart_detail"
                className="w-full py-3 px-5 rounded text-center border border-[var(--bg-hover1)] text-[var(--bg-hover1)] hover:bg-gray-50 flex items-center justify-center gap-2"
                onClick={() => setCartOpen(false)}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                View Cart
              </Link>
            </div>
          </>
        )}
        {cartItems.length === 0 && (
          <div className="h-full py-5 flex items-center justify-center text-4xl font-[corben]">
            Your cart is empty
          </div>
        )}
        {showAlert && (
          <motion.div
            initial={{
              y: '-100%',
              x:
                window.innerWidth <= 640
                  ? '-100%'
                  : window.innerWidth <= 768
                  ? '-400px'
                  : '-500px',
            }}
            animate={{
              y: 0,
              x:
                window.innerWidth <= 640
                  ? '0%'
                  : window.innerWidth <= 768
                  ? '-400px'
                  : '-500px',
            }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 right-4 max-sm:left-4 bg-red-500 max-sm:w-[100px] text-white py-5 px-4 rounded shadow-lg"
          >
            Please select a payment method!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CartMini;

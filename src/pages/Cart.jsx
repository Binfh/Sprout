import { useContext, useState } from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    cartCount,
    removeFromCart,
    resetCart,
  } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { setIsCheckoutActive } =
    useContext(ProductContext);

  const handleCheckout = () => {
    if (!paymentMethod) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      localStorage.setItem('paymentMethod', paymentMethod);
      localStorage.setItem('isCheckoutActive', 'true');
      setIsCheckoutActive(true);
      navigate('/checkout');
      setPaymentMethod('');
    }
  };

  return (
    <div className="bg-black">
      <Header />
      <div className="max-w-[980px] max-lg:mb-[180px] max-lg:max-w-[700px] max-lg:top-[200px] max-md:top-[300px] max-md:mb-[300px] max-md:max-w-[500px] max-sm:max-w-[400px] relative w-full top-[162px] mb-[140px] mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">
          Cart Detail
        </h2>

        {cartItems.length > 0 ? (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-4"
                >
                  <div className="flex gap-4 items-center w-2/3">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Size: {item.size}
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() =>
                        removeFromCart(item.id, item.size)
                      }
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <p className="text-lg font-semibold mt-2">
                      $
                      {(item.price * item.quantity).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between max-md:flex-col items-center max-md:items-start">
              <div className="mt-6">
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
              <div className="flex items-center mt-6">
                Remove all from cart
                <button
                  onClick={() => resetCart()}
                  className=" p-2 ml-1 rounded !bg-amber-200"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>

            <div className="flex justify-between max-md:flex-col items-center max-md:items-start mt-6">
              <p className="text-xl max-md:text-[16px] font-bold">
                Total quantity: {cartCount}
              </p>
              <p className="text-xl max-md:text-[16px] font-bold">
                Total amount: ${cartTotal}
              </p>
              <button
                onClick={handleCheckout}
                className="px-5 py-3 !bg-blue-500 text-white rounded hover:!bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="h-[60vh] flex items-center justify-center">
            <p className=" text-4xl">Your cart is empty.</p>
          </div>
        )}
      </div>
      <Footer />

      {showAlert && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{
            x: 0,
            y: window.innerWidth <= 640 ? '50px' : 0,
          }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 right-4 bg-red-500 text-white py-2 px-4 rounded shadow-lg"
        >
          Please select a payment method!
        </motion.div>
      )}
    </div>
  );
};

export default Cart;

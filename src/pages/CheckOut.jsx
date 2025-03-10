import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext'; // Adjust import path as needed
import Header from '../components/Header'; // Adjust import path as needed
import Footer from '../components/Footer'; // Adjust import path as needed

const Checkout = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useCart();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    const storedUserInfo = localStorage.getItem('userInfo');
    const selectedPayment =
      localStorage.getItem('paymentMethod');

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    if (selectedPayment) {
      setPaymentMethod(selectedPayment);
    }

    if (cartItems.length === 0) {
      navigate('/cart_detail');
    }
  }, [navigate, cartItems.length]);

  const getPaymentMethodName = (method) => {
    switch (method) {
      case 'credit_card':
        return 'Credit Card';
      case 'paypal':
        return 'PayPal';
      default:
        return 'Payment upon receipt';
    }
  };

  if (!userInfo || cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#81b341]">
      <Header />
      <div className="relative top-[162px] max-lg:top-[200px] max-md:top-[280px] mb-[200px] max-md:mb-[250px] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Checkout
              </h1>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold  !pb-2">
                  Customer Information
                </h2>

                <div className="bg-white/70 p-4 rounded-lg shadow">
                  <div className="flex justify-center mb-4">
                    <img
                      className="w-20 h-20 rounded-full shadow"
                      src="/src/assets/background/james-person-1.jpg"
                      alt="User profile"
                    />
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Username:
                      </span>
                      <span>{userInfo.username}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Email:
                      </span>
                      <span>{userInfo.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Phone:
                      </span>
                      <span>{userInfo.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">
                        Payment Method:
                      </span>
                      <span>
                        {getPaymentMethodName(
                          paymentMethod
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg shadow">
                  <h3 className="font-semibold !mb-2">
                    Shipping Status
                  </h3>
                  <div className="bg-yellow-100 text-yellow-800 p-3 rounded-md">
                    <div className="font-medium">
                      Processing ...
                    </div>
                    <div className="text-sm">
                      Your order is being prepared for
                      shipping
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold  !pb-2">
                  Order Summary
                </h2>

                <div className="bg-white/70 p-4 rounded-lg shadow">
                  <div className="max-h-[400px] overflow-auto">
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 mb-4 pb-4 border-b border-gray-200 last:border-0"
                      >
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image[0]}
                            alt={item.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-lg">
                            {item.name}
                          </h4>
                          <div className="text-sm text-gray-600 mt-1">
                            <div>
                              Size:{' '}
                              {item.size
                                .charAt(0)
                                .toUpperCase() +
                                item.size.slice(1)}
                            </div>
                            <div>
                              Quantity: {item.quantity}
                            </div>
                            <div>
                              Price: $
                              {(
                                item.price * item.quantity
                              ).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span>${cartTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

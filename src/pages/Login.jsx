import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWarning,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(
      localStorage.getItem('userInfo')
    );

    if (
      userInfo &&
      userInfo.email === e.target.email.value &&
      userInfo.password === e.target.password.value
    ) {
      // Set login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setAlert(true);
      setTimeout(() => setAlert(false), 4000);
    }
  };

  return (
    <div className="relative min-h-screen flex">
      <div
        className="w-1/2 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/background/bg-sign_in_out1.jpg')",
        }}
      ></div>

      <div
        className="w-1/2 min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/background/bg-sign_in_out2.jpg')",
        }}
      ></div>
      <div className="flex justify-center absolute inset-0 items-center min-h-screen">
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className=" fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center justify-between w-80 z-50"
          >
            <div>
              <FontAwesomeIcon icon={faWarning} /> Wrong
              login information!
            </div>
            <FontAwesomeIcon
              className=" cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setAlert(false);
              }}
              icon={faClose}
            />
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 4, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-1 bg-red-500"
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-md w-96"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <motion.h1
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className=" text-2xl font-bold"
              >
                Login
              </motion.h1>
            </div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <input
                type="email"
                id="email"
                placeholder="Email"
                className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="password"
                id="password"
                placeholder="Password"
                className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className=" w-full !bg-blue-500 text-white py-2 rounded hover:!bg-blue-600 transition duration-200"
            >
              Login
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center"
            >
              Don&#39;t have an account?
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700 ml-1"
              >
                Register
              </Link>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

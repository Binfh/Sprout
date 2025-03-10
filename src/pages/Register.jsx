import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWarning,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      username: e.target.username.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
    };

    if (
      !userInfo.username ||
      !userInfo.email ||
      !userInfo.phone ||
      !userInfo.password
    ) {
      setAlert(true);
      setTimeout(() => setAlert(false), 4000);
    } else {
      localStorage.setItem(
        'userInfo',
        JSON.stringify(userInfo)
      );
      navigate('/login');
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
      <div className="flex justify-center items-center absolute inset-0 min-h-screen">
        {alert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="alert fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center justify-between w-80 z-50"
          >
            <div>
              <FontAwesomeIcon icon={faWarning} /> Please
              fill in all information!
            </div>
            <FontAwesomeIcon
              className="ic_close cursor-pointer"
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
                Register
              </motion.h1>
            </div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <input
                type="text"
                id="username"
                placeholder="Username"
                className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="email"
                id="email"
                placeholder="Email"
                className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                maxLength="11"
                pattern="[0-9]{10,11}"
                title="Please enter 10 to 11 digits"
                className=" w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
              Register
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-center"
            >
              Already have an account?
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 ml-1"
              >
                Login
              </Link>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;

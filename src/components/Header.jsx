import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCartShopping,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ColorContext } from '../context/ColorContext';
import { options } from '../../constants/MenuOptions';
import SearchBar from './Search';

const Header = () => {
  const { cartCount } = useCart();
  const { setCartOpen } = useContext(ProductContext);
  const { color, setColor } = useContext(ColorContext);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [showResults, setShowResults] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { isCheckoutActive, setIsCheckoutActive } =
    useContext(ProductContext);

  useEffect(() => {
    const checkoutStatus = localStorage.getItem(
      'isCheckoutActive'
    );
    if (checkoutStatus === 'true') {
      setIsCheckoutActive(true);
    }
  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus =
        localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loginStatus);
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener(
        'storage',
        checkLoginStatus
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleOpen = () => {
    setCartOpen(true);
  };

  const location = useLocation();

  useEffect(() => {
    setColor(location.pathname);
  }, [location.pathname, setColor]);

  return (
    <header className="min-h-[162px] absolute inset-x-0 top-0 w-full ">
      <div className="mx-auto max-w-screen-xl px-6 max-xl:max-w-[1000px] max-lg:max-w-[750px] ">
        <div className="flex items-center max-lg:justify-between text-white py-4 max-lg:pb-0">
          <div className="my-[60px] pl-[60px] pr-[60px] max-xl:px-0 max-lg:px-5  ">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              className="lg:hidden "
            >
              <button
                onClick={handleOpenMenu}
                className="p-2 focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`bg-[var(--bg-header)] max-lg:bg-black flex items-center max-lg:flex-col border border-[var(--bd1)] rounded-[5px] shadow-[0_1px_4px_#0009] overflow-hidden ${
                isMenuActive ? ' border-white' : ''
              }
              ${
                isMenuOpen
                  ? 'max-lg:absolute max-lg:top-[120px] max-lg:w-40 max-lg:z-50 max-lg:flex max-md:w-1/3'
                  : 'max-lg:hidden lg:flex'
              }`}
            >
              {options.map((opt, idx) => (
                <li
                  className={`cursor-pointer hover:bg-[var(--bg-hover1)] transition-colors duration-400 ease-in-out
                px-[15px] leading-10 hover:first:rounded-bl-[5px] hover:first:rounded-tl-[5px] hover:last:rounded-tr-[5px] hover:last:rounded-br-[5px] font-[questrial] text-[18px] max-lg:w-full max-lg:text-center max-lg:hover:first:rounded-bl-[0px] max-lg:hover:last:rounded-tr-[0px] ${
                  color === opt.href
                    ? 'bg-[var(--bg-hover1)]'
                    : ''
                }`}
                  key={idx}
                >
                  <Link
                    onClick={() => {
                      setColor(opt.href);
                      setIsMenuActive(true);
                      setIsMenuOpen(false);
                    }}
                    to={opt.href}
                  >
                    {opt.name}
                  </Link>
                </li>
              ))}
              <li className="font-[questrial] text-[18px] lg:hidden max-lg:w-full max-lg:text-center px-[15px] leading-10 hover:bg-green-400">
                <Link to={'/'}>Home</Link>
              </li>
              <div className="bg-[var(--bg-header)] rounded-[4px] max-lg:py-2 lg:hidden">
                <button
                  className={`py-[6px] px-[7px] border border-[var(--bd1)] rounded-[5px] ${
                    isMenuActive ? ' ' : ''
                  }`}
                >
                  {isLoggedIn ? (
                    <div className="flex items-center justify-between">
                      <svg
                        className="w-10 text-white fill-white px-[7px]"
                        data-bbox="0 0 50 50"
                        data-type="shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        onClick={() => navigate('/profile')}
                      >
                        <g>
                          <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                        </g>
                      </svg>
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        onClick={handleLogout}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <svg
                        className="w-10 text-white fill-white px-[7px]"
                        data-bbox="0 0 50 50"
                        data-type="shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                      >
                        <g>
                          <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                        </g>
                      </svg>
                      <Link
                        to={'/login'}
                        className="px-[7px] font-[questrial] hover:text-[#b5b2af] text-[18px]"
                      >
                        Log in
                      </Link>
                    </div>
                  )}
                </button>
              </div>
            </motion.ul>
          </div>
          <Link
            to={'/'}
            className="my-5 max-lg:hidden flex justify-center items-center mx-[30px]"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative top-[-15px] "
            >
              <svg
                className="w-[88px] h-[82px] "
                preserveAspectRatio="xMidYMid meet"
                data-bbox="22.539 27 154.904 146"
                viewBox="22.539 27 154.904 146"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="img"
                aria-label="Homepage"
              >
                <defs>
                  <style>{`svg [data-color="1"] {fill: #FFFFFF;}`}</style>
                </defs>
                <g>
                  <path
                    d="m176.525 119.164-33.144-8.89V70.405C143.381 46.471 123.921 27 100 27S56.619 46.47 56.619 70.405v16.598l-32.464-8.707a1.316 1.316 0 0 0-.681 2.541l33.144 8.89v39.868C56.619 153.529 76.079 173 100 173s43.381-19.471 43.381-43.405v-16.598l32.465 8.707a1.316 1.316 0 0 0 .679-2.54zM59.247 70.405c0-22.483 18.281-40.775 40.752-40.775s40.752 18.292 40.752 40.775v36.923c-3.334-5.17-6.838-9.807-10.406-13.928 9.222-20.394-4.124-35.113-4.26-35.259a1.386 1.386 0 0 0-1.162-.434c-.452.053-.82.298-1.041.674-6.232 10.632-4.488 20.118-1.572 26.598-7.621-7.232-15.071-12.378-21.186-15.912 3.481-9.406-4.359-15.415-4.439-15.475a1.38 1.38 0 0 0-2.151.715c-1.497 5.064-.435 9.036.999 11.744-9.865-4.945-16.746-6.445-17.078-6.516-.75-.159-1.48.32-1.637 1.067a1.381 1.381 0 0 0 1.066 1.638c.233.05 15.106 3.371 32.311 16.158-14.408-2.013-23.349 7.627-23.449 7.739a1.38 1.38 0 0 0 .431 2.175c5.333 2.54 10.177 2.965 14.336 2.326 7.351-1.131 12.55-5.576 14.553-7.56 7.649 6.527 15.466 14.997 22.462 25.893L59.247 87.707V70.405zm67.096-1.26a1.38 1.38 0 0 0-1.445 1.316c-.259 5.575.619 11.856 1.468 16.403-3.165-5.372-6.443-14.597-1.081-25.282a30.528 30.528 0 0 1 3.89 7.528c2.174 6.186 2.25 12.546.248 18.958-.9-4.448-2.044-11.487-1.765-17.48a1.38 1.38 0 0 0-1.315-1.443zm-24.925 17.08c.306-.042.609-.087.913-.133 2.702-.416 5.346-1.019 7.604-1.613-4.318 2.776-11.217 5.386-19.661 2.158 2.985-2.458 10.339-7.218 20.698-5.31-2.719.774-6.342 1.672-9.927 2.159-.736.112-1.286.8-1.182 1.557a1.38 1.38 0 0 0 1.555 1.182zM99.026 66.43c-1.287-1.722-2.866-4.773-2.344-8.961 1.446 1.772 3.195 4.884 2.344 8.961zm41.726 63.164c0 22.483-18.281 40.775-40.752 40.775s-40.752-18.292-40.752-40.775V90.43l81.504 21.861v17.303z"
                    fill="#F15A24"
                    data-color="1"
                  ></path>
                </g>
              </svg>
              <p className="font-[corben] text-2xl absolute top-[44px] left-[42%]">
                S
              </p>
              <p className="font-[corben] text-2xl absolute right-[2px]">
                Sprout
              </p>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-[60px] pl-[60px] pr-[60px] max-xl:px-0 "
          >
            <div className="flex gap-4">
              <div className="bg-[var(--bg-header)] rounded-[4px] max-lg:hidden">
                <button
                  className={`py-[6px] px-[7px] border border-[var(--bd1)] rounded-[5px] ${
                    isMenuActive ? ' ' : ''
                  }`}
                >
                  {isLoggedIn ? (
                    <div className="flex items-center justify-between">
                      <svg
                        className="w-10 text-white fill-white px-[7px]"
                        data-bbox="0 0 50 50"
                        data-type="shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        onClick={() => navigate('/profile')}
                      >
                        <g>
                          <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                        </g>
                      </svg>
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        onClick={handleLogout}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <svg
                        className="w-10 text-white fill-white px-[7px]"
                        data-bbox="0 0 50 50"
                        data-type="shape"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                      >
                        <g>
                          <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
                        </g>
                      </svg>
                      <Link
                        to={'/login'}
                        className="px-[7px] font-[questrial] hover:text-[#b5b2af] text-[18px]"
                      >
                        Log in
                      </Link>
                    </div>
                  )}
                </button>
              </div>
              <SearchBar
                showResults={showResults}
                setShowResults={setShowResults}
              />
              {!showResults && (
                <div className="flex items-center gap-4">
                  {isCheckoutActive && (
                    <FontAwesomeIcon
                      onClick={() => navigate('/checkout')}
                      className="cursor-pointer"
                      icon={faTruck}
                    />
                  )}
                  <div className="flex items-center cursor-pointer">
                    <button onClick={handleOpen}>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                      />
                    </button>
                    <span className="pl-[2px]">Cart</span>
                    <span className="pl-2">
                      {cartCount}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <Link
          to={'/'}
          className="lg:hidden flex justify-center items-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative top-[-15px] max-lg:top-[-110px] max-md:top-[-15px]"
          >
            <svg
              className="w-[88px] h-[82px] "
              preserveAspectRatio="xMidYMid meet"
              data-bbox="22.539 27 154.904 146"
              viewBox="22.539 27 154.904 146"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="img"
              aria-label="Homepage"
            >
              <defs>
                <style>{`svg [data-color="1"] {fill: #FFFFFF;}`}</style>
              </defs>
              <g>
                <path
                  d="m176.525 119.164-33.144-8.89V70.405C143.381 46.471 123.921 27 100 27S56.619 46.47 56.619 70.405v16.598l-32.464-8.707a1.316 1.316 0 0 0-.681 2.541l33.144 8.89v39.868C56.619 153.529 76.079 173 100 173s43.381-19.471 43.381-43.405v-16.598l32.465 8.707a1.316 1.316 0 0 0 .679-2.54zM59.247 70.405c0-22.483 18.281-40.775 40.752-40.775s40.752 18.292 40.752 40.775v36.923c-3.334-5.17-6.838-9.807-10.406-13.928 9.222-20.394-4.124-35.113-4.26-35.259a1.386 1.386 0 0 0-1.162-.434c-.452.053-.82.298-1.041.674-6.232 10.632-4.488 20.118-1.572 26.598-7.621-7.232-15.071-12.378-21.186-15.912 3.481-9.406-4.359-15.415-4.439-15.475a1.38 1.38 0 0 0-2.151.715c-1.497 5.064-.435 9.036.999 11.744-9.865-4.945-16.746-6.445-17.078-6.516-.75-.159-1.48.32-1.637 1.067a1.381 1.381 0 0 0 1.066 1.638c.233.05 15.106 3.371 32.311 16.158-14.408-2.013-23.349 7.627-23.449 7.739a1.38 1.38 0 0 0 .431 2.175c5.333 2.54 10.177 2.965 14.336 2.326 7.351-1.131 12.55-5.576 14.553-7.56 7.649 6.527 15.466 14.997 22.462 25.893L59.247 87.707V70.405zm67.096-1.26a1.38 1.38 0 0 0-1.445 1.316c-.259 5.575.619 11.856 1.468 16.403-3.165-5.372-6.443-14.597-1.081-25.282a30.528 30.528 0 0 1 3.89 7.528c2.174 6.186 2.25 12.546.248 18.958-.9-4.448-2.044-11.487-1.765-17.48a1.38 1.38 0 0 0-1.315-1.443zm-24.925 17.08c.306-.042.609-.087.913-.133 2.702-.416 5.346-1.019 7.604-1.613-4.318 2.776-11.217 5.386-19.661 2.158 2.985-2.458 10.339-7.218 20.698-5.31-2.719.774-6.342 1.672-9.927 2.159-.736.112-1.286.8-1.182 1.557a1.38 1.38 0 0 0 1.555 1.182zM99.026 66.43c-1.287-1.722-2.866-4.773-2.344-8.961 1.446 1.772 3.195 4.884 2.344 8.961zm41.726 63.164c0 22.483-18.281 40.775-40.752 40.775s-40.752-18.292-40.752-40.775V90.43l81.504 21.861v17.303z"
                  fill="#F15A24"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <p className="font-[corben] text-2xl absolute top-[44px] left-[42%]">
              S
            </p>
            <p className="font-[corben] text-2xl absolute right-[2px]">
              Sprout
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

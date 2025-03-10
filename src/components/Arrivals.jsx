import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { motion } from 'motion/react';
import { ProductContext } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const Arrivals = () => {
  const [products, setProducts] = useState([]);
  const { setSelectedProduct, setShowCart } =
    useContext(ProductContext);
  const { isLoading, setIsLoading, dotAnimationStyle } =
    useCart();
  const [activeProductId, setActiveProductId] =
    useState(null);

  const handleAddCart = (prd) => {
    setActiveProductId(prd.id);
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProduct(prd);
      setShowCart(true);
      setIsLoading(false);
      setActiveProductId(null);
    }, 1500);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => setProducts(res.data))
      .catch((err) =>
        console.error('Lỗi khi lấy dữ liệu:', err)
      );
  }, []);

  return (
    <section className="bg-[var(--bg-arr)] pb-[80px] w-full">
      <div className="flex items-center w-full justify-between px-10">
        <div className="min-h-[66px] max-w-[528px] max-lg:max-w-[300px] w-full h-auto mt-[103px] mb-[10px] pl-5">
          <h2 className="leading-normal text-[60px] max-lg:text-[40px] font-[forum]">
            <span>New Arrivals</span>
          </h2>
        </div>
        <div className=" w-[142px]h-[55px] mt-[109px] mb-[10px]">
          <Link
            to={'/shop'}
            className="bg-[var(--bg-hover1)] text-white font-[questrial] px-7 py-[15px] max-lg:p-4 text-[18px] max-lg:text-[16px] max-lg:w-full rounded-[4px] hover:bg-[var(--bg-3)] transition-all duration-300 ease-in-out"
          >
            Shop All
          </Link>
        </div>
      </div>
      <div className="pl-[60px] pr-[68px] grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 relative">
        {products.slice(0, 4).map((prd, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2.5,
              delay: idx * 0.3,
            }}
            key={idx}
          >
            <div key={prd.id}>
              <div className="relative w-full h-[70%] mx-auto max-md:w-[460px] max-sm:w-[320px] overflow-hidden">
                <span className="absolute top-5 ml-[10px] px-3 py-[2px] bg-[var(--bg-3)] text-[14px] rounded-[4px] text-white z-10">
                  New Arrival
                </span>
                <div onClick={() => handleAddCart(prd)}>
                  <img
                    src={prd.image[0]}
                    alt={prd.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={prd.image[1]}
                    alt={prd.name}
                    className="absolute cursor-pointer top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              </div>
              <div className=" pt-4 pb-5 w-full mx-auto max-md:w-[460px] max-sm:w-[320px]">
                <div className="flex flex-col mb-2">
                  <p
                    onClick={() => handleAddCart(prd)}
                    className="font-[forum] cursor-pointer text-[28px] leading-[35px]"
                  >
                    {prd.name}
                  </p>
                  <p className=" mt-1 text-[21px] leading-[1.5em]">
                    ${prd.price}
                  </p>
                </div>
                <Rating
                  rating={prd.rating}
                  reviews={prd.review}
                />
                <style>{dotAnimationStyle}</style>
                <button
                  onClick={() => handleAddCart(prd)}
                  className="w-full mt-5 px-5 py-[10px] border border-solid border-[var(--bg-header)] rounded-[4px] hover:!bg-[var(--bg-hover1)] hover:text-white transition-all duration-500 ease-in-out"
                >
                  {isLoading &&
                  activeProductId === prd.id ? (
                    <span className="inline-flex items-center gap-1 ">
                      <span className="p-[2px] rounded-full bg-black dot-1"></span>
                      <span className="p-[2px] rounded-full bg-black dot-2"></span>
                      <span className="p-[2px] rounded-full bg-black dot-3"></span>
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Arrivals;

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Category = () => {
  return (
    <section className="bg-black w-full">
      <div className="w-[800px] max-lg:w-[600px] max-md:w-[300px] mx-auto h-auto pt-[77px]">
        <motion.h2
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
          }}
          className="w-full text-center text-white text-[34px] max-lg:text-[28px] max-md:text-[21px] leading-normal font-[forum]"
        >
          Shop by Category
        </motion.h2>
      </div>

      <div className="mx-10 pb-[70px]">
        <div className="w-full">
          <motion.p
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
            }}
            className="leading-[8em] max-lg:leading-[6em] max-md:leading-[4em] text-center p-[10px]"
          >
            <span className="text-white text-[8em] max-lg:text-[6em] max-md:text-[4em] font-[forum]">
              Discover Sprout
            </span>
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-2 max-lg:grid-cols-8 max-md:grid-cols-1 max-md:grid-rows-3 gap-2 w-full h-[calc(100vh-100px)] mx-auto">
        <div className="col-span-7 row-span-2 max-md:col-span-1 max-lg:row-span-1 max-lg:col-span-4 max-md:row-span-1 h-full relative group overflow-hidden">
          <div className="absolute w-full h-full bg-[var(--bg-header)] top-0 left-0 hover:bg-transparent">
            <span className="absolute flex items-center justify-center text-white inset-0 font-[forum] text-[35px] group-hover:hidden">
              Plants
            </span>
          </div>
          <Link to={'/plants'}>
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              src="/src/assets/category/cate1.avif"
              alt="Image 1"
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.13,0.78,0.53,0.92)] group-hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>

        <div className="col-span-3 max-md:col-span-1 max-lg:row-span-1 max-lg:col-span-2 max-md:row-span-1 h-full relative group overflow-hidden">
          <div className="absolute w-full h-full bg-[var(--bg-header)] top-0 left-0 hover:bg-transparent">
            <span className="absolute flex items-center justify-center text-white inset-0 font-[forum] text-[35px] group-hover:hidden">
              Pots
            </span>
          </div>
          <Link to={'/pots'}>
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              src="/src/assets/category/cate2.avif"
              alt="Image 2"
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.13,0.78,0.53,0.92)] group-hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>

        <div className="col-span-3 max-md:col-span-1 max-lg:row-span-1 max-lg:col-span-2 max-md:row-span-1 h-full relative group overflow-hidden">
          <div className="absolute w-full h-full bg-[var(--bg-header)] top-0 left-0 hover:bg-transparent">
            <span className="absolute flex items-center justify-center text-white inset-0 font-[forum] text-[35px] group-hover:hidden">
              Subscriptions
            </span>
          </div>
          <Link to={'/sub'}>
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              src="/src/assets/category/cate3.avif"
              alt="Image 3"
              className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.13,0.78,0.53,0.92)] group-hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;

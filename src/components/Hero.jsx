import { Link } from 'react-router-dom';
import bg_hero from '../assets/image_home/hero.avif';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section
      className="w-full min-h-[190vh] max-lg:min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${bg_hero})` }}
    >
      <div className="pt-[182px] max-w-[940px] max-lg:max-w-[750px] max-md:max-w-[550px] max-md:pt-[300px] w-full h-auto mx-auto pb-5">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="leading-normal text-[90px] max-lg:text-[70px] max-md:text-[50px] text-center font-[forum] text-white"
        >
          Is There Such a Thing as Too Many Plants?
        </motion.h1>
      </div>
      <div className="max-w-[672px] w-full h-auto mx-auto pb-10">
        <motion.p
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="leading-[1.4em] text-[21px] max-md:text-[18px] text-center font-[questrial] text-white"
        >
          Discover the latest addition to your growing plant
          collection
        </motion.p>
      </div>
      <div className="text-center">
        <motion.button
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="w-[140px] h-[55px] bg-transparent border-[1px] border-solid border-white rounded-[4px] text-white font-[questrial] hover:!bg-[var(--bg-header)] hover:border-none transition-all ease-in-out duration-800 max-sm:mb-4"
        >
          <Link className="text-[18px]" to={'/plants'}>
            Shop Plants
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

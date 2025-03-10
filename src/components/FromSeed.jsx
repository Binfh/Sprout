import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const FromSeed = () => {
  return (
    <section className="bg-[url('/src/assets/image_home/fromseed.avif')] min-h-[120vh] w-full relative ">
      <div className="absolute w-full h-full bg-[#05050580] top-0 left-0 z-0"></div>
      <div className="pt-[80px] max-w-[940px] w-full h-auto mx-auto pb-5 z-10 relative">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.3,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
          }}
          className="leading-normal text-[80px] max-lg:text-[70px] max-md:text-[50px] text-center font-[forum] text-white"
        >
          From Seed to Sprout
        </motion.h1>
      </div>
      <div className="max-w-[672px] w-full h-auto mx-auto pb-10 z-10 relative">
        <motion.p
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
          }}
          className="leading-[1.4em] text-[18px] max-lg:!px-2 max-md:!px-5 text-center font-[questrial] text-white"
        >
          I&#39;m a paragraph. Click here to add your own
          text and edit me. It’s easy. Just click “Edit
          Text” or double click me to add your own content
          and make changes to the font. I’m a great place
          for you to tell a story and let your users know a
          little more about you.
        </motion.p>
      </div>
      <div className="text-center z-10 relative">
        <motion.button
          initial={{
            x: -300,
            rotate: 360,
            opacity: 0,
          }}
          whileInView={{ rotate: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[140px] h-[55px] bg-transparent border-[1px] border-solid border-white rounded-[4px] text-white font-[questrial] hover:!bg-[var(--bg-header)] hover:border-none transition-all ease-in-out duration-800 "
        >
          <Link className="text-[18px]" to={'/story'}>
            Our Story
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default FromSeed;

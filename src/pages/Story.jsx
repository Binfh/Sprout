import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Story = () => {
  return (
    <>
      <Header />
      <div
        className="w-full h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url('/src/assets/background/bg_story.avif')`,
        }}
      >
        <div className="pt-[182px] max-w-[940px] max-lg:max-w-[750px] max-md:max-w-[550px] max-md:pt-[300px] w-full h-auto mx-auto pb-5">
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="leading-normal text-[90px] max-lg:text-[70px] max-md:text-[50px] text-center font-[forum] text-white"
          >
            All About Sprout
          </motion.h1>
        </div>
        <div className="max-w-[672px] max-md:max-w-[450px] w-full h-auto mx-auto pb-10">
          <motion.p
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="leading-[1.4em] text-[20px] max-md:text-[16px] text-center font-[questrial] text-white"
          >
            All About Sprout is a brand dedicated to
            promoting sustainable and eco-friendly
            lifestyles through plant-based products. The
            company focuses on offering a wide range of
            organic plants, biodegradable pots, and
            eco-conscious gardening tools. Their mission is
            to encourage people to embrace greenery in their
            homes while making environmentally responsible
            choices. By using sustainable materials and
            ethical sourcing, All About Sprout ensures that
            every product aligns with its vision of a
            greener future.
          </motion.p>
        </div>
      </div>
      <div className="w-full flex max-sm:flex-col items-center h-screen ">
        <div className="w-1/2 h-full max-sm:w-full max-sm:h-1/2">
          <img
            src="/src/assets/background/bg_story1.avif"
            alt="op"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full max-sm:w-full max-sm:h-1/2 bg-[var(--bg-arr)] text-black ">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <div className="w-[300px] max-sm:w-[400px] m-auto">
              <div className="mt-[125px] max-xl:mt-[60px] max-md:mt-[30px] mb-[19px] ">
                <h2 className="text-[40px] leading-tight font-[forum]">
                  <span className="tracking-normal">
                    Connecting People to Plants
                  </span>
                </h2>
              </div>
              <div className="mb-[53px] max-sm:mb-10">
                <p className="text-[18px] leading-[1.6em] font-thin">
                  I’m a paragraph. Click here to add your
                  own text and edit me. It’s easy. Just
                  click “Edit Text” or double click me to
                  add your own content and make changes to
                  the font. I’m a great place for you to
                  tell a story and let your users know a
                  little more about you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-black">
        <div className="px-[60px] py-10 max-md:px-5 ">
          <div className="border border-white border-solid grid grid-cols-3 overflow-hidden max-lg:grid-rows-3 max-lg:grid-cols-1 h-[140vh] max-lg:h-[200vh]">
            <div className="col-span-1 max-lg:row-span-1 !px-8 !pb-10 border-r border-white">
              <h1 className="text-[40px] leading-tight text-white font-[forum] !mb-6 max-md:!mb-2 !mt-5  ">
                This Is Us
              </h1>
              <div className="text-[18px] max-xl:text-[17px]  leading-[1.6em] max-md:text-[16px] max-sm:text-[14px] max-lg:pb-5 font-[questrial] text-white  pr-4">
                <p>
                  I’m a paragraph. Click here to add your
                  own text and edit me. It’s easy. Just
                  click “Edit Text” or double click me to
                  add your own content and make changes to
                  the font. Feel free to drag and drop me
                  anywhere you like on your page. I’m a
                  great place for you to tell a story and
                  let your users know a little more about
                  you.
                </p>
                <p className="mt-4">
                  This is a great space to write a long text
                  about your company and your services. You
                  can use this space to go into a little
                  more detail about your company. Talk about
                  your team and what services you provide.
                  Tell your visitors the story of how you
                  came up with the idea for your business
                  and what makes you different from your
                  competitors. Make your company stand out
                  and show your visitors who you are.
                </p>
              </div>
            </div>
            <div className="col-span-2 max-lg:row-span-2  h-full">
              <img
                src="/src/assets/background/bg_story2.avif"
                alt="About our company"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Story;

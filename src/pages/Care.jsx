import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  faEye,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';

export const Care = () => {
  const care = [
    {
      title:
        'How to Choose a Pot that Compliments Your Plant',
      img: '/src/assets/background/bg_pots.avif',
      date: 'Jun 5, 2023',
      timeRead: '1 min read',
      des: 'Discover how to select the perfect pot that not only enhances your plant’s beauty but also supports its healthy growth.',
    },
    {
      title: '8 Pet-Friendly Plants Safe for Cats and Dogs',
      img: '/src/assets/care/care1.webp',
      date: 'Jun 5, 2023',
      timeRead: '1 min read',
      des: 'Want to add greenery to your home without worrying about your furry friends? Here are eight pet-friendly plants that are safe for cats and dogs.',
    },
    {
      title: 'Spring Feeding: Houseplant Fertilizing',
      img: '/src/assets/care/care2.webp',
      date: 'Jun 5, 2023',
      timeRead: '1 min read',
      des: 'Spring is the perfect time to give your houseplants a nutrient boost! Learn how to fertilize them properly for lush and vibrant growth.',
    },
    {
      title: 'How to Repot Plants',
      img: '/src/assets/blogs/blog1.webp',
      date: 'Jun 5, 2023',
      timeRead: '1 min read',
      des: 'Repotting is essential for plant health. Follow our step-by-step guide to ensure a smooth transition for your leafy friends.',
    },
    {
      title: 'How to Treat Leaf Spots',
      img: '/src/assets/blogs/blog2.webp',
      date: 'Jun 5, 2023',
      timeRead: '1 min read',
      des: 'Spotted leaves? Don’t panic! Learn about the common causes of leaf spots and effective ways to treat them.',
    },
    {
      title: 'Keep Them Alive Through the Seasons',
      img: '/src/assets/blogs/blog3.webp',
      date: 'Jun 5, 2023',
      timeRead: '1 min read',
      des: 'Changing seasons can be tough on plants. Discover essential care tips to keep them thriving all year round.',
    },
  ];

  return (
    <div className="bg-black">
      <Header />
      <div className="pt-5 max-md:pt-[150px] max-md:pb-[100px] pb-[200px] max-md:mb-[100px] px-10 relative top-[162px]">
        <div className="max-w-[980px] w-full mx-auto mt-[30px] mb-[70px] text-white">
          <h1 className="text-[90px] max-md:text-[60px] font-[forum] text-center">
            Your Guide to Plant Care
          </h1>
        </div>
        <div className="bg-[var(--bg-arr)] mx-[60px] p-[60px] max-md:px-4 max-md:pt-5 max-md:pb-[120px] max-sm:pb-[180px] max-lg:pb-[200px] text-black">
          <div className="w-full grid grid-cols-2 max-md:grid-cols-1 justify-center gap-x-[40px] gap-y-[80px] max-lg:gap-y-[150px] max-md:gap-y-[250px] max-md:border-b max-md:border-solid max-md:border-black/50">
            {care.map((blog, idx) => (
              <motion.div
                initial={{
                  filter: 'blur(10px)',
                  opacity: 0,
                }}
                whileInView={{
                  filter: 'blur(0px)',
                  opacity: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeIn',
                }}
                viewport={{ once: true, amount: 0.3 }}
                key={idx}
                className="flex flex-col h-full"
              >
                <img
                  className="object-cover w-full h-[300px] cursor-pointer"
                  src={blog.img}
                  alt={blog.title}
                />
                <p className="!mt-7 pl-[3px] text-[12px] flex gap-3.5 pb-3 min-h-[20px]">
                  <span>{blog.date}</span> -{' '}
                  <span>{blog.timeRead}</span>
                </p>
                <div className="p-[3px] cursor-pointer hover:text-[var(--bg-3)] flex-1">
                  <h2 className="text-[26px] font-[forum] mb-[11px] min-h-[70px]">
                    {blog.title}
                  </h2>
                  <div className="p-[3px]">
                    <div className="pb-[23px]">
                      <p className="text-[16px] font-[questrial] leading-normal min-h-[60px]">
                        {blog.des}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="mt-3 mb-[15px] text-[var(--bg-header)] max-md:hidden" />
                <div className="flex items-center justify-between min-h-[30px]">
                  <div className="flex items-center gap-7">
                    <div>
                      <FontAwesomeIcon icon={faEye} />{' '}
                      <span className="ml-[2px]">0</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faMessage} />{' '}
                      <span className="ml-[2px]">0</span>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red-400"
                    />
                  </div>
                </div>
                <hr className="hidden max-md:block mt-3 text-[var(--bg-header)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

import {
  faHeart,
  faEye,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const blogs = [
  {
    img: '/src/assets/blogs/blog1.webp',
    date: 'Jun 5, 2023',
    timeRead: '1 min read',
    title: 'How to Repot Plants',
    des: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
  },
  {
    img: '/src/assets/blogs/blog2.webp',
    date: 'July 10, 2020',
    timeRead: '2 min read',
    title: 'How to Treat Leaf Spots',
    des: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
  },
  {
    img: '/src/assets/blogs/blog3.webp',
    date: 'May 29, 2024',
    timeRead: '3 min read',
    title: 'Keep Them Alive Through the Seasons',
    des: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
  },
];

const OurBlog = () => {
  return (
    <section className="bg-[var(--bg-arr)] w-full">
      <div className="flex items-center w-full justify-between px-10">
        <div className="min-h-[66px] max-w-[675px] max-md:max-w-[250px] w-full h-auto mt-[103px] mb-[10px] pl-5">
          <span className="font-[questrial] text-[21px]">
            Our Blog
          </span>
          <h2 className="leading-normal text-[60px] max-md:text-[40px] max-sm:text-[30px] font-[forum]">
            <span>Your Guide to Plant Care</span>
          </h2>
        </div>
        <div className=" w-[142px] h-[55px] max-md:w-[82px] max-md:h-[30px] mt-[109px] mb-[10px]">
          <Link
            to={'/blog'}
            className="bg-[var(--bg-hover1)] block text-white font-[questrial] px-5 text-center py-[15px] text-[18px] rounded-[4px] hover:bg-[var(--bg-3)] transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="w-full p-[60px] grid grid-cols-2 max-md:grid-cols-1 justify-center gap-x-[40px] gap-y-[80px]">
        {blogs.map((blog, idx) => (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            key={idx}
          >
            <img
              className="object-cover w-full cursor-pointer"
              src={blog.img}
              alt={blog.title}
            />
            <p className="!mt-7 !pl-[3px] text-[12px] flex gap-3.5 !pb-3">
              <span>{blog.date}</span> -{' '}
              <span>{blog.timeRead}</span>
            </p>
            <div className="p-[3px] cursor-pointer hover:text-[var(--bg-3)]">
              <h2 className="text-[26px] font-[forum] !mb-[11px]">
                {blog.title}
              </h2>
              <div className="p-[3px]">
                <div className="pb-[23px]">
                  <p className="text-[16px] font-[questrial] leading-normal">
                    {blog.des}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-3 mb-[15px] text-[var(--bg-header)]" />
            <div className="flex items-center justify-between">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;

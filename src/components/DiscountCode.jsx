import { Link } from 'react-router-dom';

const DiscountCode = () => {
  return (
    <section className="bg-[url('/src/assets/image_home/dc.avif')] w-full min-h-[120vh] bg-cover bg-center">
      <div className="pt-[150px] max-w-[940px] max-lg:max-w-[700px] max-md:max-w-[400px] w-full h-auto mx-auto pb-[30px]">
        <h1 className="leading-tight text-[60px] max-lg:text-[50px] max-md:text-[30px] text-center font-[forum] text-white">
          Everything You Need to Know About Plants and More.
          No Spam, We Promise.
        </h1>
      </div>
      <div className="max-w-[672px] max-lg:max-w-[500px] max-md:max-w-[300px] w-full h-auto mx-auto pb-[10px]">
        <p className="leading-[1.4em] text-[21px] max-md:text-[18px] text-center font-[questrial] text-white">
          Subscribe now and get 15% off your first purchase{' '}
        </p>
      </div>
      <div className="pt-[60px] text-white w-[658px] max-lg:w-[500px] max-md:w-[400px] mx-auto">
        <form className="w-full" action="">
          <p className="text-[16px] font-[questrial] block mb-2">
            Enter your email here*
          </p>
          <input
            type="text"
            className="py-2 pl-3 pr-[2px] w-full border border-solid rounded-[4px]"
          />
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email"
                name="email"
                className="w-6 h-6"
              />
              <label
                className="ml-3 max-md:w-[100px]"
                htmlFor="email"
              >
                Yes, subscribe me to your news letter.
              </label>
            </div>
            <button className="w-[160px] max-lg:max-w-[100px]  h-[45px] max-lg:max-h-[35px]  !bg-[var(--bg-hover1)] rounded-[4px] text-white font-[questrial] hover:!bg-[var(--bg-3)] transition-all ease-in-out duration-800 ">
              <Link
                className="text-[18px]"
                to={'/subscribe'}
              >
                Subscribe
              </Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscountCode;

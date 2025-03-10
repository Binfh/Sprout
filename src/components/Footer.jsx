import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="flex items-center justify-center py-[60px]">
        <Link to={'/'}>
          <div className="relative top-[-15px] text-white">
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
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-2 max-md:grid-rows-3 gap-5 py-[50px] max-md:pb-0 font-[questrial] mx-5 !border-y-[0.1px] border-solid border-[rgba(255,255,255,0.3)] text-white">
        <div className="max-md:row-span-1 max-md:col-span-2">
          <p className="text-[21px] leading-normal !mb-5">
            Contact
          </p>
          <p>
            <span className="leading-[1.6em] block">
              Address: 500 Terry
            </span>
            <span className="leading-[1.6em] block">
              Francine Street
            </span>
            <span className="leading-[1.6em] block">
              San Francisco, CA 94158
            </span>
            <span className="leading-[1.6em] block">
              Phone: 123-456-7890
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              Email:
              <Link to={'mailto:info@mysite.com'}>
                {' '}
                info@mysite.com
              </Link>
            </span>
          </p>
        </div>

        <div className="max-md:row-span-1 max-md:col-span-1 max-md:row-start-2">
          <p className="text-[21px] leading-normal !mb-5">
            Shop
          </p>
          <p>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/shop'}>Shop All</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/plants'}>Plants</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/pots'}>Pots</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/sale'}>Sale</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/sub'}>Subscriptions</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/care'}>Care</Link>
            </span>
          </p>
        </div>

        <div className="max-md:row-span-1 max-md:col-span-1 max-md:row-start-2">
          <p className="text-[21px] leading-normal !mb-5">
            Helpful Links
          </p>
          <p>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/faq'}>FAQ</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/ship'}>Shipping & Return</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/terms'}>Terms & Conditions</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/paymethod'}>Payment Methods</Link>
            </span>
          </p>
        </div>
        <div className="max-md:row-span-1 max-md:col-span-1 max-md:row-start-3">
          <p className="text-[21px] leading-normal !mb-5">
            Company
          </p>
          <p>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/story'}>Our Story</Link>
            </span>
            <span className="leading-[1.6em] block hover:text-[var(--bg-hover1)]">
              <Link to={'/contact'}>Contact Us</Link>
            </span>
          </p>
        </div>

        <div className="max-md:row-span-1 max-md:col-span-1 max-md:row-start-3">
          <p className="text-[21px] leading-normal !mb-5">
            Opening Hours
          </p>
          <p>
            <span className="leading-[1.6em] block">
              Mon - Fri: 7am - 10pm
            </span>
            <span className="leading-[1.6em] block">
              Saturday: 8am - 10pm
            </span>
            <span className="leading-[1.6em] block">
              Sunday: 8am - 11pm
            </span>
          </p>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-[18px] font-[questrial] text-white">
          © 2025 by Binh. Powered and secured by{' '}
          <span className="underline cursor-pointer">
            <Link to={'https://www.facebook.com/'}>
              Binh
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

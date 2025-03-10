import { Link, useLocation } from 'react-router-dom';
import { options } from '../../constants/MenuOptions';

const Sidebar = () => {
  const location = useLocation();

  let currentCategory;
  if (location.pathname === '/shop') {
    currentCategory = 'All Products';
  } else if (location.pathname === '/arrival') {
    currentCategory = 'New Arrivals';
  } else {
    currentCategory =
      options.find((opt) => opt.href === location.pathname)
        ?.name || 'Unknown';
  }

  return (
    <div className="max-w-[200px] w-full">
      <div className="flex items-center gap-[6px] max-md:gap-0 font-[questrial] text-[16px] pb-4">
        <Link className="hover:opacity-80" to={'/'}>
          Home
        </Link>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="max-md:min-w-[24px] max-md:min-h-[24px] w-[24px] h-[24px]"
          aria-hidden="true"
        >
          <path d="M8.70710678,4.99810828 L15.068,11.3651083 L15.0722115,11.3620693 L15.7793183,12.0691761 L15.776,12.0721083 L15.7782433,12.0758831 L15.0711365,12.7829899 L15.069,12.7801083 L8.70710678,19.1434929 L8,18.4363861 L14.361,12.0721083 L8,5.70521506 L8.70710678,4.99810828 Z"></path>
        </svg>
        <span>{currentCategory}</span>
      </div>
      <div className="pt-5 pr-5 pb-5">
        <h1 className="text-[24px] font-[questrial] !pb-4 !mb-[15px] border-b border-white/50">
          Browse by
        </h1>
      </div>
      <div>
        <ul className="flex-col font-[questrial] text-[16px] pb-12">
          <li className="pb-3 hover:opacity-50">
            <Link
              className={
                location.pathname === '/shop'
                  ? 'text-[20px] text-[var(--cl-6)]'
                  : ''
              }
              to={'/shop'}
            >
              All Product
            </Link>
          </li>
          <li className="pb-3 hover:opacity-50">
            <Link
              className={
                location.pathname === '/arrival'
                  ? 'text-[20px] text-[var(--cl-6)]'
                  : ''
              }
              to={'/arrival'}
            >
              New Arrivals
            </Link>
          </li>
          {options.map((opt, idx) => (
            <li className="pb-3 hover:opacity-50" key={idx}>
              <Link
                className={
                  location.pathname === opt.href
                    ? 'text-[20px] text-[var(--cl-6)]'
                    : ''
                }
                to={opt.href}
              >
                {opt.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

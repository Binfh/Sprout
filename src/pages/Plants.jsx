import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BackToTop from '../components/BackToTop';
import { options } from '../../constants/MenuOptions';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductContext } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const Plants = () => {
  const location = useLocation();
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
  const [products, setProducts] = useState([]);

  const wantedIds = [5, 6, 7, 8, 9, 10, 3, 11, 12, 1];
  const plants = products.filter((product) =>
    wantedIds.includes(product.id)
  );

  // Tìm danh mục hiện tại
  const currentCategory =
    options.find((opt) => opt.href === location.pathname)
      ?.name || 'Unknown';

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => setProducts(res.data))
      .catch((err) =>
        console.error('Lỗi khi lấy dữ liệu:', err)
      );
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <div className="pt-5 pb-[200px] px-10 relative top-[162px] text-white flex justify-between">
        <Sidebar />
        <div className="ml-10 mt-[60px]">
          <div className="mb-[46px] max-md:mt-[60px] w-full">
            <img
              className="w-full max-h-[372px] h-full object-cover"
              src="/src/assets/background/bg_plants.avif"
              alt=""
            />
            <h1 className="!mt-7 text-[90px] max-md:text-[60px] font-[forum]">
              {currentCategory}
            </h1>
          </div>
          <div className="mb-2">
            <p className="font-[questrial] text-[16px] block">
              {plants.length} products
            </p>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 items-center gap-10">
            {plants.map((prd, idx) => (
              <div key={idx}>
                <div className="relative w-full h-[70%] overflow-hidden">
                  {[1, 3].includes(prd.id) && (
                    <span className="absolute top-5 ml-[10px] px-3 py-[2px] !bg-[var(--bg-3)] text-[14px] rounded-[4px] text-white z-10">
                      New Arrival
                    </span>
                  )}
                  {[6, 8, 9, 11].includes(prd.id) && (
                    <span className="absolute top-5 ml-[10px] px-3 py-[2px] !bg-[var(--bg-3)] text-[14px] rounded-[4px] text-white z-10">
                      Sale
                    </span>
                  )}
                  <Link to={'/detail'}>
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
                  </Link>
                </div>
                <div className="pr-5 pt-4 pb-5 w-full">
                  <Link
                    to={'/detail'}
                    className="flex flex-col mb-2"
                  >
                    <p className="font-[forum] text-[28px] leading-[35px]">
                      {prd.name}
                    </p>
                    <p className="!mt-1 text-[21px] leading-[1.5em]">
                      {prd.priceSale && (
                        <span className="!pr-2 line-through text-gray-500">
                          ${prd.priceSale}
                        </span>
                      )}
                      ${prd.price}
                    </p>
                  </Link>
                  <style>{dotAnimationStyle}</style>
                  <button
                    key={prd.id}
                    onClick={() => handleAddCart(prd)}
                    className="w-full mt-5 px-5 py-[10px] border border-solid border-white rounded-[4px] hover:!bg-[var(--bg-hover1)] hover:text-white transition-all duration-500 ease-in-out"
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
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Plants;

import {
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCircleXmark,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ProductContext } from '../context/ProductContext';

export const SearchBar = ({
  setShowResults,
  showResults,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showClearButton, setShowClearButton] =
    useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  const timeoutRef = useRef(null);
  const searchRef = useRef(null);

  const { setSelectedProduct, setShowCart } =
    useContext(ProductContext);

  const handleAddCart = (prd) => {
    setIsTransitioning(false);
    setSelectedProduct(prd);
    setShowResults(false);
    setShowCart(true);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .catch((err) =>
        console.error('Lỗi khi lấy dữ liệu:', err)
      )
      .then((res) => {
        if (res && res.data) {
          setProducts(res.data);
        }
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      setIsLoading(true);
      setShowClearButton(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        if (value) {
          setShowClearButton(true);
          performSearch(value);
        }
      }, 800);
    } else {
      setIsLoading(false);
      setShowClearButton(false);
      setShowResults(false);
      setSearchResults([]);
    }
  };

  const performSearch = (term) => {
    const results = products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(term.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };
  const [isTransitioning, setIsTransitioning] =
    useState(true);

  const handleClear = () => {
    setIsTransitioning(false);
    setSearchTerm('');
    setShowClearButton(false);
    setShowResults(false);
    setSearchResults([]);
    setTimeout(() => setIsTransitioning(true), 0);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className={`relative bg-[var(--bg-header)] max-lg:py-2 border border-[#636363] rounded-[4px] ${
        showResults
          ? 'bg-black w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-full border-b-0 rounded-b-none'
          : ''
      } hover:bg-black z-50 w-[136px] ${
        isTransitioning ? 'transition-all duration-300' : ''
      }`}
    >
      <div className="flex items-center py-[6px] px-[7px] max-lg:px-1 h-full rounded-[5px]">
        <FontAwesomeIcon
          icon={faSearch}
          className="font-thin px-[7px]"
        />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 outline-none w-full font-[questrial] text-[18px] !text-white bg-transparent"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => {
            if (searchTerm && searchResults.length > 0) {
              setShowResults(true);
            }
          }}
        />
        {isLoading && (
          <FontAwesomeIcon
            icon={faSpinner}
            className="text-white animate-spin"
          />
        )}
        {showClearButton && !isLoading && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-white cursor-pointer"
            onClick={handleClear}
          />
        )}
      </div>

      {showResults && (
        <div className="absolute top-full left-[-1px] w-[300px] bg-black border-r border-l border-b border-[#636363] rounded-b-[4px] max-h-[400px] max-lg:w-[200px] max-xl:w-[250px] max-md:w-full overflow-y-auto z-50">
          <div className="p-2">
            <h3 className="text-white text-sm font-bold mb-2">
              Search Results
            </h3>
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center cursor-pointer p-2 hover:bg-black/50 rounded transition-colors mb-1"
                  onClick={() => handleAddCart(product)}
                >
                  <div className="w-12 h-12 mr-3">
                    <img
                      src={
                        product.image && product.image[0]
                      }
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-[forum] text-base">
                      {product.name}
                    </h4>
                    <p className="text-gray-300 text-sm font-[questrial]">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-3 text-center text-gray-300">
                No suitable products found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setShowResults: PropTypes.node.isRequired,
  showResults: PropTypes.node.isRequired,
};

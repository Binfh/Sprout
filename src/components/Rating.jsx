import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating, reviews }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    return (
      <span key={index}>
        {rating >= starValue ? (
          <FontAwesomeIcon
            icon={faStar}
            className="text-orange-500"
          />
        ) : rating >= starValue - 0.5 ? (
          <FontAwesomeIcon
            icon={faStarHalf}
            className="text-orange-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faStar}
            className="text-gray-400"
          />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="text-gray-600 text-sm ml-2">
        {rating.toFixed(1)} ({reviews}) reviews
      </span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default Rating;

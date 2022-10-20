import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem/ReviewItem';

const ReviewsList = ({ reviewsArr }) => {
  const reviewsArrLength = reviewsArr.length;

  return (
    <>
      {!reviewsArrLength ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviewsArr.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewsList;

// --------------------------- PropTypes ----------------------

ReviewsList.propTypes = {
  reviewsArr: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

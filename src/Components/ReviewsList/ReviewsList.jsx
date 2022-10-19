//

import ReviewItem from './ReviewItem';

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

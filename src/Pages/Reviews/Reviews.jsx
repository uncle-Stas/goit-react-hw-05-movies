//

import ReviewsList from 'Components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Services/movieApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsArr, setReviewsArr] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setReviewsArr(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {reviewsArr === null ? (
        <b>...Loading</b>
      ) : (
        <ReviewsList reviewsArr={reviewsArr} />
      )}
    </>
  );
};

export default Reviews;

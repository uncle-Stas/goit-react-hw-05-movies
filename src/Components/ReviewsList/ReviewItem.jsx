import scss from './ReviewItem.module.scss';

const ReviewItem = ({ review }) => {
  const { author, content } = review;

  return (
    <li className={scss.review}>
      <h4 className={scss.author}>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

export default ReviewItem;

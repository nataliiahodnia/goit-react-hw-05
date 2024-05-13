import css from "./MovieReviewsCard.module.css";

export default function MovieReviewsCard({ data: { author, content } }) {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Author: {author}</h3>
      <p>{content}</p>
    </div>
  );
}

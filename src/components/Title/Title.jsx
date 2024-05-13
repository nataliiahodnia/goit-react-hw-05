import css from "./Title.module.css";

export default function Title({ text }) {
  return (
    <div>
      <p className={css.text}>{text}</p>
    </div>
  );
}

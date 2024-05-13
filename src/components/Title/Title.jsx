import css from "./Title.module.css";
import { FaFire } from "react-icons/fa";

export default function Title({ text }) {
  return (
    <div>
      <p className={css.text}>{text}</p>
    </div>
  );
}

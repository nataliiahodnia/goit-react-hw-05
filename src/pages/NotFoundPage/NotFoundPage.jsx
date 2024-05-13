import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.text}>Page not found!!!!</p>
      <p className={css.textLinck}>
        Please visit out{" "}
        <Link className={css.link} to="/">
          home page
        </Link>
      </p>
    </div>
  );
}

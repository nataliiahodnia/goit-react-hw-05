import css from "./Loader.module.css";
import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.container}>
      <Hearts
        height="80"
        width="80"
        color="#ff6bae"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

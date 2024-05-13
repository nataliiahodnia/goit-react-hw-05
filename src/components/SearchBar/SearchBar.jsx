import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { LuFolderSearch } from "react-icons/lu";

export default function SearchBar({ onSearch }) {
  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (!values.query.trim()) {
            toast.error("Please enter a search query");
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            className={css.input}
          ></Field>
          <button type="submit" className={css.button}>
          <LuFolderSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
}

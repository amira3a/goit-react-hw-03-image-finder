import { useState } from "react";
import style from "./styles/Searchbar.module.css";
function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button type="submit" className={style.button}>
          <span className={style.buttonLabel}>Search</span>
        </button>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
}
export default Searchbar;
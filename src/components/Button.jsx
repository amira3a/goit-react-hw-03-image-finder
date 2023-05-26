import style from "./styles/Button.module.css";

function Button({ onClick }) {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonLoadMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
export default Button;
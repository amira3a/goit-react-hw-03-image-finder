import style from "./styles/Modal.module.css";

function Modal({ image, onClose }) {
  const handleClick = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className={style.overlay} onClick={handleClick}>
      <div className={style.modal}>
        <img src={image.largeImageURL}alt={image.tags} />
      </div>
    </div>
  );
}
export default Modal; 
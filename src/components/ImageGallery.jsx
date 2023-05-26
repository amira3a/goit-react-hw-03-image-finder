import style from "./styles/ImageGallery.module.css";

function ImageGallery({ images, onSelect }) {
  const handleClick = (event, image) => {
    event.preventDefault();
    onSelect(image);
  };

  return (
    <ul className={style.gallery}>
      {images.map((image) => (
        <li className={style.galleryItem} key={image.id}>
          <a href={image.largeImageURL} onClick={(e) => handleClick(e, image)}>
            <img src={image.webformatURL} alt={image.tags} />
          </a>
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
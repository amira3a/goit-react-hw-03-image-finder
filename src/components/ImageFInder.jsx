import React, { useState } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loadericon from "./Loader";
import Button from "./Button";
import Modal from "./Modal";

const API_KEY = "35080305-0da6bce0dc03cbbd2e9e87a88";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

function ImageFinder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setCurrentPage(1);
    setSearchQuery(query);
    setImages([]);
    try {
      const { data } = await axios.get(
        `${BASE_URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      );
      setImages(data.hits);
      setIsLoading(false);
      setSelectedImage(null);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    setCurrentPage((prevPage) => prevPage + 1);
    try {
      const { data } = await axios.get(
        `${BASE_URL}?q=${searchQuery}&page=${currentPage + 1}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      );
      setImages((prevImages) => [...prevImages, ...data.hits]);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {isLoading && <Loadericon />}
      {!!images.length && (
        <ImageGallery images={images} onSelect={handleSelectImage} />
      )}
      {!!images.length && images.length % PER_PAGE === 0 && (
        <Button onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
}
export default ImageFinder;
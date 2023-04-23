import React, { Component } from 'react';
import getImages from '../components/PixabayApi/PixabayApi';
import clsx from 'clsx';
import {
  Searchbar,
  ImageGallery,
  ImageGalleryItem,
  Modal,
  Loader,
  Button,
} from './index';

class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    showModal: false,
    largeImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { search, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const images = await new Promise(async (resolve, reject) => {
        setTimeout(async () => {
          try {
            const fetchedImages = await getImages(search, page);
            resolve(fetchedImages);
          } catch (error) {
            reject(error);
          }
        }, 1500);
      });

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = search => {
    this.setState({ search, images: [], page: 1 });
  };

  openModal = largeImageUrl => {
    this.setState({ showModal: true, largeImageUrl });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageUrl: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageUrl } = this.state;

    return (
      <div className={clsx('App')}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image.webformatURL}
              onClick={() => this.openModal(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal largeImageUrl={largeImageUrl} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;

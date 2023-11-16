import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };
  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItem_image}
            src={image.webformatURL}
            alt={image.tags}
            onClick={this.toggleModal}
          />

          {isModalOpen && (
            <Modal
              largeImageURL={image.largeImageURL}
              alt={image.tags}
              onClose={this.toggleModal}
            />
          )}
        </li>
      </>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photoName, onClick }) => (
    <div className='gallery'>
        <ul className={css.imageGallery}>
            {photoName.map(photo => (
                <ImageGalleryItem
                    key={photo.id}
                    photo={photo}
                    onClick={onClick}
                />
            ))}
        </ul>
    </div>
);
ImageGallery.propTypes = {
    photoName: PropTypes.arrayOf(
        PropTypes.shape ({
        id: PropTypes.number.isRequired,
        })
    ),
    onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
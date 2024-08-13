import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowLeftIcon from '../assets/image/arrow-left.svg';
import ArrowRightIcon from '../assets/image/arrow-right.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={`relative ${className}`} style={{ width, height }}>
            <div className="relative overflow-hidden" style={{ borderRadius: radius }}>
                <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className="w-full h-full object-cover" />
                <button 
                    className={`absolute top-1/2 transform -translate-y-1/2 left-0 ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`} 
                    onClick={prevSlide} 
                    disabled={currentIndex === 0}
                >
                    <img src={ArrowLeftIcon} alt="Previous" />
                </button>
                <button 
                    className={`absolute top-1/2 transform -translate-y-1/2 right-0 ${currentIndex === images.length - 1 && 'opacity-50 cursor-not-allowed'}`} 
                    onClick={nextSlide} 
                    disabled={currentIndex === images.length - 1}
                >
                    <img src={ArrowRightIcon} alt="Next" />
                </button>
            </div>
            {showThumbs && (
                <div className="flex mt-4 space-x-2">
                    {images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.src} 
                            alt={`Thumbnail ${index + 1}`} 
                            className={`w-28 h-24 object-cover cursor-pointer ${currentIndex === index ? 'border-2 border-primary' : ''}`} 
                            style={{ borderRadius: radius }}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

Gallery.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    showThumbs: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired
    })).isRequired,
};

Gallery.defaultProps = {
    className: '',
    width: '100%',
    height: '500px',
    radius: '0px',
    showThumbs: false,
};

export default Gallery;

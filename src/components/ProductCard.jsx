// import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="w-[292px] h-[450px] p-4 border border-gray-200 rounded-lg bg-white">
      {priceDiscount && (
        <div className="absolute bg-green-200 text-green-800 font-bold px-2 py-1 rounded-full">
          30% OFF
        </div>
      )}
      <img src={image} alt={name} className="w-full h-[292px] object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      {priceDiscount ? (
        <>
          <p className="text-light-gray line-through text-xl">{`R$${price}`}</p>
          <p className="text-dark-gray text-2xl">{`R$${priceDiscount}`}</p>
        </>
      ) : (
        <p className="text-dark-gray text-2xl">{`R$${price}`}</p>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  priceDiscount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProductCard;

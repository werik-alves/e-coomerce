// import React from 'react';
import PropTypes from 'prop-types';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div className="buybox p-4 border border-gray-200 rounded">
      <h1 className="text-3xl font-bold text-dark-gray">{name}</h1>
      <p className="text-xs text-dark-gray-3 mb-2">REF: {reference}</p>
      <div className="flex items-center mb-4">
        <span className="bg-warning text-white p-1 rounded-md">{stars} ★</span>
        <span className="text-light-gray ml-2">({rating} avaliações)</span>
      </div>
      <div className="text-lg text-dark-gray-2 mb-4">
        {priceDiscount && <span className="line-through text-light-gray-2 mr-2">R$ {price.toFixed(2)}</span>}
        <span className="text-2xl">R$ {priceDiscount ? priceDiscount.toFixed(2) : price.toFixed(2)}</span>
      </div>
      <p className="text-sm text-dark-gray-2 mb-6">{description}</p>
      <div>{children}</div>
    </div>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BuyBox;

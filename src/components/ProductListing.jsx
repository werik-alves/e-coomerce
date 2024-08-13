import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductListing = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const calculateDiscountPercentage = (price, priceDiscount) => {
    return Math.round(((price - priceDiscount) / price) * 100);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={index} className="cursor-pointer relative" onClick={() => handleProductClick(product.id)}>
          {product.priceDiscount && (
            <div className="absolute top-2 left-2 bg-warning text-white text-xs px-2 py-1 rounded">
              {calculateDiscountPercentage(product.price, product.priceDiscount)}% OFF
            </div>
          )}
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <div>
            <h3 className="text-lg font-medium text-dark-gray">{product.name}</h3>
            <p className="text-dark-gray-2">
              {product.priceDiscount ? (
                <>
                  <span className="line-through text-light-gray-2 mr-2">R$ {product.price.toFixed(2)}</span>
                  <span className="text-primary">R$ {product.priceDiscount.toFixed(2)}</span>
                </>
              ) : (
                <span>R$ {product.price.toFixed(2)}</span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number,
    })
  ).isRequired,
};

export default ProductListing;

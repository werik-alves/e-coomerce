import ProductListing from '../components/ProductListing';
import Image1 from '../assets/image/product-image-1.jpeg';
import Image2 from '../assets/image/product-image-2.jpeg';
import Image3 from '../assets/image/product-image-3.jpeg';
import Image4 from '../assets/image/product-image-4.jpeg';
import Image5 from '../assets/image/product-image-5.jpeg';
import Image6 from '../assets/image/product-image-6.jpeg';
import Image7 from '../assets/image/product-image-7.jpeg';
import Image8 from '../assets/image/product-image-8.jpeg';
import ImageIcon from '../assets/image/icons/Line.png';

const products = [
  {
    id: 0,
    name: "K-Swiss Air Nike - Masculino",
    image: Image1,
    price: 289.99,
    priceDiscount: 202.99,
  },
  {
    id: 1,
    name: "Tenis Casual - Unissex",
    image: Image2,
    price: 199.99,
    priceDiscount: 100,
  },
  {
    id: 2,
    name: "Air Nike Loge Raiger",
    image: Image3,
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: Image4,
    price: 200,
  },
  {
    name: "All Star - Feminino",
    image: Image5,
    price: 150,
  },
  {
    name: "Tenis Air Jordan - Low - Masculino",
    image: Image6,
    price: 850.00,
    priceDiscount: 595,
  },
  {
    name: "Tenis Casual - Masculino",
    image: Image7,
    price: 150,
  },
  {
    name: "Air Zoom Nike - Unissex",
    image: Image8,
    price: 359.99,
  },
  // Adicione mais produtos conforme necessário
];

const ProductOptions = () => {
  return (
    <div className="container mx-auto pt-28 max-w-[1250px]">
      <div className='flex justify-between items-center pb-10'>
        <h1 className="text-3xl font-bold">Produtos</h1>
        <h2 className='text-xl text-primary flex'>
          Ver Todos 
          <img className='pl-3' src={ImageIcon} alt="icone-seta" />
        </h2>
      </div>
      <div className=" sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <ProductListing products={products} />
      </div>
    </div>
  );
};

export default ProductOptions;

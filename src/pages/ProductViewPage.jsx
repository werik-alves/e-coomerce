import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Image1 from '../assets/image/product-image-1.jpeg';
import Image2 from '../assets/image/product-image-2.jpeg';
import Image3 from '../assets/image/product-image-3.jpeg';
import TamanhoCores from '../components/TamanhoCores';

const products = [
  {
    id: 0,
    name: "K-Swiss Air Nike - Masculino",
    images: [Image1, Image2, Image3],
    price: 289.99,
    priceDiscount: 202.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reference: "REF:384611",
    category: "Tenis",
    brand: "Nike",
    rating: 4.7,
    reviews: 90,
  },
  {
    id: 1,
    name: "Tenis Casual - Unissex",
    images: [Image2, Image1, Image3],
    price: 199.99,
    priceDiscount: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reference: "REF:384341",
    category: "Casual",
    brand: "Adidas",
    rating: 4.3,
    reviews: 120,
  },

  // Adicione outros produtos conforme necessário
];

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto pt-5 max-w-[1250px] px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full sm:w-[700px]">
            <Gallery images={product.images.map((img) => ({ src: img }))} showThumbs width="100%" height="570px" radius="4px" />
          </div>
          <div className="mt-8 md:mt-0 md:ml-8 flex-1">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.rating}
              rating={product.reviews}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              <TamanhoCores />
              <button className="bg-warning text-white font-semibold text-lg py-3 px-6 rounded mt-4 w-full">
                COMPRAR
              </button>
            </BuyBox>
          </div>
        </div>
        <div className="mt-8">
          <ProductOptions />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductViewPage;

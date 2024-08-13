import { useState } from 'react';
import Header from '../components/Header';
import FilterGroup from '../components/FilterGroup';
import SectionProduto from '../components/SectionProdutos';
import ProductListing from '../components/ProductListing';
import Footer from '../components/Footer';
import Image1 from '../assets/image/product-image-1.jpeg';
import Image2 from '../assets/image/product-image-2.jpeg';
import Image3 from '../assets/image/product-image-3.jpeg';
import Image4 from '../assets/image/product-image-4.jpeg';
import Image5 from '../assets/image/product-image-5.jpeg';
import Image6 from '../assets/image/product-image-6.jpeg';
import Image7 from '../assets/image/product-image-7.jpeg';
import Image8 from '../assets/image/product-image-8.jpeg';

const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    Marca: [],
    Categoria: [],
    Gênero: [],
    Estado: [],
  });

  const products = [
    {   
        id: 0,
        name: "K-Swiss Air Nike - Masculino",
        image: Image1,
        price: 289.99,
        priceDiscount: 202.99,
        marca: 'Nike',
        categoria: 'Tênis',
        genero: 'Masculino',
        estado: 'Novo'
      },
      {
        id: 1,
        name: "Tenis Casual - Unissex",
        image: Image2,
        price: 199.99,
        priceDiscount: 100,
        marca: 'Adidas',
        categoria: 'Tênis',
        genero: 'Unissex',
        estado: 'Novo'
      },
      {
        id: 2,
        name: "Air Nike Loge Raiger",
        image: Image3,
        price: 200,
        marca: 'Nike',
        categoria: 'Tênis',
        genero: 'Masculino',
        estado: 'Usado'
      },
      {
        id: 3,
        name: "K-Swiss V8 - Masculino",
        image: Image4,
        price: 200,
        marca: 'K-wise',
        categoria: 'Tênis',
        genero: 'Masculino',
        estado: 'Novo'
      },
      {
        id: 4,
        name: "All Star - Feminino",
        image: Image5,
        price: 150,
        marca: 'Puma',
        categoria: 'Tênis',
        genero: 'Feminino',
        estado: 'Usado'
      },
      {
        id: 5,
        name: "Tenis Air Jordan - Low - Masculino",
        image: Image6,
        price: 850.00,
        priceDiscount: 595,
        marca: 'Nike',
        categoria: 'Tênis',
        genero: 'Masculino',
        estado: 'Novo'
      },
      {
        id: 6,
        name: "Tenis Casual - Masculino",
        image: Image7,
        price: 150,
        marca: 'Adidas',
        categoria: 'Tênis',
        genero: 'Masculino',
        estado: 'Usado'
      },
      {
        id: 7,
        name: "Air Zoom Nike - Unissex",
        image: Image8,
        price: 359.99,
        marca: 'Nike',
        categoria: 'Tênis',
        genero: 'Unissex',
        estado: 'Novo'
      },
  ];

  const filters = [
    {
        title: 'Marca',
        inputType: 'checkbox',
        options: [
          { text: 'Adidas' },
          { text: 'Calenciaga' },
          { text: 'K-wise' },
          { text: 'Puma' },
          { text: 'Nike' },
        ],
    },
    {
      title: 'Categoria',
      inputType: 'checkbox',
      options: [
        { text: 'Tênis' },
        { text: 'Camisetas' },
        { text: 'Acessórios' },
        { text: 'Calças' },
      ],
    },
    {
      title: 'Gênero',
      inputType: 'checkbox',
      options: [
        { text: 'Masculino' },
        { text: 'Feminino' },
        { text: 'Unissex' },
      ],
    },
    {
        title: 'Estado',
        inputType: 'checkbox',
        options: [
          { text: 'Novo' },
          { text: 'Usado' },
        ],
      },
  ];

  const handleFilterChange = (category, option) => {
    setSelectedFilters(prevState => {
      const categoryFilters = prevState[category];
      if (categoryFilters.includes(option)) {
        return {
          ...prevState,
          [category]: categoryFilters.filter(item => item !== option),
        };
      } else {
        return {
          ...prevState,
          [category]: [...categoryFilters, option],
        };
      }
    });
  };

  const filteredProducts = products.filter(product => {
    return Object.keys(selectedFilters).every(category => {
      if (selectedFilters[category].length === 0) return true;
      return selectedFilters[category].includes(product[category.toLowerCase()]);
    });
  });

  return (
    <>
    <Header />
    <div className="container mx-auto pt-5 max-w-[1250px]">
      <div className="flex">
        {/* Barra lateral de filtros */}
        <div className="w-[290px] p-4 bg-white mr-6">
          {filters.map((filter, index) => (
            <FilterGroup
              key={index}
              title={filter.title}
              inputType={filter.inputType}
              options={filter.options}
              onChange={handleFilterChange}
            />
          ))}
        </div>
        {/* Listagem de produtos */}
        <div className="flex-1">
          <SectionProduto title={`Resultados para "Tênis" - ${filteredProducts.length} produtos`} titleAlign="left">
            <ProductListing products={filteredProducts} />
          </SectionProduto>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProductListingPage;

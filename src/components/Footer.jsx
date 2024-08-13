import LogoAlternativa from './LogoAlternativa';
import Information from './Information';
import FacebookIcon from '../assets/image/facebook.svg';
import TwitterIcon from '../assets/image/twitter.svg';
import InstagramIcon from '../assets/image/instagram.svg';

const Footer = () => {
  const companyInfo = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/careers" },
    { text: "Meus Pedidos", link: "/orders" }
  ];

  const categories = [
    { text: "Camisetas", link: "/categories/shirts" },
    { text: "Calças", link: "/categories/pants" },
    { text: "Bonés", link: "/categories/hats" },
    { text: "Headphones", link: "/categories/headphones" },
    { text: "Tênis", link: "/categories/shoes" }
  ];

  const contactInfo = [
    { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "#" },
    { text: "(85) 3051-3411", link: "tel:+558530513411" }
  ];

  return (
    <div className="w-full bg-grayscale-dark-gray p-8 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
        <div>
          <LogoAlternativa/>
          <p className="mt-4 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <Information title="Informação" informations={companyInfo} />
        <Information title="Categorias" informations={categories} />
        <Information title="Contato" informations={contactInfo} />
      </div>
      <hr className="my-8 border-white" />
      <p className="text-center">© 2024 Digital College</p>
    </div>
  );
};

export default Footer;

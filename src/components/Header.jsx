import { useState, useEffect } from "react";
import { Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import SearchBar from "./Seach"; 
// import LogoImage from './Logo';
import ImageIcon from '../assets/image/mini-cart.svg';
import MenuIcon from '@mui/icons-material/Menu';  // Ícone de menu para dispositivos móveis
import SearchIcon from '@mui/icons-material/Search'; // Ícone de pesquisa
import CloseIcon from '@mui/icons-material/Close'; // Ícone para fechar o menu
import Link from '@mui/material/Link';

const theme = createTheme({
    palette: {
        primary: {
            main: '#C92071',
        },
        secondary: {
            main: '#000',
        },
    },
});

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <header className="p-4 w-full max-w-screen-xl mx-auto bg-grayscale-light-gray-3">
                <div className="flex justify-between items-center">
                    {/* Menu Icon for Mobile */}
                    <div className="flex items-center md:hidden cursor-pointer">
                        <MenuIcon style={{ color: '#C92071' }} onClick={toggleMenu} />
                    </div>
                    <div className="flex items-center">
                        {/* <LogoImage /> */}
                        <h1 className="text-4xl">LOGO</h1>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
                        <SearchBar />
                        <span className="cursor-pointer underline hover:text-primary hover:underline hover:underline-offset-4">
                            Cadastre-se
                        </span>
                        <Button variant="contained" color="primary" size="medium" className="ml-4">
                            Entrar
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Ícone de Busca visível apenas em mobile */}
                        <SearchIcon className="md:hidden" style={{ color: '#C92071', cursor: 'pointer' }} onClick={toggleSearch} />
                        <div className="relative">
                            <img src={ImageIcon} alt="carrinho-de-compra" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">2</span>
                        </div>
                    </div>
                </div>

                {/* Navegação no Desktop */}
                <nav className="hidden md:flex justify-start mt-4 space-x-8">
                    <a href="/" className="text-black hover:text-primary underline hover:underline-offset-4">
                        Home
                    </a>
                    <a href="/produtos" className="text-black hover:text-primary underline hover:underline-offset-4">
                        Produtos
                    </a>
                    <a href="#" className="text-black hover:text-primary underline hover:underline-offset-4">
                        Categorias
                    </a>
                    <a href="#" className="text-black hover:text-primary underline hover:underline-offset-4">
                        Meus Pedidos
                    </a>
                </nav>
            </header>

            {/* Campo de Pesquisa em Mobile */}
            {searchOpen && (
                <div className="flex justify-center p-4 bg-gray-100 md:hidden">
                    <SearchBar />
                </div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed inset-y-0 left-0 bg-white w-3/4 max-w-xs z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between items-center p-4">
                    {/* <LogoImage /> */}
                    <h1 className="text-3xl">LOGO</h1>
                    <CloseIcon style={{ color: '#C92071', cursor: 'pointer' }} onClick={toggleMenu} />
                </div>
                <nav className="p-4">
                    <h2 className="text-xl font-bold mb-4">Páginas</h2>
                    <Link href="/" underline="none" className="block mb-4 pb-5 text-black hover:text-black">
                        Home
                    </Link>
                    <Link href="/produtos" underline="none" className="block mb-4 pb-5 text-black hover:text-black">
                        Produtos
                    </Link>
                    <Link href="#" underline="none" className="block mb-4 pb-5 text-black hover:text-black">
                        Categorias
                    </Link>
                    <Link href="#" underline="none" className="block mb-4 text-black hover:text-black">
                        Meus Pedidos
                    </Link>
                </nav>
                <div className="p-4 pt-10">
                    <Button variant="contained" color="primary" fullWidth className="bg-primary text-white mb-4">Entrar</Button>
                    <Link href="#" underline="none" className="block text-center pt-5 text-black hover:text-primary">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Header;

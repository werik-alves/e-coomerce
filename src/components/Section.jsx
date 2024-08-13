import { ThemeProvider } from '@emotion/react';
import ImageOrnament from '../assets/image/Ornament.svg';
import ImageNike from '../assets/image/nike.svg';
import HomeSlide1 from '../assets/image/home-slide-1.jpeg';
import HomeSlide2 from '../assets/image/home-slide-2.jpeg';
import HomeSlide3 from '../assets/image/home-slide-3.jpeg';
import HomeSlide4 from '../assets/image/home-slide-4.jpeg';
import HomeSlide5 from '../assets/image/home-slide-5.jpeg';
import HomeSlide6 from '../assets/image/home-slide-6.jpeg';
import HomeSlide7 from '../assets/image/home-slide-7.jpeg';
import HomeSlide8 from '../assets/image/home-slide-8.jpeg';

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import Gallery from './Gallery';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#C92071',
        },
    },
});

const images = [
    { src: ImageNike },
    { src: HomeSlide1 },
    { src: HomeSlide2 },
    { src: HomeSlide3 },
    { src: HomeSlide4 },
    { src: HomeSlide5 },
    { src: HomeSlide6 },
    { src: HomeSlide7 },
    { src: HomeSlide8 },
];

const Section = () => {
    return (
        <div className="bg-white py-12 w-full mt-6 flex flex-col items-center">
            <div className="max-w-[1250px] relative flex flex-col items-center px-4">
                <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 flex flex-col md:items-start text-center md:text-left mt-8 md:mt-0">
                        <h3 className="text-yellow-600 text-lg mb-2">Melhores ofertas personalizadas</h3>
                        <h1 className="text-4xl font-bold mb-4">Queima de estoque Nike</h1>
                        <p className="text-gray-700 mb-4">
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <ThemeProvider theme={Theme}>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Ver Ofertas</Button>
                        </ThemeProvider>
                    </div>
                    <Gallery
                        radius="10px"
                        images={images}
                        className="w-full h-64 md:w-1/3 md:h-full object-contain flex justify-center mb-8 md:mb-0"
                    />
                </div>
                <img src={ImageOrnament} alt="ornament" className="absolute right-2 top-20 w-20 h-20 md:w-40 md:h-40" />
                <div className="flex justify-center gap-5 pt-9">
                    <span className="w-4 h-4 rounded-lg bg-primary cursor-pointer"></span>
                    <span className="w-4 h-4 rounded-lg bg-gray-300 cursor-pointer"></span>
                    <span className="w-4 h-4 rounded-lg bg-gray-300 cursor-pointer"></span>
                    <span className="w-4 h-4 rounded-lg bg-gray-300 cursor-pointer"></span>
                </div>
            </div>
        </div>
    );
};

export default Section;

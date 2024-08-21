import { useRef } from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import ImageCollection1 from '../assets/image/collection-1.png';
import ImageCollection2 from '../assets/image/collection-2.png';
import ImageCollection3 from '../assets/image/collection-3.png';

import ImagemFone from '../assets/image/fone.png';
import ImagemBone from '../assets/image/bones.png';
import ImagemCalca from '../assets/image/calca.png';
import ImagemSapato from '../assets/image/sapato.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#EE4266', // Define a cor do texto do botão
        },
      },
    },
  },
});

const ProductCollection = () => {
  const sliderRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    isDownRef.current = true;
    slider.classList.add('active');
    startXRef.current = e.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    const slider = sliderRef.current;
    isDownRef.current = false;
    slider.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Ajusta a velocidade do arraste
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="container mx-auto pt-10 max-w-[1250px] font-bold">
        <div className="mb-4">
          <h1 className="text-2xl">Coleções em destaque</h1>
        </div>
        <div className="sm:flex sm:pb-10 gap-4">
          <div className="relative rounded-lg border">
            <div className="absolute top-4 left-4 bg-warning text-grayscale-white font-bold px-2 py-1 rounded-full">
              30% OFF
            </div>
            <img src={ImageCollection1} alt="Collection-sapato1" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <Button variant="contained" color="primary" className="bg-primary text-white">Comprar</Button>
            </div>
          </div>
          <div className="relative rounded-lg border">
            <div className="absolute top-4 left-4 bg-warning text-grayscale-white font-bold px-2 py-1 rounded-full">
              30% OFF
            </div>
            <img src={ImageCollection2} alt="Collection-sapato2" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <Button variant="contained" color="primary" className="bg-primary text-white">Comprar</Button>
            </div>
          </div>
          <div className="relative rounded-lg border">
            <div className="absolute top-4 left-4 bg-warning text-grayscale-white font-bold px-2 py-1 rounded-full">
              30% OFF
            </div>
            <img src={ImageCollection3} alt="Collection-sapato3" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <Button variant="contained" color="primary">Comprar</Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <h2 className="text-xl pt-12">Coleções em destaque</h2>
        </div>
        
        <div 
          className="lg:flex lg:justify-center lg:gap-4 flex  pt-3 overflow-x-scroll cursor-grab active:cursor-grabbing"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex flex-col items-center cursor-pointer min-w-[150px]">
            <img src={ImagemSapato} alt="Sapato casual" className="w-28 h-28" />
            <p>Sapato casual</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer min-w-[150px]">
            <img src={ImagemBone} alt="Bones" className="w-28 h-28" />
            <p>Bones</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer min-w-[150px]">
            <img src={ImagemFone} alt="Fones" className="w-28 h-28" />
            <p>Fones</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer min-w-[150px]">
            <img src={ImagemSapato} alt="Sapatos" className="w-28 h-28" />
            <p>Sapatos</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer min-w-[150px]">
            <img src={ImagemCalca} alt="Calça Casual" className="w-28 h-28" />
            <p>Calça Casual</p>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default ProductCollection;

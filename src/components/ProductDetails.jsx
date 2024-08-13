import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import ImageNikeLong from '../assets/image/nike-long.png';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#C92071',
        },
    },
});

const ProductDetails = () => {
    return ( 
        <div className="bg-white py-12 w-full mt-6 flex items-center justify-center">
            <div className="max-w-[1250px] w-full flex flex-col md:flex-row items-center justify-center gap-10 px-4">
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img src={ImageNikeLong} alt="nike-long" className="max-w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 flex items-center">
                    <div className="flex flex-col items-start text-start md:text-left">
                        <h3 className="text-yellow-500 text-lg mb-2">Ofertas especial</h3>
                        <h1 className="text-3xl font-bold mb-4">Air Jordan edição de colecionador</h1>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <ThemeProvider theme={Theme}>
                            <Button variant="contained" color="primary" sx={{ padding: '8px 24px' }}>
                                Ver Ofertas
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

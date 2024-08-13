import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductColletion from "../components/ProductColletion";
import ProductDetails from "../components/ProductDetails";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";

const HomePage = () => {
    return ( 
        <>
            <Header/>
                <Section/>
                <ProductColletion/>
                <ProductOptions/>
                <ProductDetails/>
            <Footer/>
        </>
     );
}
 
export default HomePage;
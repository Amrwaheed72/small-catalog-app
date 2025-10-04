import { useRef } from 'react';
import HeroSection from './HeroSection';
import ProductsSection from './ProductsSection';

const HomePageContent = () => {
    const productsSectionRef = useRef(null);

    // 2. Create the handler function that will perform the scroll
    const handleScrollToProducts = () => {
        productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <HeroSection onScrollClick={handleScrollToProducts} />
            <ProductsSection ref={productsSectionRef} />
        </div>
    );
};

export default HomePageContent;

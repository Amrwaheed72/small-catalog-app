import { useState } from 'react';
import Details from './Details';
import SimilarProductsSection from './SimilarProductsSection';

const ProductDetailsContent = () => {
    const [category, setCategory] = useState('');
    return (
        <div>
            <Details setCategory={setCategory} />
            <SimilarProductsSection category={category} />
        </div>
    );
};

export default ProductDetailsContent;

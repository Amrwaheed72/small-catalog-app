import { BsBoxArrowUpRight } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import Star from './Star';
import Button from './Button';

const ProductCard = ({ product }) => {
    const {
        id,
        image,
        price,
        title,
        rating: { rate, count },
    } = product;
    const navigate = useNavigate();
    return (
        <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div className="h-56 w-full bg-white p-4">
                <img src={image} className="h-full w-full object-contain" />
            </div>

            <div className="flex flex-grow flex-col border-t border-gray-200 p-4">
                <h3 className="h-14 overflow-hidden text-lg font-semibold text-gray-800">
                    {title}
                </h3>

                <div className="my-2 flex items-center gap-1">
                    <Star color={'#fcc419'} size={'20'} full={true} />
                    <p className="text-sm text-gray-600">
                        {rate} ({count} reviews)
                    </p>
                </div>

                <p className="mt-auto text-2xl font-bold text-gray-900">
                    ${price}
                </p>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-gray-200 p-4">
                <Button
                    action={() => navigate(`/product-details/${id}`)}
                    extraClasses="border border-gray-300 text-gray-700 hover:bg-gray-100"
                    icon={<BsBoxArrowUpRight />}
                    title="View Details"
                />
                <Button
                    extraClasses="bg-blue-600 text-white hover:bg-blue-700"
                    title="Add to Cart"
                    icon={<IoCartOutline size={18} />}
                />
            </div>
        </div>
    );
};

export default ProductCard;

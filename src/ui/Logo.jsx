import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link href="/" className="z-10 flex items-center gap-4">
                <div className="flex items-center justify-center gap-2 text-2xl font-semibold lg:text-4xl">
                    <AiOutlineShoppingCart />
                    <p>NeXus</p>
                </div>
            </Link>
        </div>
    );
};

export default Logo;

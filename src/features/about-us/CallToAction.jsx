import { NavLink } from 'react-router';

const CallToAction = () => {
    return (
        <section className="bg-blue-600 mb-4">
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-white">
                    Ready to Find Your Style?
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-lg text-blue-100">
                    Explore our latest collection and discover pieces that are
                    made to last.
                </p>
                <div className="mt-8">
                    <NavLink
                        to="/products"
                        className="inline-block transform rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-transform hover:scale-105"
                    >
                        Shop Now
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

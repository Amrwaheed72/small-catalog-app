import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative flex h-[60vh] items-center justify-center overflow-hidden text-center md:h-[70vh] lg:h-[80vh]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fashion models in stylish clothing"
                    className="h-full w-full object-cover object-center brightness-75"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl p-4 text-white">
                <h1 className="mb-4 text-4xl leading-tight font-extrabold tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
                    Discover Your Signature Style
                </h1>
                <p className="mb-8 text-lg font-light drop-shadow-md sm:text-xl lg:text-2xl">
                    Curated collections of timeless fashion and modern trends.
                    Elevate your wardrobe with pieces that speak to you.
                </p>
                <button
                    id="#products"
                    className="transform cursor-pointer scroll-smooth rounded-full bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-lg transition-colors duration-300 hover:scale-105 hover:bg-gray-200"
                >
                    Shop the Collection
                </button>
            </div>
        </section>
    );
};

export default HeroSection;

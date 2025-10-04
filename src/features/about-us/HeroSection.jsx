const HeroSection = () => {
    return (
        <section className="relative text-white">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=2592&auto=format&fit=crop"
                    alt="Team working on fashion designs"
                    className="h-full w-full object-cover brightness-50"
                />
            </div>
            <div className="relative container mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Beyond the Fabric
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-200">
                    We believe style is more than what you wear—it's how you
                    express who you are.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;

import { BsTrophy, BsEye, BsPeople } from 'react-icons/bs';

const OurValuesSection = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        What We Believe In
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
                    <div className="p-6">
                        <BsTrophy className="mx-auto h-12 w-12 text-blue-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            Quality Craftsmanship
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We source the finest materials and partner with
                            skilled artisans to ensure every stitch is perfect.
                        </p>
                    </div>
                    <div className="p-6">
                        <BsEye className="mx-auto h-12 w-12 text-blue-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            Timeless Design
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Our collections are designed to be modern yet
                            timeless, transcending fleeting trends.
                        </p>
                    </div>
                    <div className="p-6">
                        <BsPeople className="mx-auto h-12 w-12 text-blue-600" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            Community First
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We're more than a brand; we're a community of
                            individuals who appreciate style and substance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurValuesSection;

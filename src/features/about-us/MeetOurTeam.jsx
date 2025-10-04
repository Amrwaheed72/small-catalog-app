const MeetOurTeam = () => {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Behind the Seams
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our team is a passionate group of designers, stylists,
                        and creatives dedicated to bringing our vision to life.
                        We pour our hearts into every collection, ensuring that
                        you receive a product that is not only beautiful but
                        also made with care.
                    </p>
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
                        alt="Our creative team collaborating"
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;

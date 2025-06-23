import heroBg from "/Images/hero-bg.png";
import workImg from "/Images/section-1.1.png";

const Hero = () => {
    return (
        <section
            id='hero'
            className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 py-20"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-6xl mt-20">
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-black break-words">
                    69pixels.
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-black font-bold text-6xl sm:text-7xl md:text-8xl text-center">
                    <span>for</span>
                    <img src={workImg} alt="mockup" className="h-24 w-auto sm:h-28" />
                    <span>Startups.</span>
                </div>

                <p className="mt-10 text-lg sm:text-xl font-medium text-black px-2 sm:px-0">
                    Immediate Design Support for Your Product
                </p>

                <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:opacity-90 text-lg">
                    Learn more ↓
                </button>
            </div>
        </section>
    );
};

export default Hero;

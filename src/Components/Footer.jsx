import FadeInSection from "../Animations/FadeInSection";

const Footer = () => {
    return (
        <section className="bg-red-600 px-6 md:px-16 py-10 text-gray-400 text-left">
            <FadeInSection>
                <div className="text-black text-center mb-12 p-4 font-semibold">
                    <h1
                        className="inline-block leading-none w-full text-[clamp(2rem,10vw,10rem)]"
                        style={{ wordBreak: "break-word" }}
                    >
                        TransfiNITTe
                    </h1>
                </div>
                <div className="text-gray-900 text-center border-b-2 border-gray-900 flex flex-col sm:flex-row pb-10 justify-between items-center text-md sm:text-xl">
                    <div>© 2017 — 69</div>
                    <div>
                        <div className="pt-6">Limassol, Cyprus</div>
                        <div className="">Warsaw, Poland</div>
                    </div>
                </div>
            </FadeInSection>


            <FadeInSection>
                <div className="text-gray-900 text-md sm:text-xl mx-auto max-w-7xl mt-16 px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-y-6">
                        <a href="#">Dribbble</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Clutch</a>
                        <a href="#">Designrush</a>
                        <a href="#">Facebook</a>
                    </div>

                    <div className="hidden md:flex justify-center items-center">
                        <div className="w-px h-40 bg-black" />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-start gap-10 text-right">
                        <div>
                            <p>Contact us</p>
                            <a href="#" className="underline hover:opacity-80">
                                Calendly
                            </a>
                        </div>
                        <div>
                            <p>Request design</p>
                            <a href="mailto:hello@69pixels.com" className="underline hover:opacity-80">
                                hello@69pixels.com
                            </a>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>

    )
}

export default Footer
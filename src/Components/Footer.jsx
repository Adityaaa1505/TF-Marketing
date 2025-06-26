import FadeInSection from "../Animations/FadeInSection";

import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

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
                    <div>© 2025 — 26</div>
                    <div>
                        <div className="pt-6">Technical Council,</div>
                        <div className="">NIT - Trichy</div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="text-gray-900 text-md sm:text-xl mx-auto max-w-7xl mt-16 px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="w-full md:w-1/2 flex gap-x-12 text-4xl text-black items-center">
                        <a
                            href="https://www.instagram.com/tc_nitt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition duration-300"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/technical-council-nit-trichy/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="hidden md:flex justify-center items-center">
                        <div className="w-px h-40 bg-black" />
                    </div>

                    <div className="w-full md:w-1/2 hover:opacity-80 flex flex-col justify-start gap-1 text-right">
                        <a className="underline flex justify-end items-center gap-1" href="mailto:client@example.com?subject=Welcome%20to%20Our%20Services&body=Hi%20there,%0D%0A%0D%0AThank%20you%20for%20reaching%20out.%20Please%20find%20below%20your%20welcome%20message:%0D%0A%0D%0A---%0D%0A[Your%20Template%20Content%20Here]%0D%0A---%0D%0A%0D%0ARegards,%0D%0AThe%20Team" target="_blank">
                            <IoMdMail />
                            technicalcouncil.nitt.work@gmail.com
                        </a>
                        <a href="#" className="flex justify-end items-center gap-1">
                            <IoIosCall className="" />70477 79851 / 99407 42527
                        </a>
                    </div>
                </div>
            </FadeInSection>
        </section>

    )
}

export default Footer
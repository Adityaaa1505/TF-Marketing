import FadeInSection from "../Animations/FadeInSection";
const Reviews = () => {
    return (
        <section className='bg-black px-6 md:px-16 py-20 text-gray-400 text-left font-semibold'>
            <FadeInSection>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-4">
                    Reviews
                </div>
                <div className="text-white text-3xl md:text-4xl lg:text-5xl mb-12">
                    We can't say better than our customers.
                </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-lg md:text-xl lg:text-2xl underline my-2">Gal Gutzeit</div>
                        <div className="text-md md:text-lg lg:text-xl my-2">Head of Marketing, LeapXpert</div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl">
                        “They do good design. That’s why we went to them and that’s why we hired them. They’re serious people who create good work. They made a really good website for us.”
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-lg md:text-xl lg:text-2xl underline my-2">Marina Martianova</div>
                        <div className="text-md md:text-lg lg:text-xl my-2">CEO & Founder, Seamm</div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl">
                        “We felt that we were always in the loop for 69, and that they cared for this project like they were a part of the initial team – we’d managed to form a strong bond together with our internal team, and as a result, we had highly creative, technical and smart people to communicate together and create a great product.”
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="">
                        <div className="text-white text-lg md:text-xl lg:text-2xl underline my-2">Nick Serdotetskiy</div>
                        <div className="text-md md:text-lg lg:text-xl my-2">Co-Founder, Happyō</div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="text-white text-xl md:text-2xl lg:text-3xl">
                        “While developing the product, we have already managed to work with most of the team members. They are UI/UX and motion designers, web developers, project managers, art-director and CEO. We like that depending on the task 69pixels. chooses the right specialist to complete it in the best way possible.”
                    </div>
                </FadeInSection>
            </div>
        </section >
    )
}

export default Reviews
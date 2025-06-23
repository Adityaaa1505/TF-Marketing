import FadeInSection from "../Animations/FadeInSection";

const steps = [
  {
    title: "01 Immediate Start",
    desc: "After our first call",
    active: true,
  },
  {
    title: "02 Formed team",
    desc: "With up and running proccess",
    active: false,
  },
  {
    title: "03 Design Wrap Up",
    desc: "With 0 → 1 product approach",
    active: false,
  },
  {
    title: "04 Product expertise",
    desc: "2 Golden kitties and other awards",
    active: false,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl lg:text-7xl mb-16 text-center md:text-left text-[rgb(161,163,165)] font-semibold ">
          The team that <span className="text-white font-bold">can help</span>
        </h2>
      </FadeInSection>

      {/* Right-aligned grid container */}
      <div className="w-full flex justify-end ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-fit sm:w-[80%] lg:w-[65%]">
            {steps.map((step, idx) => (
          <FadeInSection key={idx}>
              <div className="p-4 ">
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold ${step.active
                    ? "bg-gradient-to-r from-pink-500 to-pink-400 text-black"
                    : "text-white"
                    } p-4 rounded-md`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 px-4 text-base md:text-lg text-gray-400">
                  {step.desc}
                </p>
              </div>
            </FadeInSection>
            ))}
        </div>
      </div>

      <FadeInSection>
        <div className="mt-10 text-[rgb(161,163,165,1)] max-w-3xl w-fit text-xl md:text-3xl mx-auto">
          Start your project now! Let’s not waste time on emails, let’s chat on{" "}
          <span className="underline font-bold text-white">WhatsApp</span> or{" "}
          <span className="underline font-bold text-white">Telegram</span>. Or just drop us a line at{" "}
          <span className="underline font-bold text-white">hello@69pixels.com</span>.
        </div>
      </FadeInSection>
    </section>
  );
};

export default TeamSection;

import HeroContent from "./hero/HeroContent";
import ArrowDown from "./reuse/ArrowDown";

const Hero = () => {
  return (
    <section
      id="home"
      className={`justify-center`}
    >
      <HeroContent />
      <ArrowDown href="#about" />
    </section>
  );
};

export default Hero;

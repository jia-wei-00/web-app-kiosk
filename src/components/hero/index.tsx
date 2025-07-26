import Content from "./content";
import Cta from "./cta";
import Decorations from "./decorations";
import MovieIllustration from "./movie-illustration";
import Stats from "./stats";

const Hero = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="relative flex items-center justify-center overflow-hidden "
    >
      <Decorations />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-10 md:py-20">
        <Content />
        <Cta />
        <MovieIllustration />
        <Stats />
      </div>
    </section>
  );
};

export default Hero;

const Content = () => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
        Host the Ultimate{" "}
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent dark:from-purple-500 dark:via-blue-400 dark:to-indigo-400">
          Birthday, Movie Night
        </span>{" "}
        <span className="md:inline-block animate-bounce text-6xl md:text-8xl hidden">
          🎬
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
        Outdoor cinema, big screens, popcorn & fun vibes.
      </p>
    </>
  );
};

export default Content;

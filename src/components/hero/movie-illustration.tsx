const MovieIllustration = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="relative">
        <div className="text-8xl md:text-9xl animate-pulse drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          🎭
        </div>
        <div
          className="absolute -top-4 -right-4 text-3xl animate-spin"
          style={{ animationDuration: "3s" }}
        >
          ⭐
        </div>
        <div
          className="absolute -bottom-2 -left-4 text-2xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          🍿
        </div>
      </div>
    </div>
  );
};

export default MovieIllustration;

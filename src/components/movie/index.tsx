import React from "react";
import useFetchMovie from "../../hooks/use-fetch-movie";
import Loading from "./loading";
import Error from "./error";
import MovieCard from "./movie-card";

const MovieSection: React.FC<{ id: string }> = ({ id }) => {
  const { movies, isLoading, error } = useFetchMovie();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section id={id} className="relative py-20 bg-gradient-to-b">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TRENDING <span className="text-slate-400">MOVIES</span>
          </h2>
          <p className="text-xl text-slate-300 mb-6">
            Discover Today's Most Popular Films
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;

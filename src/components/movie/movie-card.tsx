import React from "react";
import { type MovieState } from "../../hooks/use-fetch-movie";
import DetailsCard from "./details-card";
import { Button } from "../ui/button";

type MovieCardProps = {
  movie: MovieState;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      key={movie.id}
      className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
    >
      {/* Movie Poster */}
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/api/placeholder/300/450"
          }
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-yellow-400 text-sm font-semibold">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-slate-400 text-sm mb-3 line-clamp-2">
          {movie.overview}
        </p>
        <div className="flex justify-between items-center text-xs text-slate-500">
          <span>{movie.release_date?.split("-")[0]}</span>
          <span>{movie.vote_count} votes</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <Button
            variant="default"
            className="w-full"
            onClick={() => setOpen(true)}
          >
            View Details
          </Button>
        </div>
      </div>

      <DetailsCard movie={movie} open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default MovieCard;

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { type MovieState } from "../../hooks/use-fetch-movie";

type DetailsCardProps = {
  movie: MovieState;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DetailsCard: React.FC<DetailsCardProps> = ({
  movie,
  open,
  onOpenChange,
}) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-slate-900 flex items-center justify-center p-4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/api/placeholder/300/450"
              }
              alt={movie.title}
              className="rounded-lg w-full h-auto object-cover shadow-lg"
              style={{ maxHeight: 320 }}
            />
          </div>
          <div className="md:w-2/3 p-6 flex flex-col gap-2">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white mb-1">
                {movie.title}
              </DialogTitle>
              <DialogDescription className="text-slate-400 mb-2">
                {movie.release_date?.split("-")[0]} &middot; ⭐{" "}
                {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
              </DialogDescription>
            </DialogHeader>
            <p className="text-slate-300 text-sm mb-4">
              {movie.overview || "No description available."}
            </p>
            <div className="mt-auto flex justify-end">
              <DialogClose asChild>
                <Button variant="outline" className="mt-2">
                  Close
                </Button>
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsCard;

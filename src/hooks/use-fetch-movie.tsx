import { useQuery } from "@tanstack/react-query";

export type MovieState = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movie = {
  page: number;
  results: MovieState[];
  total_pages: number;
  total_results: number;
};

const apiKey = import.meta.env.VITE_TMDB_API_KEY || process.env.TMDB_API_KEY;

const useFetchMovie = (page: number = 1, limit: number = 12) => {
  const { data, isLoading, error } = useQuery<Movie>({
    queryKey: ["movie"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`
      ).then((res) => res.json()),
  });

  const movies = data?.results?.slice(0, limit) ?? [];

  return { movies, isLoading, error };
};

export default useFetchMovie;

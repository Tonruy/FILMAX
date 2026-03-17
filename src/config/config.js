export const MovieListType = Object.freeze({
  nowPlaying: "now_playing",
  popular: "popular",
  topRated: "top_rated",
  upcoming: "upcoming",
});

//New cost just for showing up better names in select
export const displayNames = {
  nowPlaying: "En cartelera",
  popular: "Populares",
  topRated: "Mejor valoradas",
  upcoming: "Próximamente"
}

export const globalConfig = {
  notAvailableValue: "(No disponible)",
  defaultMovieListType: MovieListType.nowPlaying,
};

export const apiConfig = {
  apiKey: import.meta.env.VITE_TMDB_API_KEY ?? "",
  langIso: "es-ES",
  baseUrl: "https://api.themoviedb.org/3/",
  posterBaseUrl: "http://image.tmdb.org/t/p",
  backdropBaseUrl: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",
};

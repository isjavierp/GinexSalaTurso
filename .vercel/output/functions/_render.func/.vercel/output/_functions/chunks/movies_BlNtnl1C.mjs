const getMovies = async () => {
  const API_KEY = "a62ff8c8cdeca96955934d02492129c8";
  const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
  const data = await res.json();
  const movies_data = data.results.slice(0, 5);
  return movies_data;
};
const getMoviesById = async ({ id }) => {
  const API_KEY = "a62ff8c8cdeca96955934d02492129c8";
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es`);
  const data = await res.json();
  const movie = data;
  return movie;
};

export { getMovies as a, getMoviesById as g };

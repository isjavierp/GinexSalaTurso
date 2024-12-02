
export const getMovies = async () => {
    const API_KEY = import.meta.env.API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
    const data = await res.json();
    const movies_data = data.results.slice(0, 5);
    return movies_data;

  };


  export const getMoviesById = async ({id} : any) => {
    const API_KEY = import.meta.env.API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es`);
    const data = await res.json();
    const movie = data;
    return movie;
  };
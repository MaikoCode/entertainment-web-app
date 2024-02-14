
interface Movie {
  title: string;
  year: number;
}

const isBrowser = typeof window !== "undefined"; 

const localStorageUtils = {
  saveMovie: (movie: Movie) => {
    if (!isBrowser) return; 
    const savedMovies: Movie[] = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    const movieKey = `${movie.title}-${movie.year}`;
    const existingIndex = savedMovies.findIndex(m => `${m.title}-${m.year}` === movieKey);
    if (existingIndex === -1) {
      savedMovies.push(movie);
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }
  },

  removeMovie: (movie: Movie) => {
    if (!isBrowser) return; 
    let savedMovies: Movie[] = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    const movieKey = `${movie.title}-${movie.year}`;
    savedMovies = savedMovies.filter(m => `${m.title}-${m.year}` !== movieKey);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  },

  isMovieSaved: (movie: Movie): boolean => {
    if (!isBrowser) return false;
    const savedMovies: Movie[] = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    const movieKey = `${movie.title}-${movie.year}`;
    return savedMovies.some(m => `${m.title}-${m.year}` === movieKey);
  },

  toggleSaveMovie: (movie: Movie) => {
    if (!isBrowser) return; 
    if (localStorageUtils.isMovieSaved(movie)) {
      localStorageUtils.removeMovie(movie);
    } else {
      localStorageUtils.saveMovie(movie);
    }
  }
};

export default localStorageUtils;

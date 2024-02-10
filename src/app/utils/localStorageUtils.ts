interface Movie {
    title: string;
    year: number;
}

const localStorageUtils = {
  saveMovie: (movie: Movie) => {
    const savedMovies: Movie[] = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    const movieKey = `${movie.title}-${movie.year}`;
    const existingIndex = savedMovies.findIndex(m => `${m.title}-${m.year}` === movieKey);
    if (existingIndex === -1) {
      savedMovies.push(movie);
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }
  },

  removeMovie: (movie: Movie) => {
    let savedMovies: Movie[] = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    const movieKey = `${movie.title}-${movie.year}`;
    savedMovies = savedMovies.filter(m => `${m.title}-${m.year}` !== movieKey);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  },

  isMovieSaved: (movie: Movie): boolean => {
    const savedMovies: Movie[] = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    const movieKey = `${movie.title}-${movie.year}`;
    return savedMovies.some(m => `${m.title}-${m.year}` === movieKey);
  },

  toggleSaveMovie:  (movie: Movie) => {
    if (localStorageUtils.isMovieSaved(movie)) {
      localStorageUtils.removeMovie(movie);
    } else {
      localStorageUtils.saveMovie(movie);
    }
  }
};

export default localStorageUtils;

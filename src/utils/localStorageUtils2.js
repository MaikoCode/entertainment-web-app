const localStorageUtils = {
    saveMovie: function(movie) {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
      const movieKey = `${movie.title}-${movie.year}`;
      const existingIndex = savedMovies.findIndex(m => `${m.title}-${m.year}` === movieKey);
      if (existingIndex === -1) {
        savedMovies.push(movie);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      }
    },
  
    removeMovie: function(movie) {
      let savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
      const movieKey = `${movie.title}-${movie.year}`;
      savedMovies = savedMovies.filter(m => `${m.title}-${m.year}` !== movieKey);
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    },
  
    isMovieSaved: function(movie) {
      const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
      const movieKey = `${movie.title}-${movie.year}`;
      return savedMovies.some(m => `${m.title}-${m.year}` === movieKey);
    },
  
    toggleSaveMovie: function(movie) {
      if (localStorageUtils.isMovieSaved(movie)) {
        localStorageUtils.removeMovie(movie);
      } else {
        localStorageUtils.saveMovie(movie);
      }
    }
  };
  
  // ES Module export
  export default localStorageUtils;
  
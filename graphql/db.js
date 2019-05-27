let movies = [
  {
    id: 0,
    name: "Inception",
    score: 18
  },
  {
    id: 1,
    name: "Batman",
    score: 11
  },
  {
    id: 2,
    name: "Star Wars",
    score: 12
  },
  {
    id: 3,
    name: "Daal",
    score: 18
  },
  {
    id: 4,
    name: "JD",
    score: 18
  },
  {
    id: 5,
    name: "Knocking on heaven's door",
    score: 18
  },
  {
    id: 6,
    name: "avengers",
    score: 18
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

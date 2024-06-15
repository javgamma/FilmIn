// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const totalScore = movies.reduce((sum, movie) => sum + (movie.score || 0), 0);
  const averageScore = totalScore / movies.length;
  return parseFloat(averageScore.toFixed(2));
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),0);

  const averageScore = totalScore / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const newMovies = movies.slice();
  newMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return newMovies;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const titles = movies.map((movie) => movie.title);
  titles.sort((a, b) => a.localeCompare(b));
  return titles.slice(0, 20);
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

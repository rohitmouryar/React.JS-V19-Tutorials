// Tutorial;11 Imports and Exports in React

// 1. Default Export and Import
// const NetflixSeries = () => {
//   return <div>Netflix</div>;
// };

// export default NetflixSeries;

// 2. Named Export and Import
// export const NetflixSeries = () => {
//   return <div>Netflix</div>;
// };

// 3. Mixed Export and Import

export const NetflixSeries = () => {
  return <div>Netflix</div>;
};

const Movie = () => {
  return <div>Dangle</div>;
};

export default Movie;

//aici ar trb sa importez (functia de modal)
const modal = require('./modal');

module.exports = () => {
  const search = document.querySelector('.search-bar');
  let movieTitle;
  search.addEventListener('input', e => {
    movieTitle = e.target.value;
  });

  const searchBtn = document.querySelector('.search');
  searchBtn.addEventListener('click', e => {
    const key = require('./key').key;
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1&api_key=${key}`;
    let movieObj;
    (async () => {
      const response = await fetch(url);
      const res = await response.json();

      movieObj = res.results[0];

      //console.log(movieObj);

      //aici ar trb sa chem modalul si sa trimit obiectul movieObj
      modal(movieObj, key);
    })();

    // console.log(movieObj);
  });
};

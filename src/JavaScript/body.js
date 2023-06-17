module.exports = (pageNumber, key) => {
  const body = async (pageNumber, key) => {
    let movies = [];
    //const url = `https://api.themoviedb.org/3/movie/150?api_key=${key}`;

    let start = pageNumber * 20 + 41 + 1;

    for (let i = start; i < start + 20; i++) {
      if (
        i === 72 ||
        i === 84 ||
        i === 119 ||
        i === 181 ||
        i === 188 ||
        i === 202 ||
        i === 208 ||
        i === 209 ||
        i === 210 ||
        i === 230 ||
        i === 263 ||
        i === 264 ||
        i === 295 ||
        i === 282 ||
        i === 283 ||
        i === 130 ||
        i === 131 ||
        i === 151 ||
        i === 304 ||
        i === 305 ||
        i === 323 ||
        i === 324 ||
        i === 325 ||
        i === 328 ||
        i === 352 ||
        i === 353 ||
        i === 354 ||
        i === 355 ||
        i === 356 ||
        i === 357 ||
        i === 358 ||
        i === 362 ||
        (i > 364 && i < 377) ||
        (i > 383 && i < 387) ||
        i === 382 ||
        i === 394 ||
        i === 399 ||
        i === 412 ||
        i === 413 ||
        i === 416 ||
        i === 417 ||
        i === 418 ||
        i === 420 ||
        i === 432 ||
        i === 443 ||
        i === 444 ||
        i === 447 ||
        i === 448 ||
        i === 449 ||
        i === 450 ||
        i === 456 ||
        i === 461
      )
        continue;
      const url = `https://api.themoviedb.org/3/movie/${i}?api_key=${key}`;
      const resonse = await fetch(url);
      const resObj = await resonse.json();

      const { id, genres, title, poster_path, release_date } = resObj;

      const obj = {
        id: id,
        genres: genres,
        title: title,
        poster_path: poster_path,
        release_date: release_date,
      };

      //  console.log(obj);

      movies.push(obj);
    }

    return movies;
  };

  function createElementProstule(e) {
    const elDiv = document.createElement('div');
    elDiv.classList.add('movies__container__item');

    const moviePoster = document.createElement('img');
    moviePoster.src = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
    moviePoster.classList.add('movies__container__image');
    elDiv.appendChild(moviePoster);

    const text = document.createElement('div');
    const title = document.createElement('p');
    title.innerHTML = `${e.title}`;
    title.classList.add('movies__container__title');
    text.appendChild(title);

    const genreList = e.genres.map(e => e.name);
    let genres = '';
    if (genreList.length == 1) genres += genreList[0];
    else if (genreList.length == 2) genres += genreList[0] + ' ' + genreList[1];
    else genres += genreList[0] + ' ' + genreList[1] + ' ' + 'other';

    genres += ' | ';
    const year = e.release_date.slice(0, 4);
    genres += `${year}`;
    const subtitle = document.createElement('p');
    subtitle.innerHTML = genres;
    subtitle.classList.add('movies__container__genre');
    text.appendChild(subtitle);

    elDiv.appendChild(text);

    // console.log(genres);

    return elDiv;
  }

  const buildHtml = async (pageNumber, key) => {
    const movieList = await body(pageNumber, key);
    //console.log(movieList[0].genres[0].name);

    //console.log(movieList);

    const movieContainer = document.querySelector('.movies__container');
    movieList.forEach(e => {
      const htmlElement = createElementProstule(e);
      movieContainer.appendChild(htmlElement);
    });
  };

  console.log('-------  Sunt in body.js  ------');
  buildHtml(pageNumber, key);
};

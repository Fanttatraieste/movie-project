module.exports = (obj, key) => {
  const url = `https://api.themoviedb.org/3/movie/${obj.id}?api_key=${key}`;

  let movieObj;

  const generateModal = (movieObj, obj) => {
    const movieImage = document.querySelector('.movie-image');
    const movieTitle = document.querySelector('.movie-title');
    const voteRating = document.getElementById('vote-rating');
    const totalVotes = document.getElementById('total-votes');
    const popularity = document.getElementById('popularity');
    const originalTitle = document.getElementById('original-title');
    const aboutContent = document.querySelector('.movie-about-content');
    const genre = document.getElementById('genre');

    movieImage.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
    movieTitle.innerHTML = `${obj.title}`;
    voteRating.innerHTML = `${obj.vote_average}`;
    totalVotes.innerHTML = `${obj.vote_count}`;
    popularity.innerHTML = `${obj.popularity}`;
    originalTitle.innerHTML = `${obj.original_title}`;
    aboutContent.innerHTML = `${obj.overview}`;

    let g = '';
    let glist = movieObj.genres; // a list of genres

    glist.forEach(e => {
      g += e.name;
      g += ', ';
    });

    genre.innerHTML = `${g}`;

    (() => {
      const modal = document.querySelector('[data-modal]');
      const closeModalBtn = document.querySelector('[data-modal-close]');

      toggleModal();
      closeModalBtn.addEventListener('click', () => {
        modal.classList.add('is-hidden');
      });

      function toggleModal() {
        modal.classList.toggle('is-hidden');
      }
    })();
  };

  (async () => {
    const response = await fetch(url);
    movieObj = await response.json();

    console.log(movieObj, obj);

    generateModal(movieObj, obj);
  })(); //   iife, imediatly invoked function
};

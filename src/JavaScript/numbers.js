module.exports = currPage => {
  const page = document.querySelector(`[id='${currPage}']`);
  page.classList.toggle('current-page');
};

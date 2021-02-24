'use strict';

function getLyrics(artist, title) {
  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  .then(response => response.json())
  .then(responseJson =>
    displayResults(responseJson))
  .catch(error => alert('Something went wrong :('));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('#results').html(responseJson.lyrics);
}

function watchForm() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let artist = $('.js-query-artist').val()
    let title = $('.js-query-title').val()
    getLyrics(artist, title);
});
}

$(watchForm);


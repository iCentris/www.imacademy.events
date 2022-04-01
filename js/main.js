const buyLivestreamBarcelonaId = document.getElementById(
  "buy-livestream-barcelona"
);

buyLivestreamBarcelonaId.onclick = function (e) {
  e.preventDefault();
  const options = document.getElementById("livestream-options-barcelona");
  options.classList.toggle("livestream-options--show");
};

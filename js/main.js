const buyLivestreamPalmBeachId = document.getElementById(
  "buy-livestream-palmbeach"
);

buyLivestreamPalmBeachId.onclick = function () {
  const options = document.getElementById("livestream-options-palmbeach");
  options.classList.toggle("livestream-options--show");
};

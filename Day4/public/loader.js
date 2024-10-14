// loader.js
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");

  // Add the class to hide the loader
  loader.classList.add("loader-hidden");

  // Remove the loader element after transition
  loader.addEventListener("transitionend", function () {
    // loader.remove();
    document.body.removeChild("loader");
  });
});

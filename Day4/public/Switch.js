let togBtn = document.getElementById("togBtn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

togBtn.addEventListener("click", toggleDarkMode);

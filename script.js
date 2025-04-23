document.getElementById("toggleLanguage").addEventListener("click", () => {
  document.querySelectorAll(".lang-en").forEach(el => el.classList.toggle("hidden"));
  document.querySelectorAll(".lang-ja").forEach(el => el.classList.toggle("hidden"));
});
document.getElementById("toggle-lang").addEventListener("click", function () {
  const enElements = document.querySelectorAll(".lang-en");
  const jaElements = document.querySelectorAll(".lang-ja");

  enElements.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });

  jaElements.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
});
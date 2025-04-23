const toggleBtn = document.getElementById("lang-toggle");
let lang = "en";

toggleBtn.addEventListener("click", () => {
  lang = lang === "en" ? "ja" : "en";
  toggleBtn.textContent = lang === "en" ? "日本語" : "EN";

  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });
});
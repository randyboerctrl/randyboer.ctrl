const toggleBtn = document.getElementById("toggleTranslate");
let isEnglish = true;

function toggleLanguage() {
  const blocks = document.querySelectorAll(".block");

  blocks.forEach(block => {
    const en = block.getAttribute("data-en");
    const ja = block.getAttribute("data-ja");
    block.textContent = isEnglish ? ja : en;
  });

  toggleBtn.textContent = isEnglish ? "EN" : "日本語";
  isEnglish = !isEnglish;
}

toggleBtn.addEventListener("click", toggleLanguage);

window.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(block => {
    block.textContent = block.getAttribute("data-en");
  });
});
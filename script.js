const toggleBtn = document.getElementById("toggleTranslate");
let isEnglish = true;

function toggleLanguage() {
  const blocks = document.querySelectorAll(".block");

  blocks.forEach(block => {
    const contentEn = block.querySelector(".content-en");
    const contentJa = block.querySelector(".content-ja");
    
    if (isEnglish) {
      contentEn.style.display = "block";
      contentJa.style.display = "none";
    } else {
      contentEn.style.display = "none";
      contentJa.style.display = "block";
    }
  });

  toggleBtn.textContent = isEnglish ? "日本語" : "EN";
  isEnglish = !isEnglish;
}

toggleBtn.addEventListener("click", toggleLanguage);

window.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach(block => {
    const contentEn = block.querySelector(".content-en");
    const contentJa = block.querySelector(".content-ja");

    // Default to English content
    contentEn.style.display = "block";
    contentJa.style.display = "none";
  });
});
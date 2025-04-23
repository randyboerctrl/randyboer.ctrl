const toggleBtn = document.getElementById("toggleTranslate");
let isEnglish = true;

function toggleLanguage() {
  const blocks = document.querySelectorAll(".block");

  blocks.forEach(block => {
    const en = block.getAttribute("data-en");
    const ja = block.getAttribute("data-ja");
    block.textContent = isEnglish ? ja : en;
  });

  const translations = {
    en: {
      projects: "Projects",
      // other entries
    },
    ja: {
      projects: "プロジェクト",
      // other entries
    }
  };

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

const translations = {
  en: {
    projects: "Projects",
    projects_title: "Projects",
    projects_text: "I’m open to freelance projects—if it’s a good fit, I’m ready to tackle the challenge.",
    my_band: "My band"
  },
  ja: {
    projects: "プロジェクト",
    projects_title: "プロジェクト",
    projects_text: "フリーランスのプロジェクトも受け付けています。良いご縁があれば、ぜひ挑戦したいと思っています。",
    my_band: "バンド"
  }
};
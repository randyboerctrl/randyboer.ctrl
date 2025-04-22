document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.querySelector(".lang-toggle");
    const navToggle = document.querySelector(".nav-toggle");
    const navBar = document.querySelector(".nav-bar");
  
    const translations = {
      "bio": {
        jp: "こちらでは、私の仕事をご覧いただけます。私は、使いやすさを重視したクリーンで直感的なシステムを作るフロントエンド開発者です。フリーランスのプロジェクトも受け付けていますので、興味があればこのウェブサイトからご連絡ください。\n\n仕事以外では、私は37歳のオランダ人クリエイターで、日本語（N4レベル）を学び、日本での留学を計画しています。趣味で軽バンのレストアをしながら、ゆっくりとした進歩と実用的なデザインへの情熱を楽しんでいます。また、Bandcampで音楽も共有していますので、興味があればぜひチェックしてみてください。",
        en: "Feel free to explore my work here—I’m a front-end developer focused on creating clean, intuitive systems that are a pleasure to use. I also take on freelance projects, so if you’re interested in collaborating, don’t hesitate to reach out through this website.\n\nOutside of work, I’m a 37-year-old Dutch creative learning Japanese (around N4) and planning to study in Japan. In my spare time, I’m restoring a kei van, blending hands-on work with a passion for slow progress and practical design. I also share some music on Bandcamp—feel free to check it out if you’re into that."
      }
    };
  
    let currentLang = "en";
  
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "jp" : "en";
      const bioBlock = document.getElementById("bio");
      if (bioBlock) {
        bioBlock.textContent = translations.bio[currentLang];
      }
    });
  
    navToggle.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  });
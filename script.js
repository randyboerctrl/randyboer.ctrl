const toggleLanguageButton = document.getElementById("toggleLanguage");
let currentLanguage = "en";

const translations = {
  en: {
    bioTitle: "Bio",
    bioText: `Feel free to explore my work here—I’m a front-end developer focused on creating clean, intuitive systems that are a pleasure to use. I also take on freelance projects, so if you’re interested in collaborating, don’t hesitate to reach out through this website.

Outside of work, I’m a 37-year-old Dutch creative learning Japanese (around N4) and planning to study in Japan. In my spare time, I’m restoring a kei van, blending hands-on work with a passion for slow progress and practical design. I also share some music on Bandcamp—feel free to check it out if you’re into that.`,

    learningTitle: "currently learning",
    learn1: "🇯🇵 japanese (n4 level, aiming for immersion)",
    learn2: "💻 front-end development (html / css / javascript)",
    learn3: "🛠️ diy projects (camperbox build, kei van restoration)",

    projectsTitle: "projects",
    proj1: "🚐 Kei Camperbox Plan",
    proj2: "📊 Japan Budget Tracker",
    proj3: "🌐 This Portfolio Site",

    contactTitle: "contact",
    contact1: "📧 Email me",
    contact2: "🐙 GitHub",

    footer: "© 2025 Randy Boer all rights reserved."
  },

  ja: {
    bioTitle: "自己紹介",
    bioText: `こちらでは私の作品をご覧いただけます。私は、使いやすくて直感的なシステムを作ることに注力しているフロントエンド開発者です。フリーランスのプロジェクトも承っていますので、もしご興味があれば、このサイトを通じてぜひご連絡ください。

仕事以外では、日本語（N4程度）を学んでいて、日本での留学を計画している37歳のオランダ人クリエイターです。空き時間には軽バンの修復に取り組んでおり、ゆっくりとした進歩と実用的なデザインを大切にしています。Bandcampにも音楽を投稿しているので、興味があればぜひ聴いてみてください。`,

    learningTitle: "現在学習中",
    learn1: "🇯🇵 日本語（N4レベル、没入を目指して）",
    learn2: "💻 フロントエンド開発（HTML / CSS / JavaScript）",
    learn3: "🛠️ DIYプロジェクト（キャンパーボックス作成、軽バン修復）",

    projectsTitle: "プロジェクト",
    proj1: "🚐 軽バン・キャンパーボックス計画",
    proj2: "📊 日本予算トラッカー",
    proj3: "🌐 このポートフォリオサイト",

    contactTitle: "連絡先",
    contact1: "📧 メールで連絡",
    contact2: "🐙 GitHub",

    footer: "© 2025 ランディ・ブーア 全著作権所有"
  }
};

toggleLanguageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ja" : "en";
  updateLanguage(currentLanguage);
  toggleLanguageButton.textContent = currentLanguage === "en" ? "EN | 日本語" : "日本語 | EN";
});

function updateLanguage(lang) {
  const t = translations[lang];

  document.getElementById("bio-title").textContent = t.bioTitle;
  document.getElementById("bio-text").textContent = t.bioText;

  document.getElementById("learning-title").textContent = t.learningTitle;
  document.getElementById("learn-1").textContent = t.learn1;
  document.getElementById("learn-2").textContent = t.learn2;
  document.getElementById("learn-3").textContent = t.learn3;

  document.getElementById("projects-title").textContent = t.projectsTitle;
  document.getElementById("proj-1").textContent = t.proj1;
  document.getElementById("proj-2").textContent = t.proj2;
  document.getElementById("proj-3").textContent = t.proj3;

  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-1").textContent = t.contact1;
  document.getElementById("contact-2").textContent = t.contact2;

  document.getElementById("footer-text").textContent = t.footer;
}
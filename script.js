// Function to toggle language
function toggleLanguage() {
    // Find the body element
    const body = document.body;
  
    // Toggle the class that changes the font for Japanese
    body.classList.toggle('japanese');
  
    // Check if Japanese is active
    const isJapanese = body.classList.contains('japanese');
  
    // Update the text content for translation
    const translations = {
      bio: {
        english: "Feel free to explore my work here—I’m a front-end developer focused on creating clean, intuitive systems that are a pleasure to use. I also take on freelance projects, so if you’re interested in collaborating, don’t hesitate to reach out through this website.",
        japanese: "ここで私の仕事を探してみてください—私は、使いやすいクリーンで直感的なシステムの作成に焦点を当てたフロントエンド開発者です。また、フリーランスのプロジェクトも受けているので、コラボレーションに興味がある場合は、ぜひこのウェブサイトを通じてご連絡ください。",
      },
      learning: {
        english: "🇯🇵 Japanese (N4 level, aiming for immersion)\n💻 Front-end Development (HTML / CSS / JavaScript)\n🛠️ DIY Projects (Camperbox Build, Kei Van Restoration)",
        japanese: "🇯🇵 日本語（N4レベル、浸透を目指して）\n💻 フロントエンド開発（HTML / CSS / JavaScript）\n🛠️ DIYプロジェクト（キャンパーボックス作成、軽自動車の修理）",
      },
      projects: {
        english: "🚐 Kei Camperbox Plan\n📊 Japan Budget Tracker\n🌐 This Portfolio Site",
        japanese: "🚐 軽自動車キャンパーボックス計画\n📊 日本予算トラッカー\n🌐 このポートフォリオサイト",
      },
      contact: {
        english: "📧 Email me | 🐙 GitHub",
        japanese: "📧 メールで連絡 | 🐙 GitHub",
      }
    };
  
    // Set the translation for the bio section
    document.getElementById("bio-text").innerHTML = isJapanese ? translations.bio.japanese : translations.bio.english;
    document.getElementById("learning-text").innerHTML = isJapanese ? translations.learning.japanese : translations.learning.english;
    document.getElementById("projects-text").innerHTML = isJapanese ? translations.projects.japanese : translations.projects.english;
    document.getElementById("contact-text").innerHTML = isJapanese ? translations.contact.japanese : translations.contact.english;
  }
  
  // Event listener for the toggle button
  document.getElementById("toggleLanguage").addEventListener("click", toggleLanguage);
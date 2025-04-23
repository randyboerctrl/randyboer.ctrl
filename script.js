let isJapanese = false;

function toggleLang() {
  isJapanese = !isJapanese;

  const en = document.querySelectorAll('.lang.en');
  const ja = document.querySelectorAll('.lang.ja');

  en.forEach(el => el.style.display = isJapanese ? 'none' : 'block');
  ja.forEach(el => el.style.display = isJapanese ? 'block' : 'none');
}
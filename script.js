document.getElementById('toggleLanguage').addEventListener('click', function () {
    const en = document.getElementById('bio-en');
    const jp = document.getElementById('bio-jp');
    if (en.style.display === 'none') {
      en.style.display = 'block';
      jp.style.display = 'none';
    } else {
      en.style.display = 'none';
      jp.style.display = 'block';
    }
  });
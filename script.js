function toggleTranslation() {
  const en = document.querySelectorAll('.en');
  const jp = document.querySelectorAll('.jp');

  en.forEach(el => el.classList.toggle('hidden'));
  jp.forEach(el => el.classList.toggle('hidden'));
}
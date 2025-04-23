function toggleTranslation() {
  const en = document.querySelectorAll('.en');
  const jp = document.querySelectorAll('.jp');

  en.forEach(e => e.classList.toggle('hidden'));
  jp.forEach(j => j.classList.toggle('hidden'));
}
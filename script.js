console.log("JavaScript loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Navigating to ${link.textContent}`);
    });
  });
});
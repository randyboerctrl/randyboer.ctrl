// Get the toggle button and set an initial state for language (English)
const toggleBtn = document.getElementById("toggleTranslate");
let isEnglish = true;

// Function to toggle between English and Japanese content
function toggleLanguage() {
  // Get the English and Japanese content blocks
  const contentEn = document.querySelectorAll(".content-en");
  const contentJa = document.querySelectorAll(".content-ja");

  // Loop through all content-en and content-ja blocks
  contentEn.forEach((el) => {
    el.style.display = isEnglish ? "block" : "none"; // Show or hide based on language state
  });
  contentJa.forEach((el) => {
    el.style.display = isEnglish ? "none" : "block"; // Show or hide based on language state
  });

  // Change the button text based on the current language
  toggleBtn.textContent = isEnglish ? "日本語" : "EN";  // Change to Japanese or English text
  isEnglish = !isEnglish;  // Toggle the language state
}

// Set up the event listener to trigger the language toggle when the button is clicked
toggleBtn.addEventListener("click", toggleLanguage);
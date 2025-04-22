// JavaScript to toggle between English and Japanese for Bio only
function toggleTranslation(blockId) {
    const textContainer = document.querySelector(`#${blockId}-text-container`);
    const englishText = textContainer.querySelector(`#${blockId}-text-english`);
    const japaneseText = textContainer.querySelector(`#${blockId}-text-japanese`);
    
    // Toggle visibility for English and Japanese text
    if (englishText && japaneseText) {
      if (englishText.style.display === "none") {
        englishText.style.display = "block";
        japaneseText.style.display = "none";
      } else {
        englishText.style.display = "none";
        japaneseText.style.display = "block";
      }
    }
  }
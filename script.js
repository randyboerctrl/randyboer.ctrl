// JavaScript to toggle between translation and original text
function toggleTranslation(blockId) {
    const textContainer = document.querySelector(`#${blockId}-text-container`);
    const textElement = textContainer.querySelector(`#${blockId}-text`);
    const translationElement = textContainer.querySelector(`#${blockId}-text-translation`);
    
    // Toggle visibility only for the text elements
    if (textElement && translationElement) {
      if (textElement.style.display === "none") {
        textElement.style.display = "block";
        translationElement.style.display = "none";
      } else {
        textElement.style.display = "none";
        translationElement.style.display = "block";
      }
    }
  }
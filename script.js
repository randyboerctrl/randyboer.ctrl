// JavaScript to toggle between translation and original text
function toggleTranslation(blockId) {
    const textElement = document.querySelector(`#${blockId}-text`);
    const translationElement = document.querySelector(`#${blockId}-text-translation`);
    
    // Toggle visibility
    if (textElement.style.display === "none") {
      textElement.style.display = "block";
      translationElement.style.display = "none";
    } else {
      textElement.style.display = "none";
      translationElement.style.display = "block";
    }
  }
document.getElementById('toggleLanguage').addEventListener('click', function() {
    const bioEn = document.getElementById('bio-en');
    const bioJp = document.getElementById('bio-jp');
  
    if (bioEn.style.display === "none") {
      bioEn.style.display = "block";
      bioJp.style.display = "none";
    } else {
      bioEn.style.display = "none";
      bioJp.style.display = "block";
    }
  });
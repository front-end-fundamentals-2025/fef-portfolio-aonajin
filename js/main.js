document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        backToTopButton.classList.add("show");
        backToTopButton.classList.remove("hide");
      } else {
        backToTopButton.classList.remove("show");
        backToTopButton.classList.add("hide");
      }
    });
  
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
//back to top

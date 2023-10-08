// Get references to the clickable elements and the elements to modify
const clickableElements = document.querySelectorAll(".parent");
const elements = document.querySelectorAll(".child");

// Looping through the clickable elements and add a click event listener to each
clickableElements.forEach((clickableElement) => {
  clickableElement.addEventListener("click", function() {
    // Find the corresponding child element to modify
    const element = this.querySelector(".child");

    // Add CSS properties or classes when the clickable element is clicked
    element.style.opacity = "1";
    element.style.height = "auto";
    element.style.border = "1px solid #8e95b4";
    element.style.borderRadius = "5px";
    element.style.color = "#2a2b34";
    element.style.padding = "1rem";
    element.style.marginBottom = "1rem";
    element.style.textAlign = "left";
    element.style.fontSize = "14px";


  });

  // Adding a blur event listener to each clickable element
  clickableElement.addEventListener("blur", function() {
    // Find the corresponding child element
    const element = this.querySelector(".child");

    // Reset or remove the CSS properties when the element loses focus
    element.style.opacity = "";
    element.style.height = "";
    element.style.border = "";
    element.style.borderRadius = "";
    element.style.color = "";
    element.style.padding = "";
    element.style.marginBottom = "";
    element.style.textAlign = "";
    element.style.fontSize = "";

  });
});

// Scrolling 

document.addEventListener('DOMContentLoaded', function () {
  const parentLinks = document.querySelectorAll('.parent');

  parentLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default behavior of the link

          // Find the <p> tag inside the clicked element
          const paragraph = link.querySelector('p');

          if (paragraph) {
              paragraph.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});

// Scroll to Top button

// script.js
const scrollToTopButton = document.getElementById("scrollButton");

// Show the button when the user scrolls down 200px from the top
window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" //Add smooth scrolling behavior
    });
});

// Get references to the clickable elements and the elements you want to modify
const clickableElements = document.querySelectorAll(".parent");
const elements = document.querySelectorAll(".child");

// Loop through the clickable elements and add a click event listener to each
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

  // Add a blur event listener to each clickable element
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


// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Function to wrap each line in <span> tags without duplication and preserve spaces
function wrapLinesInSpans(element) {
  const words = element.innerHTML.split(" ");
  let line = "";
  let linesHTML = "";

  words.forEach((word, index) => {
    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden"; // Hide span during measurement
    tempSpan.style.whiteSpace = "nowrap"; // Prevent automatic line wrapping
    tempSpan.textContent = line + word + " ";
    document.body.appendChild(tempSpan);

    // Check if adding this word exceeds the width
    if (tempSpan.offsetWidth > element.clientWidth && line) {
      // Wrap the current line in a span and start a new line
      linesHTML += `<span>${line.trim()}&nbsp;</span>`;
      line = word + " "; // Start the next line with the current word
    } else {
      // Otherwise, add the word to the current line
      line += word + " ";
    }

    document.body.removeChild(tempSpan); // Clean up temporary element

    // If it's the last word, add the remaining line as the final span
    if (index === words.length - 1) {
      linesHTML += `<span>${line.trim()}&nbsp;</span>`;
    }
  });

  element.innerHTML = linesHTML; // Replace paragraph with line-wrapped spans
}

// Select all paragraphs with the class .text-reveal
const paragraphs = document.querySelectorAll(".text-reveal");

// Loop over each paragraph and apply the line wrapping and animation
paragraphs.forEach((paragraph) => {
  wrapLinesInSpans(paragraph); // Wrap lines in spans

  // Apply GSAP scroll-based animation to each line
  paragraph.querySelectorAll("span").forEach((line) => {
    gsap.to(line, {
      scrollTrigger: {
        trigger: line,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
      },
      color: "#253439", // Target color
    });
  });
});

// ! Header color change if scrolled
window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 0) {
    header.classList.add("scrolled"); // Add the class on scroll
  } else {
    header.classList.remove("scrolled"); // Remove the class if back to top
  }
});

// About card reveal
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".slide-in-left", {
    origin: "left",
    distance: "100px",
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
  });

  ScrollReveal().reveal(".slide-in-right", {
    origin: "right",
    distance: "100px",
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
  });
  ScrollReveal().reveal(".slide-message", {
    origin: "right", // Message slides in from the right
    distance: "50px", // Distance of the slide animation
    duration: 500, // Animation duration in milliseconds
    easing: "ease-in-out", // Smooth animation
    opacity: 0, // Start with opacity 0
    reset: false, // Ensures the animation runs only once
  });

  ScrollReveal().reveal(".slide-in-left-name", {
    origin: "left",
    distance: "50px",
    duration: 800,
    easing: "ease-out",
    opacity: 0,
  });
});

// reviews
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".fade-section", {
    duration: 900,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
    opacity: 0,
    scale: 0.85,
    reset: true, // Animation can happen each time an element comes into view
  });
});

document.querySelectorAll(".review-card").forEach((card) => {
  card.addEventListener("click", () => {
    window.open(card.getAttribute("data-url"), "_blank");
  });
});

document.querySelector(".write-review-btn").addEventListener("click", () => {
  window.open("https://g.co/kgs/VnnVQeJ", "_blank");
});

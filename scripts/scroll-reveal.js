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
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      color: "#253439", // Target color
    });
  });
});

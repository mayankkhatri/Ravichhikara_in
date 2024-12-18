// Add an event listener for the send button
document.getElementById("send-button").addEventListener("click", function () {
  // Get the message input value
  const message = document.getElementById("message-input").value;

  // Define the phone number
  const phoneNumber = "917042131601";

  // Construct the WhatsApp API URL with the message
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  // Redirect the user to the WhatsApp URL
  window.location.href = whatsappURL;
});

//! Disclimer

// Check if the disclaimer has been accepted
if (sessionStorage.getItem("disclaimerAccepted")) {
  // If accepted, hide the modal and show the content
  document.getElementById("disclaimer-modal").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// Handle the "I Agree" button click
document.getElementById("agree-button").addEventListener("click", function () {
  // Save the acceptance in sessionStorage
  sessionStorage.setItem("disclaimerAccepted", "true");

  // Hide the disclaimer modal and show the main content
  document.getElementById("disclaimer-modal").style.display = "none";
  document.getElementById("main-content").style.display = "block";
});

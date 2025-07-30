// Elements
const beginButton = document.getElementById("beginButton");
const termsBox = document.getElementById("termsBox");
const agreeButton = document.getElementById("agreeButton");
const disagreeButton = document.getElementById("disagreeButton");

// Begin button click event
beginButton.addEventListener("click", () => {
  beginButton.style.opacity = "0"; // Fade out the "Begin" button
  beginButton.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    beginButton.style.display = "none"; // Hide the "Begin" button after fading out
    termsBox.classList.remove("hidden"); // Show the T&C box
    termsBox.style.display = "block"; // Ensure the T&C box is visible
  }, 500);
});

// Agree button click event - change background and display "Reveal my present" button
agreeButton.addEventListener("click", () => {
  // Change the background image
  document.body.style.backgroundImage = "url('bday.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  // Hide the terms box and buttons
  termsBox.style.display = "none";
  agreeButton.style.display = "none";
  disagreeButton.style.display = "none";

  // Create the "Reveal my present" button
  const revealButton = document.createElement("button");
  revealButton.textContent = "Reveal my present";
  revealButton.style.position = "absolute";
  revealButton.style.top = "50%";
  revealButton.style.left = "50%";
  revealButton.style.transform = "translate(-50%, -50%)";
  revealButton.style.padding = "1rem 2rem";
  revealButton.style.fontSize = "1.5rem";
  revealButton.style.backgroundColor = "#f7c8e0"; // Pastel pink
  revealButton.style.color = "#fff";
  revealButton.style.border = "none";
  revealButton.style.borderRadius = "10px";
  revealButton.style.cursor = "pointer";
  revealButton.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";

  // Add the "Reveal my present" button to the body
  document.body.appendChild(revealButton);

  // Add event listener to reveal the present
  revealButton.addEventListener("click", () => {
    // Remove the reveal button
    revealButton.style.display = "none";

    // Display the HAPPY BIRTHDAY text at the top of the page
    const birthdayText = document.createElement("h1");
    birthdayText.textContent = "WE GOING TO KESHI BISHHHHH... but you already knew that";
    birthdayText.style.position = "fixed";
    birthdayText.style.top = "20px";
    birthdayText.style.left = "50%";
    birthdayText.style.transform = "translateX(-50%)";
    birthdayText.style.color = "#fff";
    birthdayText.style.fontSize = "2rem";
    birthdayText.style.textAlign = "center";
    birthdayText.style.textShadow = "2px 2px 10px rgba(0, 0, 0, 0.7)";
    birthdayText.style.zIndex = "9999"; // Ensure it is on top of everything
    document.body.appendChild(birthdayText);
  });
});

// Disagree button click event - move outside of the scrollable box
disagreeButton.addEventListener("click", () => {
  // Generate random position within the viewport
  const randomX = Math.floor(Math.random() * (window.innerWidth - disagreeButton.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - disagreeButton.offsetHeight));

  // Apply the random position to the button
  disagreeButton.style.position = "fixed"; // Position relative to the viewport
  disagreeButton.style.left = `${randomX}px`;
  disagreeButton.style.top = `${randomY}px`;
});

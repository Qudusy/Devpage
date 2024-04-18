// JavaScript code for interactivity

// Function to handle click event on the quiz link
document.getElementById('quiz-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  alert('Take the Earth Day quiz!'); // Show an alert message
});

// Function to handle click event on the events link
document.getElementById('events-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  alert('Check out Earth Day events near you!'); // Show an alert message
});

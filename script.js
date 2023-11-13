// Add an event listener to the form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(event.target);

    // Your form processing logic here (you may want to send the data to a server)

    // Display the thank-you message
    showThankYouMessage();
});

// Function to display the thank-you message
function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.innerHTML = '<p>Thank you for your message! I will get back to you soon.</p>';
}

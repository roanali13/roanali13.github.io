
document.addEventListener("DOMContentLoaded", () => {

    // Find the heading on the About Me page
    const mainHeading = document.querySelector(".about-hero h1");

    // Only run if the heading exists
    if (!mainHeading) {
        return;
    }

    // Get the current hour
    const currentHour = new Date().getHours();

    let greeting;

    // Determine the appropriate greeting
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    // Update the page heading
    mainHeading.textContent = greeting + " Welcome to About Me!";

});

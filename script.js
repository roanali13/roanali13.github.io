document.addEventListener("DOMContentLoaded", () => {
    const mainHeading = document.querySelector(".about-main h1");
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    mainHeading.textContent = `${greeting} Welcome to About Me`;
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value;
        const feedback = document.getElementById("form-feedback");

        feedback.textContent =
            "Thank you, " + name + "! Your form was submitted successfully.";

        contactForm.reset();
    });
}

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Switch to Light Mode";
        } else {
            themeButton.textContent = "Switch to Dark Mode";
        }
    });
}

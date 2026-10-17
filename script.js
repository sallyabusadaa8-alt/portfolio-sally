document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
            const isLightMode = document.body.classList.contains("light-mode");

            if (isLightMode) {
                themeToggle.textContent = "☾";
                themeToggle.setAttribute("aria-label", "Switch to dark theme");
                themeToggle.setAttribute("title", "Switch to dark theme");
            } else {
                themeToggle.textContent = "☀";
                themeToggle.setAttribute("aria-label", "Switch to light theme");
                themeToggle.setAttribute("title", "Switch to light theme");
            }
        });
    }


    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            if (!name || !email || !message) {
                if (formMessage) {
                    formMessage.textContent = "Please fill in all fields.";
                    formMessage.className = "error";
                }
                return;
            }

            const recipient = "sallyabusadaa8@gmail.com";

            const subject = encodeURIComponent("Portfolio Contact - " + name);

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message
            );

            window.location.href =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;

            if (formMessage) {
                formMessage.textContent = "Opening your email app...";
                formMessage.className = "success";
            }
        });
    }
});
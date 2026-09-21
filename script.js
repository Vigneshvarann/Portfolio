
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      navToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        navToggle.textContent = "☰";
      });
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      successMessage.style.display = "block";
      contactForm.reset();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    });

    document.getElementById("year").textContent = new Date().getFullYear();

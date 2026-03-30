document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    disableMutationObserver: true,
  });

  const input = document.querySelector("#telefone");
  if (input) {
    window.intlTelInput(input, {
      initialCountry: "br",
      preferredCountries: ["br", "us", "pt"],
      autoPlaceholder: "off",
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
    });
  }

  // Scroll Linking Vanilla JS for Broken Grid with Throttling
  const wrapper = document.querySelector(".broken-grid-wrapper");
  const progressLine = document.getElementById("scrollProgress");

  if (wrapper && progressLine) {
    let scheduled = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!scheduled) {
          requestAnimationFrame(() => {
            const rect = wrapper.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            let scrollPercentage = (windowHeight / 1.5 - rect.top) / rect.height;

            if (scrollPercentage < 0) scrollPercentage = 0;
            if (scrollPercentage > 1) scrollPercentage = 1;

            progressLine.style.height = `${scrollPercentage * 100}%`;

            const steps = document.querySelectorAll(".bg-step");
            steps.forEach((step, index) => {
              const stepThreshold = index / steps.length;
              if (scrollPercentage > stepThreshold) {
                step.classList.add("step-active");
              } else {
                step.classList.remove("step-active");
              }
            });
            scheduled = false;
          });
          scheduled = true;
        }
      },
      { passive: true }
    );
  }

  // FAQ Interactivity
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Collapse all
      faqItems.forEach((faq) => {
        faq.classList.remove("active");
        faq.querySelector(".faq-icon").textContent = "+";
      });

      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        item.querySelector(".faq-icon").textContent = "−"; // minus symbol
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
    easing: 'ease-out-cubic',
    disableMutationObserver: true,
  });

  const input = document.querySelector("#telefone");
  let iti = null;
  if (input) {
    iti = window.intlTelInput(input, {
      initialCountry: "br",
      preferredCountries: ["br", "us", "pt"],
      autoPlaceholder: "off",
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
    });
  }

  // AJAX Form Submit -> Netlify Forms + Redirect to WhatsApp
  const WHATSAPP_NUMBER = "5511976974770";
  const form = document.querySelector("[data-form]");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        btn.innerHTML = "<span>Enviando...</span>";
        btn.disabled = true;

        // Atualizar o telefone com o formato internacional
        if (iti && input) {
          input.value = iti.getNumber();
        }

        const formData = new FormData(form);
        // Garantir o form-name explicitamente
        formData.set("form-name", "inscricao_full_v4");

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(function () {
             console.log("Sucesso no envio");
          })
          .catch(function (err) {
             console.log("Erro no fetch, mas redirecionando...", err);
          })
          .finally(function () {
             // Redirecionamento blindado - o mais importante para a experiência do usuário
             console.log("Forçando redirecionamento final...");
             window.location.assign("/pagina-obrigado/");
          });
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

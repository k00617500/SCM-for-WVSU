document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // Navbar scroll effect
    // -----------------------------
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 40);
    });
  
    // -----------------------------
    // Terminal typing animation
    // -----------------------------
    const terminal = document.querySelector(".shell-session.demo");
    if (terminal) {
      const text = terminal.textContent.trim();
      terminal.textContent = "";
      let i = 0;
      const type = () => {
        if (i < text.length) {
          terminal.textContent += text.charAt(i);
          i++;
          setTimeout(type, 35);
        }
      };
      type();
    }
  
    // -----------------------------
    // Reveal-on-scroll animation
    // -----------------------------
    const revealItems = document.querySelectorAll(
      ".feature__item, .hero__description, .hero__terminal"
    );
  
    const revealOnScroll = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.15 }
    );
  
    revealItems.forEach(item => revealOnScroll.observe(item));
  
    // -----------------------------
    // Smooth anchor scrolling
    // -----------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href"))?.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  

    const buttons = document.querySelectorAll(".js-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.target;
        const section = document.querySelector(`section[data-section="${target}"]`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
  
        // Move the "square" highlight to clicked button
        buttons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  

    const sections = document.querySelectorAll(".js-section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentTarget = entry.target.dataset.section;
            buttons.forEach(btn => {
              btn.classList.toggle("selected", btn.dataset.target === currentTarget);
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => observer.observe(section));
  
  });
  
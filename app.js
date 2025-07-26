// Jijin Jebanesh Portfolio – JavaScript (Fixed)
// ===============================================
(() => {
  /* ---------------- Data ---------------- */
  const data = {
    personal: {
      name: "Jijin Jebanesh",
      email: "jijinjebanesh@gmail.com",
      phone: "9543771191",
      location: "Kanyakumari, Tamil Nadu",
      profile: "Final-year Electronics and Communication Engineering student passionate about building real-world solutions through mobile and backend development. Skilled in Flutter, Node.js, and database systems with hands-on project and internship experience.",
      profileImage: "download.jpg"
    },
    links: {
      github: "jijinjebanesh",
      linkedin: "jijinjebanesh", 
      leetcode: "jijinjebanesh (270+ Problems)"
    },
    skills: {
      proficient: {
        title: "Proficient (5000+ lines)",
        skills: ["MySQL", "SQL", "Android", "Flutter", "Dart", "Node.js", "MongoDB"]
      },
      intermediate: {
        title: "Intermediate (1000+ lines)", 
        skills: ["Assembly", "HTML", "C", "CSS", "Python"]
      },
      familiar: {
        title: "Familiar",
        skills: ["Java", "C++", "MATLAB"]
      }
    },
    education: [
      {
        institution: "Francis Xavier Engineering College",
        degree: "BE in Electronics and Communication Engineering",
        duration: "Expected June 2026",
        grade: "CGPA: 7.5/10.0"
      },
      {
        institution: "Annai Matric HR Sec School",
        degree: "HSC – Computer Science", 
        duration: "May 2022",
        grade: "Percentage: 77.83"
      },
      {
        institution: "Balakrishna Matric HR Sec School",
        degree: "SSLC",
        duration: "May 2020", 
        grade: "Percentage: 89.6"
      }
    ],
    experience: [
      {
        company: "RISE10STEPS",
        role: "Mobile Development Intern",
        specialization: "FullStack Development",
        duration: "Jan 2025 – Apr 2024",
        location: "Tirunelveli, India",
        achievements: [
          "Built a feature-rich e-commerce application from scratch using Flutter",
          "Integrated backend with Node.js and MongoDB to handle authentication, cart, and orders",
          "Implemented wishlist, product filtering, responsive UI, and real-time updates",
          "Designed a clean, modern UI using Flutter, supporting both light and dark modes"
        ]
      },
      {
        company: "ZENANVIBE", 
        role: "Mobile Development Intern",
        specialization: "FullStack Development",
        duration: "July 2024 – August 2024",
        location: "Tirunelveli, India",
        achievements: [
          "Developed backend using Node.js and MySQL for a personalized expense management app",
          "Built features like expense tracking, reminders, invoice logging, and data optimization"
        ]
      },
      {
        company: "INSEATFOOD",
        role: "Mobile Development Intern", 
        specialization: "",
        duration: "Jan 2024 – Apr 2024",
        location: "Tirunelveli, India",
        achievements: [
          "Developed an intuitive Attendance mechanism, reducing user friction by 90%",
          "Built the frontend from scratch using Flutter and internal frameworks"
        ]
      }
    ],
    projects: [
      {
        name: "ATTENDZONE",
        description: "Attendance App",
        technologies: ["Flutter", "Node.js", "MySQL"],
        features: [
          "Secure IP and face-based attendance marking system integrated with Notion API",
          "Ensured real-time accuracy via robust testing and data handling"
        ]
      },
      {
        name: "FERTI OPTIMIZER", 
        description: "Real-Time Plant Monitoring",
        technologies: ["WatsonX.ai", "Llama3_405b"],
        features: [
          "Built an AI-powered system to analyze soil NPK data and suggest fertilizers",
          "Sent email alerts with real-time sensor warnings for agriculture optimization"
        ]
      }
    ],
    awards: [
      {
        year: "2024",
        achievement: "Top 25/50",
        organization: "M Kumarasamy College of Engineering"
      },
      {
        year: "2024", 
        achievement: "4th/50",
        organization: "TCE, Madurai"
      }
    ]
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Helpers ---------------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ---------------- Navigation & Smooth Scroll ---------------- */
  function setupNavigation() {
    const navToggle = $("#navToggle");
    const navLinksWrapper = $("#navLinks");

    // Navigation link handling with improved error checking
    const navLinks = $$(".nav__links a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const target = $(href);
        
        if (target) {
          // Close mobile menu
          navLinksWrapper.classList.remove("open");
          if (navToggle) {
            navToggle.setAttribute("aria-expanded", "false");
          }
          
          // Smooth scroll to target
          target.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }
      });
    });

    // Mobile navigation toggle
    if (navToggle && navLinksWrapper) {
      navToggle.addEventListener("click", () => {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!expanded));
        navLinksWrapper.classList.toggle("open");
      });
    }

    // Hero CTA scroll with improved targeting
    const ctaProjects = $("#ctaProjects");
    if (ctaProjects) {
      ctaProjects.addEventListener("click", (e) => {
        e.preventDefault();
        const projectsSection = $("#projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }
      });
    }
  }

  /* ---------------- Profile Image Handler ---------------- */
  function setupProfileImage() {
    const heroImg = $(".hero-profile-img");
    if (heroImg) {
      // Handle case where download.jpg might not exist
      heroImg.onerror = function() {
        // Fallback to a professional placeholder
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%232196F3'/%3E%3Ctext x='100' y='100' font-family='Arial, sans-serif' font-size='60' fill='white' text-anchor='middle' dominant-baseline='middle'%3EJJ%3C/text%3E%3C/svg%3E";
        this.alt = "JJ - Jijin Jebanesh";
      };
    }
  }

  /* ---------------- Typing Effect ---------------- */
  function setupTypingEffect() {
    const typingElement = $("#typing");
    if (!typingElement) return;

    const phrases = ["Flutter Developer", "Backend Enthusiast", "Problem Solver"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting && charIndex <= currentPhrase.length) {
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
      } else if (isDeleting && charIndex >= 0) {
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
      }

      if (!isDeleting && charIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(typeLoop, 1500);
        return;
      }
      
      if (isDeleting && charIndex === -1) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(typeLoop, speed);
    }

    if (!prefersReducedMotion) {
      typeLoop();
    }
  }

  /* ---------------- Skills Population ---------------- */
  function populateSkills() {
    const proficientContainer = $("#proficientSkills");
    const intermediateContainer = $("#intermediateSkills");
    const familiarContainer = $("#familiarSkills");

    if (proficientContainer) {
      data.skills.proficient.skills.forEach(skill => {
        const tag = document.createElement("div");
        tag.className = "skill-tag skill-tag--proficient";
        tag.textContent = skill;
        proficientContainer.appendChild(tag);
      });
    }

    if (intermediateContainer) {
      data.skills.intermediate.skills.forEach(skill => {
        const tag = document.createElement("div");
        tag.className = "skill-tag skill-tag--intermediate";
        tag.textContent = skill;
        intermediateContainer.appendChild(tag);
      });
    }

    if (familiarContainer) {
      data.skills.familiar.skills.forEach(skill => {
        const tag = document.createElement("div");
        tag.className = "skill-tag skill-tag--familiar";
        tag.textContent = skill;
        familiarContainer.appendChild(tag);
      });
    }
  }

  /* ---------------- Projects Population ---------------- */
  function populateProjects() {
    const projectsGrid = $("#projectsGrid");
    if (!projectsGrid) return;

    data.projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      
      const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
      ).join("");

      const features = project.features.map(feature => 
        `<li>${feature}</li>`
      ).join("");

      projectCard.innerHTML = `
        <h3 class="project-name">${project.name}</h3>
        <p class="project-type">${project.description}</p>
        <div class="project-description">
          <ul style="padding-left: var(--space-20); margin: 0;">
            ${features}
          </ul>
        </div>
        <div class="project-tech">
          ${techTags}
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  }

  /* ---------------- Experience Population ---------------- */
  function populateExperience() {
    const experienceContainer = $("#experienceContainer");
    if (!experienceContainer) return;

    data.experience.forEach(exp => {
      const experienceItem = document.createElement("div");
      experienceItem.className = "experience-item";
      
      const achievements = exp.achievements.map(achievement => 
        `<li>${achievement}</li>`
      ).join("");

      experienceItem.innerHTML = `
        <div class="experience-header">
          <h3 class="experience-role">${exp.role}</h3>
          <h4 class="experience-company">${exp.company}</h4>
          <div class="experience-details">
            <span>${exp.duration}</span>
            <span>${exp.location}</span>
            ${exp.specialization ? `<span>${exp.specialization}</span>` : ''}
          </div>
        </div>
        <ul class="experience-achievements">
          ${achievements}
        </ul>
      `;
      
      experienceContainer.appendChild(experienceItem);
    });
  }

  /* ---------------- Education Population ---------------- */
  function populateEducation() {
    const educationGrid = $("#educationGrid");
    if (!educationGrid) return;

    data.education.forEach(edu => {
      const educationCard = document.createElement("div");
      educationCard.className = "education-card";
      
      educationCard.innerHTML = `
        <h3 class="education-institution">${edu.institution}</h3>
        <p class="education-degree">${edu.degree}</p>
        <p class="education-duration">${edu.duration}</p>
        <p class="education-grade">${edu.grade}</p>
      `;
      
      educationGrid.appendChild(educationCard);
    });
  }

  /* ---------------- Awards Population ---------------- */
  function populateAwards() {
    const awardsGrid = $("#awardsGrid");
    if (!awardsGrid) return;

    data.awards.forEach(award => {
      const awardCard = document.createElement("div");
      awardCard.className = "award-card";
      
      awardCard.innerHTML = `
        <div class="award-year">${award.year}</div>
        <div class="award-achievement">${award.achievement}</div>
        <div class="award-organization">${award.organization}</div>
      `;
      
      awardsGrid.appendChild(awardCard);
    });
  }

  /* ---------------- Contact Form ---------------- */
  function setupContactForm() {
    const contactForm = $("#contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
      
      const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      const mailto = `mailto:${data.personal.email}?subject=${subject}&body=${body}`;
      
      window.location.href = mailto;
    });
  }

  /* ---------------- Theme Toggle ---------------- */
  function setupThemeToggle() {
    const themeToggle = $("#themeToggle");
    const themeIcon = $("#themeIcon");
    if (!themeToggle || !themeIcon) return;

    let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme();

    themeToggle.addEventListener("click", () => {
      darkMode = !darkMode;
      applyTheme();
    });

    function applyTheme() {
      document.documentElement.setAttribute(
        "data-color-scheme",
        darkMode ? "dark" : "light"
      );
      themeIcon.textContent = darkMode ? "☀️" : "🌙";
    }
  }

  /* ---------------- Scroll Animations ---------------- */
  function setupScrollAnimations() {
    if (prefersReducedMotion) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe cards and sections with a slight delay to ensure DOM is ready
    setTimeout(() => {
      const elementsToAnimate = $$(".project-card, .experience-item, .education-card, .award-card, .skill-category");
      elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
      });
    }, 200);
  }

  /* ---------------- Initialize Everything ---------------- */
  function init() {
    setupNavigation();
    setupProfileImage();
    setupTypingEffect();
    populateSkills();
    populateProjects();
    populateExperience();
    populateEducation();
    populateAwards();
    setupContactForm();
    setupThemeToggle();
    setupScrollAnimations();
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
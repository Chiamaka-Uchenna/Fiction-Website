//FOR THEME TOGGLE
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Get stored theme from localStorage
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  body.classList.toggle("dark-mode", storedTheme === "dark");
  themeIcon.classList.toggle("fa-moon", storedTheme !== "dark");
  themeIcon.classList.toggle("fa-sun", storedTheme === "dark");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");

  // Update icon
  themeIcon.classList.toggle("fa-moon", !isDarkMode);
  themeIcon.classList.toggle("fa-sun", isDarkMode);

  // Save theme to localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// FOR SIDEBAR
const navToggle = document.querySelector(".nav-toggle");
const closeSidebar = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");

navToggle.addEventListener("click", () => {
  sidebar.classList.add("show"); // Add show class to open the sidebar
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show"); // Remove show class to close the sidebar
});

// FOR RED BUBBLES
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Randomize size, position, and speed
  const size = Math.random() * 20 + 10;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * window.innerWidth + "px";
  bubble.style.top = Math.random() * window.innerHeight + "px";

  const speedX = Math.random() * 2 - 1;
  const speedY = Math.random() * 2 - 1;
  bubble.style.animation =
    "float " + (Math.random() * 10 + 5) + "s linear infinite";
  bubble.style.animationName = `float-${Math.random()}`;

  document.body.appendChild(bubble);

  // Remove bubble after a random time
  setTimeout(() => bubble.remove(), Math.random() * 5000 + 2000);
}

setInterval(createBubble, 500);

// FOR TESTIMONIALS SLIDING
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;
const testimonialCount = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialCount;
  showTestimonial(currentTestimonial);
}

// Initial display
showTestimonial(currentTestimonial);

// Change testimonials every 6 seconds (3 seconds pause in the middle)
setInterval(nextTestimonial, 6000);

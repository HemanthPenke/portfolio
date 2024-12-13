let sections = document.querySelectorAll(`section`);
let navLinks = document.querySelectorAll(`.nav .list a`);
let toggleCheckbox = document.getElementById('toggle');

// Calculate the navbar height dynamically
const navbar = document.querySelector('.nav');
const navbarHeight = navbar.offsetHeight;

// Function to scroll to the section accurately
function scrollToSection(link) {
  const targetId = link.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  // Calculate exact position with an offset to ensure proper alignment
  const targetPosition = targetSection.offsetTop - navbarHeight - 400; // Add a slight extra offset (10px)

  // Scroll to the section smoothly
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });

  // Collapse the navbar after clicking a link
  if (toggleCheckbox.checked) {
    toggleCheckbox.checked = false;
  }
}

// Highlight the active link based on scroll position
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - navbarHeight - 10; // Match the scroll offset logic
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.nav>.list>a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// Add click event listeners to navbar links
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection(link);
  });
});

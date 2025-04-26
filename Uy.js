let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;

    // Adjust the scroll position to consider a buffer (200px offset in this case)
    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      // Remove the active class from all links
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      // Add active class to the currently visible section's link
      navmenulink.classList.add('active');
    } else {
      // Remove active class when not in the current section
      navmenulink.classList.remove('active');
    }
  });
}

// Trigger the scrollspy when the page loads and on every scroll
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

//pang next sa projects cards

// === Project Navigation ===
const projectCards = document.querySelectorAll('.project-card');
let currentProject = 0;

function showProject(index) {
  projectCards.forEach((card, i) => {
    card.classList.remove('active-project', 'prev', 'next');
    if (i === index) {
      card.classList.add('active-project');
    } else if (i === (index - 1 + projectCards.length) % projectCards.length) {
      card.classList.add('prev');
    } else if (i === (index + 1) % projectCards.length) {
      card.classList.add('next');
    }
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentProject = (currentProject - 1 + projectCards.length) % projectCards.length;
  showProject(currentProject);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentProject = (currentProject + 1) % projectCards.length;
  showProject(currentProject);
});

// === Image Slideshow Per Card ===
projectCards.forEach((card) => {
  const images = card.querySelectorAll('.project-images img');
  let currentImageIndex = 0;

  function cycleImages() {
    // Remove active class from current image
    images[currentImageIndex].classList.remove('active');
    
    // Update index to next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Add active class to next image
    images[currentImageIndex].classList.add('active');
  }

  // Start the slideshow for this card
  if (images.length > 1) {
    setInterval(cycleImages, 3000);
  }
});

showProject(currentProject);

// Contact form handling
document.querySelector('#contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
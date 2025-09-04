
const hamburgerMenu = document.querySelector(".hamburgerMenu")
const ul = document.querySelector('.hide')





document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.2 }); // 20% visible hone par effect trigger

  sections.forEach((section) => {
    observer.observe(section);
  });
});


hamburgerMenu.addEventListener('click', (e) => {
  ul.classList.toggle('show')
})




//project section related Queries 

const liDropDown = document.querySelectorAll(".project-list-items");

liDropDown.forEach((li) => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();

    // Remove .accordion class from all
    liDropDown.forEach(item => {
      if (item !== li) {
        item.classList.remove('accordion');
      }
    });

    // Toggle current one
    li.classList.toggle('accordion');
  });
});

// Optional: close all on outside click
document.addEventListener('click', () => {
  liDropDown.forEach(item => {
    item.classList.remove('accordion');
  });
});



// Get all anchor links
const links = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target element to scroll to
    const target = document.querySelector(this.getAttribute('href'));

    // Scroll to the target element smoothly
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      duration: '10s',
    });
  });
});

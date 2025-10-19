methor 1

const hamburger = document.getElementById ("hamburger");
const navMenu = document.getElementById ("nav-menu");

hamburger.addEventListener ('click',()=> {
    navMenu.classList.toggle('active');
});

methor 2

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  // Toggle menu open/close
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent immediate close
    navMenu.classList.toggle('active');
  });

  // যদি মেনু open থাকে, বাইরে ক্লিক করলে বন্ধ হবে
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
      const clickedInsideMenu = navMenu.contains(e.target);
      const clickedHamburger = hamburger.contains(e.target);

      if (!clickedInsideMenu && !clickedHamburger) {
        navMenu.classList.remove('active');
      }
    }
  });

methor 3

  fetch("/components/navbar.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar").innerHTML = data;

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const closeBtn = document.getElementById("close-btn");

  // --- Hamburger click করলে toggle হবে ---
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // যাতে বাইরে ক্লিক detect না হয়
    navMenu.classList.toggle('active');
  });

  // --- Close বাটনে ক্লিক করলে বন্ধ হবে ---
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  }

  // --- বাইরে ক্লিক করলে বন্ধ হবে ---
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
      const clickedInsideMenu = navMenu.contains(e.target);
      const clickedHamburger = hamburger.contains(e.target);
      if (!clickedInsideMenu && !clickedHamburger) {
        navMenu.classList.remove('active');
      }
    }
  });
});


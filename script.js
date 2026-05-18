document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function changeActiveLink() {
    let index = sections.length;
    const scrollPos = window.scrollY + 160;

    while (--index && scrollPos < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));

    const currentId = index >= 0 ? sections[index].getAttribute("id") : "home";
    const activeLink = document.querySelector(`nav ul li a[href="#${currentId}"]`);
    if (activeLink) activeLink.classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else if (this.getAttribute("href") === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  const logo = document.querySelector(".logo a");
  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector('nav ul li a[href="#home"]').classList.add("active");
    });
  }
});
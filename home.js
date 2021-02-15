//footer year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//menu activation funcionality
const humbarger = document.getElementById("humbarger");
const nav = document.getElementById("navigation");
const social = document.getElementById("social_media");
const social_container = document.getElementById("links_container");

humbarger.addEventListener("click", () => {
  if (humbarger.classList.contains("active")) {
    humbarger.classList.remove("active");
    nav.classList.remove("active");
    social.classList.remove("active");
    social_container.classList.remove("active");
  } else {
    humbarger.classList.add("active");
    nav.classList.add("active");
    social.classList.add("active");
    social_container.classList.add("active");
  }
});

//scroll top button + point of showing it
myarrow = document.getElementById("arrow");

window.onscroll = function () {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    myarrow.style.display = "flex";
  } else {
    myarrow.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//portfolio websites images
function SetImages() {
  const grid = document.getElementsByClassName("web");
  const src = [
    "images/loopstudio.jpg",
    "images/manage.jpg",
    "images/bank.jpg",
    "images/reviews.jpg",
    "images/bookmark.jpg",
  ];

  for (let i = 0; i <= grid.length - 1; i++) {
    grid[i].style.backgroundImage = "url(" + src[i] + ")";
    grid[i].setAttribute("alt", "freelancer frontend developer portfolio work");
  }
}
SetImages();

//intersection Observer animate when  it enter view port

// animation for skills section

const SuperClass = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `one 1s  ease-in-out`;
      observer.unobserve(entry.target);
    } else {
      entry.target.style.animation = `none`;
    }
  });
});
SuperClass.forEach((skill) => {
  observer.observe(skill);
});

//animation for portfolio section

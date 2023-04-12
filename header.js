// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = 30;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let changeHeaderCounter = 0;

function changeHeaderBG() {
    const changingHeader = document.getElementById("header");
    const headerImages = ["image1", "image2", "image3"];

    if (changingHeader.classList.contains("image1")) {
       changingHeader.classList.remove("image1")
    }
    
    if (changingHeader.classList.contains("image2")) {
       changingHeader.classList.remove("image2")
    }
    
    if (changingHeader.classList.contains("image3")) {
       changingHeader.classList.remove("image3")
    }
    
    changingHeader.classList.add(headerImages[changeHeaderCounter])
		changeHeaderCounter++;

		if (changeHeaderCounter >= headerImages.length) {
      changeHeaderCounter = 0;
    }

	};

setInterval(changeHeaderBG, 7000);

window.addEventListener("scroll", () => {
  let scroll = scrollY;
  const section = document.querySelector("section");
  const overlay = document.querySelector(".overlay");
  
  section.style.backgroundSize = `${100 + (scroll * 0.1)}%`;
  overlay.style.background = `rgba(0, 0, 0, ${scroll * 1.7 / window.innerHeight})`
})
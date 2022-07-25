// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     console.log("www JS imported successfully!");
//   },
//   false
// );

const $hamburger = document.querySelector("#hamburger")
const $nav = document.querySelector("nav")
let isHamburgerOpen = false
let lockMenu = false

$hamburger.addEventListener( "click", () => {
    if (!isHamburgerOpen && !lockMenu){ //Déroule le menu
      $nav.style.paddingBottom = "300px"
      $nav.style.filter = "grayscale(75%)";
      isHamburgerOpen = true
    }else if (isHamburgerOpen && !lockMenu){ //Range le menu
      $nav.style.paddingBottom = "0px"
      $nav.style.filter = "";
      isHamburgerOpen = false
    }
  },
  false
);
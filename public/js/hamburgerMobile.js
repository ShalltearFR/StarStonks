const $hamburger = document.querySelector("#hamburger")
const $nav = document.querySelector("nav")
const $content = document.querySelector("#content")
const $footer = document.querySelector("footer")
let isHamburgerOpen = false
let lockMenu = false
let hamburgerInterval

$content.addEventListener("click", () => {
  closeMenu()
}, false);

$footer.addEventListener("click", () => {
  closeMenu()
}, false);

function closeMenu(){
  if (isHamburgerOpen) { // Ferme le menu si clic à l'exterieur du menu
    hamburgerInterval = setInterval(() => { hamburgerAnimation("close") }, 25)
    lockMenu = true
    isHamburgerOpen = false
  }
}

$hamburger.addEventListener("click", () => {
  if (!isHamburgerOpen && !lockMenu) { //Déroule le menu
    // $nav.style.filter = "grayscale(75%)";
    $nav.style.height = "65px"
    hamburgerInterval = setInterval(() => { hamburgerAnimation("open") }, 25)
    lockMenu = true
    isHamburgerOpen = true
  } else if (isHamburgerOpen && !lockMenu) { //Range le menu
    hamburgerInterval = setInterval(() => { hamburgerAnimation("close") }, 25)
    lockMenu = true
    isHamburgerOpen = false
  }
},
  false
);

function hamburgerAnimation(status) { // Animation d'ouverture/fermeture du menu
  const height = (function () {
    let toNumber = ""
    for (let i = 0; i < $nav.style.height.length - 2; i++) {
      toNumber = `${toNumber}${$nav.style.height[i]}`
    }
    return Number(toNumber)
  })()

  if (status === "open") { // Ouvre le menu
    if (height <= 415 - 35) {
      $nav.style.height = `${height + 35}px`
    } else {
      clearInterval(hamburgerInterval)
      $nav.style.borderBottomLeftRadius = "35px"
      $nav.style.borderBottomRightRadius = "35px"
      lockMenu = false
    }
  }

  if (status === "close") { // Ferme le menu
    if (height >= 65 + 35) {
      $nav.style.height = `${height - 35}px`
    } else {
      clearInterval(hamburgerInterval)
      $nav.style.filter = "";
      $nav.style.borderBottomLeftRadius = "10px"
      $nav.style.borderBottomRightRadius = "10px"
      lockMenu = false
    }
  }
}


// let isNavBackground = false
// document.addEventListener('scroll', (event) => {
//   // console.log(window.scrollY)
//   if (window.scrollY === 0){
//     if (isNavBackground){
//       $nav.setAttribute("id", "navTransparent")
//       isNavBackground = false
//       console.log("debut")
//     }
//   } else {
//     if (!isNavBackground){
//       $nav.setAttribute("id", "navBackground")
//       isNavBackground = true
//       console.log("deplacé")
//     }
//   }
// });

document.addEventListener(
  "DOMContentLoaded",
  () => {
    // console.log("www JS imported successfully!");
  },
  false
);

const $hamburger = document.querySelector("#hamburger")
const $nav = document.querySelector("nav")
let isHamburgerOpen = false
let lockMenu = false
let hamburgerInterval

$hamburger.addEventListener( "click", () => {
    if (!isHamburgerOpen && !lockMenu){ //Déroule le menu
      $nav.style.filter = "grayscale(75%)";
      $nav.style.height = "65px"
      hamburgerInterval = setInterval(()=>{hamburgerAnimation("open")},25)
      lockMenu = true
      isHamburgerOpen = true
    }else if (isHamburgerOpen && !lockMenu){ //Range le menu
      hamburgerInterval = setInterval(()=>{hamburgerAnimation("close")},25)
      lockMenu = true
      isHamburgerOpen = false
    }
  },
  false
);

function hamburgerAnimation(status){ // Animation d'ouverture/fermeture du menu
  const height = (function(){
    let toNumber = ""
    for (let i = 0; i < $nav.style.height.length - 2; i++){
      toNumber = `${toNumber}${$nav.style.height[i]}`
    }
    return Number(toNumber)
  })()

    if (status === "open"){ // Ouvre le menu
      if (height <= 450 - 35){
        $nav.style.height = `${height + 35}px`
      } else{
        clearInterval(hamburgerInterval)
        $nav.style.borderRadius = "35px"
        lockMenu = false
      }
    }

    if (status === "close"){ // Ferme le menu
      if (height >= 65 + 35){
        $nav.style.height = `${height - 35}px`
      } else{
        clearInterval(hamburgerInterval)
        $nav.style.filter = "";
        $nav.style.borderRadius = "0px"
        lockMenu = false
      }
    }
}


let isNavBackground = false
document.addEventListener('scroll', (event) => {
  // console.log(window.scrollY)
  if (window.scrollY === 0){
    if (isNavBackground){
      $nav.setAttribute("id", "navTransparent")
      isNavBackground = false
      console.log("debut")
    }
  } else {
    if (!isNavBackground){
      $nav.setAttribute("id", "navBackground")
      isNavBackground = true
      console.log("deplacé")
    }
  }
});
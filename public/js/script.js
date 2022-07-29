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
let hamburgerInterval

$hamburger.addEventListener( "click", () => {
    if (!isHamburgerOpen && !lockMenu){ //Déroule le menu
      //$nav.style.paddingBottom = "300px"
      $nav.style.filter = "grayscale(75%)";
      hamburgerInterval = setInterval(()=>{hamburgerAnimation("open")},35)
      lockMenu = true
      isHamburgerOpen = true
    }else if (isHamburgerOpen && !lockMenu){ //Range le menu
      //$nav.style.paddingBottom = "0px"
      $nav.style.filter = "";
      hamburgerInterval = setInterval(()=>{hamburgerAnimation("close")},35)
      lockMenu = true
      isHamburgerOpen = false
    }
  },
  false
);

function hamburgerAnimation(status){ // Animation d'ouverture/fermeture du menu
  const padding = (function(){
    let toNumber = ""
    for (let i = 0; i < $nav.style.height.length - 2; i++){
      toNumber = `${toNumber}${$nav.style.heigth[i]}`
    }
    return Number(toNumber)
  })()

    if (status === "open"){
      if (padding < 300){
        $nav.style.height = `${padding + 40}px`
      } else{
        clearInterval(hamburgerInterval)
        $nav.style.borderRadius = "35px"
        lockMenu = false
      }
    }

    if (status === "close"){
      if (padding > 65){
        $nav.style.height = `${padding - 40}px`
      } else{
        clearInterval(hamburgerInterval)
        $nav.style.borderRadius = "0px"
        lockMenu = false
      }
    }
  console.log(padding)
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
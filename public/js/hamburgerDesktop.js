const $hamburgerDesktop = document.querySelector("#hamburgerDesktop")
const $hamburgerDesktopOpen = document.querySelector("#hamburgerDesktopOpen")

let isOpen = false

$hamburgerDesktop.addEventListener("mouseover",(event)=>{
    if (!isOpen){
        isOpen = true
        $hamburgerDesktopOpen.style.display = "flex"
    }
}, true)

$content.addEventListener("mouseover", (event) =>{
    if(isOpen){
        isOpen = false
        $hamburgerDesktopOpen.style.display = "none"
    }
})

function menuDesktop(){
    
}
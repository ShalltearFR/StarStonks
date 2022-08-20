const $reservations = document.querySelectorAll(".reservations")

$reservations.forEach((el)=>{
    //el.style.height = "50px"
    const $reservationInformation = el.querySelector(".reservationInformation")

    $reservationInformation.style.display = "none"

    el.addEventListener("click", () => {
        
        if($reservationInformation.style.display === "none"){
            $reservationInformation.style.display = "flex"
            el.style.border= "solid 3px #ffdc00"
        } else{
            $reservationInformation.style.display = "none"
            el.style.border= ""
        }
      }, false);
})
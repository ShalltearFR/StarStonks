const $reservations = document.querySelectorAll(".reservations")

$reservations.forEach((el)=>{
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

function sortReservation(){
    //console.log(document.querySelector("#sortReservation").value)
    const value = document.querySelector("#sortOption").value
    window.location.assign(`/auth/reservations?sort=${value}`)

}
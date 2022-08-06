$button = document.querySelector("#sendResult")
$button.addEventListener("click", sendResult, false)

waitingSound = new Audio("https://res.cloudinary.com/shalltear/video/upload/v1659553383/Project%202/public/Star_Stonks_sonnerie2v2_g2ibaq.mp3")
buzzSound = new Audio("https://res.cloudinary.com/shalltear/video/upload/v1659779935/Project%202/public/error_ujoqvj.mp3")

$popUpWaiting = document.querySelector("#popUpWaiting")
$selectDestination = document.querySelector("#selectDestination")
$homePageInformation = document.querySelector("#homePageInformation")

function sendResult(){
    const from = document.querySelector("#from").value
    const to = document.querySelector("#to").value

    if (from === to){
        buzzSound.play()
        $homePageInformation.innerHTML = "Les planètes de depart et de destination sont les memes"
        return null
    }
    
    $selectDestination.style.display = "none"
    $popUpWaiting.style.display = "flex"
    waitingSound.play()

    setTimeout(()=>{
        window.location.assign(`/results?from=${from}&to=${to}`)
    },3000)
    //window.location.assign(`/results?from=${from}&to=${to}`);
}
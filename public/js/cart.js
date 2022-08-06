function deleteCart(){
    axios({
        method: 'DELETE',
        url: '/cart',
    })
    .then(() => {
        const $cartsData = document.querySelector("#cartsData")
        $cartsData.remove() // Suppression de la div

        let $div = document.createElement("div") // Creation de la div qui indiquera le message "Pas de panier"
        $div.setAttribute("id", "noTrip")
        $div.innerHTML = "Panier vide"

        const $cart = document.querySelector("#cart")
        $cart.appendChild($div) // Ajoute la div dans la page HTML
    })
    .catch(err => {
        console.log("erreur AXIOS :", err)
    });
}
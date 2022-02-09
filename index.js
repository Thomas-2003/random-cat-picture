const img = document.getElementById("cat-picture")
img.addEventListener("click", (e) => {
    const rdm = Math.random(); //generate variable with 0-1 random
    const xRdm = 350 + rdm * 50 //change random to be between 350.37 and 400.37
    const roundetxrdm = Math.floor(xRdm) // round down - convert float into full number .... 3.3333 => 3

    const rdm2 = Math.random()
    const yRdm = 400 + rdm2 * 50
    const roundetyrdm = Math.floor(yRdm)

    const newUrl = "https://placekitten.com/" + roundetxrdm + "/" + roundetyrdm
    img.src = newUrl
});

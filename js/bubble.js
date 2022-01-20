parentDiv.addEventListener("click", onClick)
childDiv.addEventListener("click", onClick)

function onClick(evt){
    //evt.stopPropagation();
    console.log("je suis à l'origine de l'émission de lévénement :",evt.currentTarget === evt.target)
}
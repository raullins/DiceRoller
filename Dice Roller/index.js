function rollDice(){

    const numOfDice = document.getElementById("numberOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const valor = Math.floor(Math.random() * 6) + 1;
        values.push(valor);
        images.push(`<img src="images/${valor}.png" alt="Dice${valor}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

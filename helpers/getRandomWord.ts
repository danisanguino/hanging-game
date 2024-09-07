const randomWords: string[] = ["ZAPATERO", "RAJOY", "ABASCAL", "IGLESIAS","MONTERO", "MONEDERO", "ECHENIQUE", "FEIJOO", "AZNAR", "GONZALEZ", "MONTESINOS"]

export function getRandomWord () {

    const randomIndex = Math.floor(Math.random() * randomWords.length);
    
    return randomWords[randomIndex]

}
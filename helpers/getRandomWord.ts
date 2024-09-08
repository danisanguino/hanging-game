const randomWords: string[] = [
  "Basketball",
  "Soccer",
  "Baseball",
  "Football",
  "Tennis",
  "Volleyball",
  "Cricket",
  "Swimming",
  "Boxing",
  "Rugby",
  "Golf",
  "Hockey",
  "Cycling",
  "Surfing",
  "Badminton",
  "Skate",
  "Wrestling"]

export function getRandomWord () {

    const randomIndex = Math.floor(Math.random() * randomWords.length);
    
    return randomWords[randomIndex].toUpperCase();

}


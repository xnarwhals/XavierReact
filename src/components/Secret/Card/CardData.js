

// Each card should have background 
// 
// Xavier's favorite
const CardData = [
   {
      id: "Selva",
      cardBaseImg: require("../../../assets/images/CardSelva.png"),
      rarities: ["1", "2", "3"],
      types: ["My Favorite ", "Stat"],
      promptsFavorite: ["Anime", "Animal", "Pokemon Game", "Dessert", "Programming Language", "Fruit" ],
      answersFavorite: ["Monogatari Series", "Narwhal", "Pokemon Emerald", "Donuts", "C++", "Apple"],
      promptsStatistic: ["Overwatch Hours Played", "Most Distance in a Day", "Game Systems Owned "],
      answersStatistic: ["2487", "42.69 Miles / 70,236 Steps", "16 systems"],

      answerIcons: {
         "Anime" : require("../../../assets/images/CardIcon.png"),
      }
   },
   {
      id: "Colorezz",
      cardBaseImg: require("../../../assets/images/CardSelva.png"),
      rarities: ["1", "2", "3"],
      types: ["My Favorite ", "Stat"],
      promptsFavorite: ["Pokemon", "Artstyle", "FPS Game", "Caffeine Drink", "Song", "Month"],
      answersFavorite: ["Samurott", "Toon Shaded", "Overwatch", "ZOA", "Lovers Rock", "December"],
      promptsStatistic: ["Pokemon Emerald Hours", "Pokemon Go Distance", "Max Consecutive Pushups"],
      answersStatistic: ["216", "11,623.4 km", "100+"],
   },
   {
      id: "VPVR",
      cardBaseImg: require("../../../assets/images/CardSelva.png"),
      rarities: ["1", "2", "3"],
      types: ["My Favorite ", "Stat"],
      promptsFavorite: ["Project", "Console", "Fast Food", "Exercise", "Historical Figure", "YouTube Channel"],
      answersFavorite: ["Apartment 510!", "PS4", "Angry Chickz", "Endless Walking!", "LebBron James", "Fireship"],
      promptsStatistic: ["Pokemon Sword Hours", "Animes Watched", "Ideal Caffeine Intake"],
      answersStatistic: ["624", "130", "200 mg"],
   }
]

export default CardData;
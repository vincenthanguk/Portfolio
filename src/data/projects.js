const projects = [
  {
    name: "Lights Out",
    techStack: "React.js, HTML/CSS",
    link: "https://lights-out-vincentmax.netlify.app/",
    image: "images/lightsout_thumbnail.jpg",
    description:
      "Lights Out game built with React.js. My biggest challenges in this project were designing a dynamic board with clickable tiles and managing state and event handlers throughout the application. Lights are toggled in a '+' shaped pattern, when the player clicks on a tile. The goal of the game is to switch off all the lights.",
  },
  {
    name: "Solvitur Ambulando",
    techStack: "JavaScript, HTML/CSS",
    link: "https://solvitur-ambulando.netlify.app/",
    image: "/images/solvitur_thumbnail.jpg",
    description:
      "A mindfulness application that allows users to log their personal walking journey on a map. In this project, I worked with the leaflet map library to display the user's location, as well as allowing interaction with the map. The DOM is manipulated purely with JavaScript, and user data is saved into the browser's local storage.  I used parcel to bundle the application in order to hide the API key via .env file. Location Services must be activated to use the application.",
  },
  {
    name: "McCune-Reischauer Converter",
    techStack: "JavaScript, HTML/CSS",
    link: "https://mccune-reischauer.netlify.app/",
    image: "images/mccune_thumbnail.jpg",
    description:
      "My first ever Web Application. This tool converts Korean writing into alphabetical letters according to the scientific McCune-Reischauer romanization system. It is written entirely in JavaScript and makes use of the Hangul.js module, which disassembles Korean syllable blocks into single letters. The single letters are then checked and converted according to their position within the word. The great number of possible combinations for each letter required careful structuring of if-statements and lengthy testing.",
  },
  {
    name: "Simply Do",
    techStack: "React.js, HTML/CSS",
    link: "https://simply-do.netlify.app/",
    image: "images/simplydo_thumbnail.jpg",
    description:
      "A simple Todo list built with React.js. Todo items can be entered, removed and modified. This project taught me the quirks of manipulating state in the React way, i.e. working with pure functions like .map(), .filter() and the rest/destructuring operator '...' .",
  },
];

export { projects };

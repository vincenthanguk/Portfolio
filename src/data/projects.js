const projects = [
  {
    name: "Vocabulazy",
    techStack: "React.js | Redux | HTML/CSS",
    link: "https://vocabulazy.netlify.app/",
    image: "images/vocabulazy_thumbnail.png",
    description:
      "Vocabulazy is a user-friendly vocabulary flashcard web application that enables users to create, edit, and delete custom flashcard decks for personalized language learning. Built with React and Redux, it features an engaging study mode for learning and provides insightful study performance statistics at a glance in the user profile. With its easy-to-navigate interface and convenient dark/light mode switch, Vocabulazy offers an enjoyable and effective learning experience.",
  },
  {
    name: "Vocabulazy API",
    techStack: "Node.js | Express | MongoDB | Mongoose | Passport",
    link: "https://github.com/vincenthanguk/Vocabulazy-API",
    image: "images/vocabulazy_api_thumbnail.png",
    description:
      "The Vocabulazy API is the backend for the Vocabulazy flashcard web application, built using Node.js, Express, MongoDB, and Passport for secure authentication. It provides a set of endpoints to manage user accounts and perform actions on decks, flashcards, and study sessions. The API enables users to create, edit, and delete flashcard decks, manage individual cards, and track study progress.",
  },
  {
    name: "Lights Out!",
    techStack: "React.js | HTML/CSS",
    link: "https://lights-out-vincentmax.netlify.app/",
    image: "images/lightsout_thumbnail.jpg",
    description:
      "Lights Out game built with React.js. My biggest challenges in this project were designing a dynamic board with clickable tiles and managing state and event handlers throughout the application. Lights are toggled in a '+' shaped pattern, when the player clicks on a tile. The goal of the game is to switch off all the lights.",
  },
  {
    name: "Solvitur Ambulando",
    techStack: "JavaScript | HTML/CSS",
    link: "https://solvitur-ambulando.netlify.app/",
    image: "/images/solvitur_thumbnail.jpg",
    description:
      "A mindfulness application that allows users to log their personal walking journey on a map. In this project, I worked with the leaflet map library to display the user's location, as well as allowing interaction with the map. The DOM is manipulated purely with JavaScript, and user data is saved into the browser's local storage. Location Services must be activated to use the application.",
  },
  {
    name: "McCune-Reischauer Converter",
    techStack: "JavaScript | HTML/CSS",
    link: "https://mccune-reischauer.netlify.app/",
    image: "images/mccune_thumbnail.jpg",
    description:
      "My first ever Web Application. This tool converts Korean writing into alphabetical letters according to the scientific McCune-Reischauer romanization system. It is written entirely in JavaScript and makes use of the Hangul.js module, which disassembles Korean syllable blocks into single letters. The single letters are then checked and converted according to their position within the word. The great number of possible combinations for each letter required careful structuring of if-statements and comprehensive testing.",
  },
  // {
  //   name: "Natours",
  //   techStack: "Node.js | Express | MongoDB | Mongoose",
  //   link: "http://natours-vincenthanguk.herokuapp.com/",
  //   image: "images/natours_thumbnail.png",
  //   description:
  //     "Complete tour booking API written in node.js. This project was my first dive into backend development. I deepened my understanding about RESTful APIs and MVC design patterns, how to model data and perform operations on it, how to implement user authentication using JSON Web Tokens and much more.",
  // },
  // {
  //   name: "Omnifood",
  //   techStack: "JavaScript | HTML/CSS",
  //   link: "https://omnifood-vincent.netlify.app/",
  //   image: "images/omnifood_thumbnail.png",
  //   description:
  //     "Stylish web page using modern CSS features. This project taught me rules and solid frameworks for web design. I learned how to do layouts with CSS grid and flexbox, as well as how to make a website responsive and optimized for smooth performance and accessibility.",
  // },
  // {
  //   name: "Simply Do",
  //   techStack: "React.js | HTML/CSS",
  //   link: "https://simply-do.netlify.app/",
  //   image: "images/simplydo_thumbnail.jpg",
  //   description:
  //     "A simple Todo list built with React.js. Todo items can be entered, removed and modified. This project taught me the quirks of manipulating state in the React way, i.e. working with pure functions like .map(), .filter() and the rest/destructuring operator '...' .",
  // },
];

export { projects };

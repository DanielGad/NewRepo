<<<<<<< HEAD
// Accessing Object Properties with Variables
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  const playerNumber = 16;
  const player = testObj[playerNumber];

  // Updating Object Properties
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog["name"] = "Happy Coder";

  // Add New Properties to a JavaScript Object
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog["bark"] = "woof";

  // Delete Properties from a JavaScript Object
  // Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;

  // Using Objects for Lookups
  // Setup
function phoneticLookup(val) {
    let result = "";
    const lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank",
    };
    result = lookup[val]
    return result;
  }
  
  phoneticLookup("charlie");

  // 
=======
// Accessing Object Properties with Variables
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  const playerNumber = 16;
  const player = testObj[playerNumber];

  // Updating Object Properties
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog["name"] = "Happy Coder";

  // Add New Properties to a JavaScript Object
  const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog["bark"] = "woof";

  // Delete Properties from a JavaScript Object
  // Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;

  // Using Objects for Lookups
  // Setup
function phoneticLookup(val) {
    let result = "";
    const lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank",
    };
    result = lookup[val]
    return result;
  }
  
  phoneticLookup("charlie");

  // 
>>>>>>> d9f626e139e78a6de8446b2e252f29ae8b92422b
  
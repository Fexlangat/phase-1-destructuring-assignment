
const farmAnimals = ['cow', 'horse', 'sheep', 'pig', 'chicken'];
const [moo, neigh, baa, oink, cluck] = farmAnimals;

const farmAnimalsTraditionalNames = ['cow', 'sheep', 'pig', 'chicken'];
const [bessie, dolly, babe, little] = farmAnimalsTraditionalNames;

const farmAnimalsColours = ['cow', 'sheep', 'pig'];
const [blackAndWhite, black, pink] = farmAnimalsColours;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Define variables with values for testing
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppetData = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: {
    song2: "Moving Right Along",
    song4: "I Hope That Something Better Comes Along"
  },
  nested: {
    nestedJob: "Host of The Muppet Show",
    nestedPartner: "Miss Piggy"
  }
};

// Destructuring assignment
const {
  moo: soundMoo,
  neigh: soundNeigh,
  baa: soundBaa,
  oink: soundOink,
  cluck: soundCluck
} = animalSounds;

const {
  bessie: nameBessie,
  dolly: nameDolly,
  babe: nameBabe,
  little: nameLittle
} = animalNames;

const {
  blackAndWhite: colorBlackAndWhite,
  black: colorBlack,
  pink: colorPink
} = animalColors;

const [r, o, y, g, b, indg, v] = rainbowColors;

const {
  muppetName,
  color,
  song,
  job,
  partner,
  songs: {
    song2: muppetSong2,
    song4: muppetSong4
  },
  nested: {
    nestedJob: nestedMuppetJob,
    nestedPartner: nestedMuppetPartner
  }
} = muppetData;

// Export variables for testing
module.exports = {
  soundMoo,
  soundNeigh,
  soundBaa,
  soundOink,
  soundCluck,
  nameBessie,
  nameDolly,
  nameBabe,
  nameLittle,
  colorBlackAndWhite,
  colorBlack,
  colorPink,
  r,
  o,
  y,
  g,
  b,
  indg,
  v,
  muppetName,
  color,
  song,
  job,
  partner,
  muppetSong2,
  muppetSong4,
  nestedMuppetJob,
  nestedMuppetPartner
};

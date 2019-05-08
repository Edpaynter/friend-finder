var friendsArray = [
  {
    name: "Ed",
    photo: "https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510_960_720.jpg",
    scores: [ 5, 5, 5, 5, 5]
  },
  {
    name: "Larry",
    photo: "https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510_960_720.jpg",
    scores: [ 2, 5, 5, 2, 1]
  },
  {
    name: "Bob",
    photo: "https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510_960_720.jpg",
    scores: [ 4, 2, 1, 1, 3]
  },
  {
    name: "John",
    photo: "https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510_960_720.jpg",
    scores: [ 3, 4, 5, 2, 2]
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

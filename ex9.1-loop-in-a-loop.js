const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];

for (let array of listOfNeighbours) {
  // let row = array;
  for (let country of array) {
    console.log(`Neighbour: ${country}`);
  }
}

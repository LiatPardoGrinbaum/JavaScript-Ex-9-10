const steps = (N) => {
  let stepString = "'";
  let num = N;
  for (i = 0; i < N; i++) {
    stepString += "#";
    for (j = num - 1; j > 0; j--) {
      stepString += " ";
    }
    num--;
    console.log(stepString + "'");
    stepString = stepString.replaceAll(" ", "");
  }
};

steps(5);

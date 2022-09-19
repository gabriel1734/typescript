enum Colors {
  Red,
  Green,
  Blue,
  yellow,
  pink,
  dark,
}

// console.log(Colors);
// console.log(Colors[1]);

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(1);

for (let i = 0; i < 50; i++) {
  //   console.log("for", i);
}

let i = 0;
while (i < 20) {
  //   console.log("while", i);
  i++;
}

i = 0;

do {
  //   console.log("do while", i);
  i++;
} while (i < 30);

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];

for (let masivIndex = 0; masivIndex < numbers.length; masivIndex++) {
  numbers[masivIndex];

  if (numbers[masivIndex] % 2) {
    // console.log("masivi indexit-", masivIndex, "kentia-", numbers[masivIndex]);
  } else {
    // console.log("masivi indexit-", masivIndex, "luwia-", numbers[masivIndex]);
  }
}

const currentDay = new Date().getDay();
console.log(currentDay);

switch (currentDay) {
  case 1:
    console.log("orshabati");
    break;
  case 2:
    console.log("samshabati");
    break;
  case 3:
    console.log("otxshabati");
    break;
  case 4:
    console.log("xutshabati");
    break;
  case 5:
    console.log("paraskevi");
    break;
  case 6:
    console.log("shabati");
    break;
  case 0:
    console.log("kvira");
    break;

  default:
    break;
}

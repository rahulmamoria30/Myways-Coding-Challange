var ph = prompt("Please enter your number");
// prompt();
// var ph = parseInt(x);
var sum = 0;
var i = 0;
while (i < 10) {
  sum += ph[i] - "0";
  i += 1;
}

for (var i = 1; i <= sum; i++) {
  if (i % 20 == 0) {
    console.log("FizzBuzz");
  } else if (i % 4 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

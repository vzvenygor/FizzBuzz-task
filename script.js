document.write('<h2>FizzBuzz</h2>');

function FizzBuzz(_arr) {
  for (let arr = 1; arr < 101; arr++) {
    if (arr % 3 === 0 && arr % 5 === 0) {
      document.write("FizzBuzz"+'<br>');
    } else if (arr % 3 === 0) {
      document.write("Fizz"+'<br>');
    } else  if (arr % 5 === 0) {
      document.write("Buzz"+'<br>');
    } else {
      document.write(arr+'<br>');
    }
  }
};
FizzBuzz(1, 100); 

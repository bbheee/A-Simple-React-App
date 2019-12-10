function square(x) {
  return x * x;
}
console.log(square(8));

const squareArrow = x => x * x;
/*const squareArrow = (x) => {
    return x * x;
};*/
console.log(squareArrow(5));

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("mike tom"));

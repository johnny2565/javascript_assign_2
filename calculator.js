const add = (num1, num2) => {
  let ans = 0;
  ans = Number.parseInt(num1) + Number.parseInt(num2);
  return ans;
};

const subtract = (num1, num2) => {
  let ans = 0;
  ans = Number.parseInt(num1) - Number.parseInt(num2);
  return ans;
};

const divide = (num1, num2) => {
  let ans = 0;
  ans = Number.parseInt(num1) / Number.parseInt(num2);
  return ans;
};

const multiply = (num1, num2) => {
  let ans = 0;
  ans = Number.parseInt(num1) * Number.parseInt(num2);
  return ans;
};

const calculator = (num1, num2, op) => {
  let result = "";
  if (num1 !== "" && num2 !== "" && op !== "") {
    switch (op) {
      case "add":
        result = add(num1, num2);
        console.log(result);
        break;

      case "min":
        result = subtract(num1, num2);
        console.log(result);
        break;

      case "div":
        result = divide(num1, num2);
        console.log(result);
        break;

      case "mul":
        result = multiply(num1, num2);
        console.log(result);
        break;

      default:
        console.log("The option you selected was an operator");
        break;
    }
  } else {
    console.log("Please provide the needed parameters");
  }
};

// const result = ;
calculator(12, 4, "min");

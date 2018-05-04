function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return(num1 - num2);
}

const calculate = (num1, num2, math) => {
    console.log(math(num1, num2));
}
calculate(20, 17, sub);
calculate(323479374, 323478999, sub);
calculate(12, 9, add);
calculate(50,175, add);
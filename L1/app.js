// Number , string, boolean
function add(num1, num2, num3, someText) {
    if (num3) {
        console.log("".concat(someText, ", ").concat(num1 + num2));
    }
    return num3;
}
var num1 = 5;
var num2 = 5;
var printNumber = true;
var someText = "this is some text";
var num3 = add(num1, num2, printNumber, someText);

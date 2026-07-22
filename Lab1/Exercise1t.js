//write a function a number between 0 to 9 and return in words.
const numToWords=(num)=>{
    switch(num){
        case 0: 
        return "Zero";
        case 1:
             return "one";
        case 2:
             return "two";
        case 3:
             return "Three";
        case 4:
             return "Four";
        case 5:
             return "Five";
        case 6:
             return "Six";
        case 7:
             return "Seven";
        case 8:
             return "Eight";
        case 9:
             return "Nine";
        default: return "Invalid Number";
    }
};
console.log(numToWords(7));
console.log(numToWords(3));
console.log(numToWords(4));

//creat another function that takes a numberand show in words with the help of two words only

const rollnum="2503201000180";
const digits = String(rollnum).split("");
console.log(digits);
let inwords = "";

digits.forEach((d) => {
      inwords +=" " +  numToWords(Number(d));
});
console.log(inwords);
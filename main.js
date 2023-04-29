
/* Learning Java Script*/


let color3 = 'Gray';
console.log(color3);
console.log(color3);
console.log(color3);
console.log(color3);

color3 = 'black'
console.log(color3);

let name1 = 'Ziad';  // Variable
console.log(name1);


const birthdate = 2001; // Constant
console.log(birthdate);

let namee = 'ziad' ;
let age = 30 ; 


/*Which type of data is stored*/

console.log(typeof namee);  
console.log(typeof age);



let result3 = 2 !== 3; // Boolean
console.log(result3);
console.log(typeof result3);

let Fmassage = 'learning about java script'; // String
console.log(Fmassage);
console.log(typeof Fmassage);

let Smassage = 123456789; // Number
console.log(Smassage);
console.log(typeof Smassage);

let lastW = 'lines';
let massage3 = `Leaving 
Space 
between 
${lastW}`;  // template literals
console.log(massage3);

let name2 ;//undefined
 console.log(name2);

let value = 6;  //Number
console.log(value);
console.log(typeof value);

let value2 = 3;  // Nan(Not a number)
console.log(value2 * 'Java');

let value3 = null; 
console.log(value3);     

let language = 'Java Script'; // Number of letters          
console.log(language.length);


/* merge between texts*/

let language1 = ' Java Script'; // 1st method
let language2 = 'Welcome to';

console.log(language2 + language1); 

let language3 = ' Java Script';  //2nd method
let language4 = 'Welcome to' + language3;

console.log(language4);


let language5 = 'javascript';  // Bracket notation
console.log(language5[0]);
console.log(language5[3]);
console.log(language5[4]);
console.log(language5[9]);

/* Arrays */  

const colors = ['red', 'green', 'blue'];  // Array
console.log(colors);

colors[2] = 'purple'; //update an array(changing coler)
console.log(colors);
console.log(colors.length);

console.log(colors.includes('green'));       // make sure if the color exists 
console.log(colors.includes('white'));


colors.unshift('yellow'); //adding a colour in the first of the array
console.log(colors);

            
const yellowColor = colors.shift(); //Deleting a colour in the first of the array and Saving the deleted value
console.log(colors);
console.log(yellowColor);

colors.push('black');   //adding a colour in the end of the array
console.log(colors);



const blackColer = colors.pop();  //Deleting a colour in the end of the array and Saving the deleted value
console.log(colors);
console.log(blackColer);

let color = 'black'; // Check if is it array or not 
console.log(Array.isArray(color));
console.log(Array.isArray(colors));

const valu5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //Arrays inside of array
console.log(valu5);

let massage = 'Welcome to javaScript';  // Split method
let result = massage.split(' ');
console.log(result);

let massage1 = ['Welcome', 'to', 'javaScript'];  // Join method
let result1 = massage1.join('@');
console.log(result1); 

/* Conditions */

let age1 = 12;
console.log('Sorry, you are not old enough to play this game.');


let age2 = 12;
if (age2 < 12) {
console.log('Sorry, you are not old enough to play this game.');
};

let age3 = 11;
if (age3 < 12) {
console.log('Sorry, you are not old enough to play this game.');
};

let age4 = 14;
if (age4 < 12){
console.log("Sorry, you are not old enough to play this game");
}
else{
console.log("Welcome to the game");  
}

let age5 = 10;
if (age5 < 12){
console.log("Sorry, you are not old enough to play this game");
}
else{
console.log("Welcome to the game");  
}

let number2 = -1;
if (number2 > 0) {
console.log('+');
}else if (number2 < 0) {
console.log('-');
}else {
console.log('Zero');
}

const colorss = ['red', 'gray', 'orange'];  //Switch & Default
let colorNumber = 3;

switch(colorNumber){
case 1:
    console.log(colorss[0]);
    break;

case 2:
     console.log(colorss[1]);
    break;

case 3:
    console.log(colorss[2]);
    break;

case 4:
       
case 5:
        console.log('black');
    break;
    
default:
    console.log('white');
    break;

}

/* Loop */

for (let i = 5; i > 0; i--) {
    console.log(i);
}

let number = 1;
while (number < 6) {
    console.log(number);
     number++;
}
// odd numbers
for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
}

for(let index = 1; index <= 10; index++){
    if(index % 2 == 0){
        console.log("Stop");
        break;
    }
    console.log(index);
}

/*functions*/
function printNumbers(){
console.log(1);
console.log(2);
console.log(3);
}

printNumbers();

function printNumbers1(yh){    //loop
   for(let i = 1; i <= yh; i++){
    console.log(i);
   }
    }
printNumbers1(9);

function add(FirstNumber, SecoundNumber){      //add function
    console.log(FirstNumber + SecoundNumber);
}

add(5,10);
add('Just ', 'Testing');

function add1(FirstNumber, SecoundNumber){
    return FirstNumber + SecoundNumber;
}
 add1(2, 10);
printNumbers1(add1(2, 10));


function printYourName(name) {
    return "Your name is " + name
}
let functionOutput = printYourName("Reem")
console.log(functionOutput)













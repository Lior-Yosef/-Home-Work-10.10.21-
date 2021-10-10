

// mission number 1 




// function printToLog() {

//     let numbers = document.getElementById("numbers");

//     let some = Number(prompt("give me a number"));
//     let numberArray = [];

//     while (some != 0) {
//         some = Number(prompt("give me a number"));
//         numberArray.push(some)

//     }
//     console.log(numberArray);

//     if (some == 0) {
//         console.log(Math.max(...numberArray));
//         console.log(Math.min(...numberArray));


//     }


// }
// printToLog()

// ******************************** !




// mission number 2


// let contener=document.getElementById("contener");

// let array=[]
// let newArray=[]

// function printNumber(){
//     for (let i = 0; i < 10; i++) {
//         let numbers= prompt("give me a ten number");

//         array.push(numbers);
//     }
//     checkNewArray()


// }
// printNumber()

// function checkNewArray() {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]%2==0){
//             newArray.push(array[i])
//         }
//         contener.innerText=newArray

//     }
// }

// ******************************** !




// mission number 3

// let some=prompt("give me a number");
// let array=[]


// function checkTheNumber() {

//     let number=0
//     while (number <100){
//        let newNumber= Math.floor(Math.random() * 100);
//         number++
//         array.push(newNumber)
//     }
//     console.log(array);

//     for (let i = 0; i < array.length; i++) {
//        if (array[i]==some) {
//            alert("the number is fund")

//        }
//        else{
//            alert("number not a found")
//        }

//     }

// }
// checkTheNumber()



// ******************************** !


// mission number 4 

// let LettersArray=["a","c","x","j","l"];

// function printMessuage() {
//     let userName=prompt("enter your name:");

//     if (userName.match("a")) {
//         console.log("nice");

//     } else if (userName.match("z")){
//         console.log("GOOD");

//     } else {
//         console.log("not a found");
//     }


// }
// printMessuage()

// ******************************** !


// mission number 5

// function printToLog() {
//     for (let i = 0; i <100; i++) {
//         if (i%3==0) {
//             console.log(i+ " "+"fizz");
//             console.log(i+ " "+"fizzbuzz");
//         }
//         if (i%5==0){
//             console.log(i+ " "+ "buzz");
//             console.log(i+ " "+"fizzbuzz");

//         }
//     }
// }
// printToLog()

// ******************************** !




// mission lops number 1 

// function printToLog() {
//     const Building= {
//         width:50,
//         height:100,
//         SeveralFloors:5,
//         NumberApartments:3

//     }
//     for (const key in Building){
//         console.log(`${key}: ${Building[key]}`);
//     }

// }
// printToLog()

// ******************************** !



// mission lops number 2

// function printToLog() {

//     const cars = [
//         {
//             model:"tesla",
//             color:"black",
//             price:180000
//         },
//         {
//             model:"Mercedes-Maybach",
//             color:"white",
//             price:560000
//         },
//         {
//             model:"BMW",
//             color:"red",
//             price:320000
//         }
//     ];

//    cars.forEach((items) => {
//        for (const key in items ){
//            console.log(`${key} ${items[key]}`);
//        }
//    });

//     }

// printToLog()

// ******************************** !

//  mission lops number 3

// function printToLog() {

//     const Building = [
//         {
//             width: 50,
//             height: 100,
//             SeveralFloors: 5,
//             NumberApartments: 3

//         },
//         {
//             width: 50,
//             height: 100,
//             SeveralFloors: 52,
//             NumberApartments: 3

//         },
//         {
//             width: 50,
//             height: 100,
//             SeveralFloors: 60,
//             NumberApartments: 3

//         }
//     ];

//     Building.forEach(items => {
//         for (const key in items){
//             if (items.SeveralFloors>50) {
//                 console.log(`${key} ${items[key]}`);
//             }
//         }
//     });

// }
// printToLog()

// ******************************** !



// mission class number 1 



// class professor {
//     firstName;
//     lastName;
//     payForHours;
//     hoursWeeks;
//     PhoneNumber;
// }

// ******************************** !



// mission class number 2 

// class professor {
//     firstName;
//     lastName;
//     payForHours;
//     hoursWeeks;
//     PhoneNumber;

//     constructor(nameFromUser,lastFromUser,payFromUser,hoursFromUser,phoneFromUser){
//         this.firstName=nameFromUser;
//         this.lastName=lastFromUser;
//         this.payForHours=payFromUser;
//         this.hoursWeeks=hoursFromUser;
//         this.PhoneNumber=phoneFromUser
//     }

// }

// ******************************** !

// mission class number 3 

class professor {
    firstName;
    lastName;
    payForHours;
    hoursWeeks;
    PhoneNumber;

    constructor(nameFromUser,lastFromUser,payFromUser,hoursFromUser,phoneFromUser){
        this.firstName=nameFromUser;
        this.lastName=lastFromUser;
        this.payForHours=payFromUser;
        this.hoursWeeks=hoursFromUser;
        this.PhoneNumber=phoneFromUser
    }

}

const lior= new professor ("lior","yosef",53,455,05477);
const dan = new professor("dan","aibinder",40,30,050576);

// ******************************** !










// mission number 1 

// ******************************** !
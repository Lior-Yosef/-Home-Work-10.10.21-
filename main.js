

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

// mission number 6

let numbers = document.getElementsByClassName("input");
let btn = document.getElementById("submit");


btn.onclick = () => {

    let inputNumbers = [];
    let randomNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let userNumber = Number(numbers[i].value);

        if (userNumber < 1 || userNumber > 100 || inputNumbers.indexOf(userNumber) != -1) {
            alert(`try again :${userNumber}`);
            return;
        }
        else {
            inputNumbers.push(userNumber)
        }
    }

    while(randomNumbers.length < 50) {
        let num = Math.floor(Math.random() * 100) + 1;
        
        if (randomNumbers.indexOf(num) == -1) {
            
            randomNumbers.push(num);
        }

    }

    let counter = 0;

    for (let i = 0; i < inputNumbers.length; i++) {

        if (randomNumbers.indexOf(inputNumbers[i]) != -1) {
            counter++
            console.log(inputNumbers[i]);
        }
    }

    console.log(randomNumbers);
    alert("all fine");

    alert(`you get ${counter} points`);

}















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

// const lior= new professor ("lior","yosef",53,455,05477);
// const dan = new professor("dan","aibinder",40,30,050576);

// ******************************** !


//  mission class number 4 

//  class professor {
//      firstName;
//      lastName;
//      payForHours;
//      hoursWeeks;
//      PhoneNumber;

//      constructor(nameFromUser,lastFromUser,payFromUser,hoursFromUser,phoneFromUser){
//          this.firstName=nameFromUser;
//          this.lastName=lastFromUser;
//          this.payForHours=payFromUser;
//          this.hoursWeeks=hoursFromUser;
//          this.PhoneNumber=phoneFromUser
//      }

//  }

//  const lior= new professor ("lior","yosef",53,455,05477);
//  const dan = new professor("dan","aibinder",40,30,050576);

//  function printToLog() {

//     for (const key in lior) {
//         console.log(`${key} ${lior[key]}`);
//     }

//  }
//  printToLog()



// ******************************** !



// mission number 7+8 

// let firstName = document.getElementById("first");
// let lastName = document.getElementById("last");
// let pay = document.getElementById("pay");
// let hours = document.getElementById("hours");
// let phone = document.getElementById("phone");
// let btn = document.getElementById("btn");
// let contener = document.getElementById("contener");
// let table = document.getElementById("table");


// class professor {
//     firstName;
//     lastName;
//     payForHours;
//     hoursWeeks;
//     PhoneNumber;

//     constructor(nameFromUser, lastFromUser, payFromUser, hoursFromUser, phoneFromUser) {
//         this.firstName = nameFromUser;
//         this.lastName = lastFromUser;
//         this.payForHours = payFromUser;
//         this.hoursWeeks = hoursFromUser;
//         this.PhoneNumber = phoneFromUser;
//     }

// }

// function printToLog() {
//     btn.onclick = () => {
//         let professor1 = new professor(firstName.value, lastName.value, pay.value, hours.value, phone.value);

//         // console.log(professor1);
//         // contener.innerHTML = `${professor1.firstName} <br> ${professor1.lastName} <br> ${professor1.payForHours} <br> ${professor1.hoursWeeks} <br> ${professor1.PhoneNumber} <br>   `

//         table.innerHTML= `<tr> <td>${professor1.firstName} </td> <td>${professor1.lastName} </td> <td>${professor1.payForHours} </td> <td> ${professor1.hoursWeeks}</td> <td> ${professor1.PhoneNumber}</td> <td> </td></tr>`
//     }

// }
// printToLog()

// ******************************** !
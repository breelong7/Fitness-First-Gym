'use strict';
// // eslint-disable-next-line strict
// var username;
// console.log(username);

// username = 'Bree';
// console.log(username);

var username = prompt("What is your name?");

document.write("<p><h1>Hi " + username + ", welcome to our gym!</h1></p>");

// var wantsToAdopt = prompt ( 'Do you want to meet your best friend today?');

// if (wantsToAdopt === 'yes') {
//   console.log('Hooray! Pick one (or more.');
// } else {
//   console.log('Please spread the word about Fitness First Gym');
// }

// var fitnessGoals = prompt ( 'Would you rather gain muscle or tone?');

// if (fitnessGoals === 'gain muscle') {
//   document.write('<p><h1>If you want to gain muscle, check out our trainer Jared. <a href="#Jared">Click here to view Jareds bio</a></h1></p>');
// } else {
//   document.write('<p><h1>If you want to tone, Isabelle or Tommy would be great trainer options for you.</h1></p>');
// }

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '<h3/>');

// input: package, payment, location
// work: collect data
// output: present summary of data


// gold package, cash, Tacoma
// <p>You have selected our gold package, paying with cash, and visiting our Tacoma location</p>

function createNewMember(userPackage, userPayment, userLocation) {
  var newUser = '<p>You have selected our ' + userPackage + ', paying with ' + userPayment + ', and visiting our ' + userLocation + ' location</p>';
  return newUser;


}

var wantsToJoin = prompt ('Do you want to become a member of our gym?');

if (wantsToJoin === 'yes') {
  var userPackage = prompt ('Which package would you like to select?');
  var userPayment = prompt ('How will you be paying?');
  var userLocation = prompt ('Which location would you like to visit?');

  var html = createNewMember(userPackage, userPayment, userLocation);

  document.write(html);
} else {
  document.write('Visit us for a free session!');
}



function createNewUser(userName, userAge, userGoal) {
  var newUser = '<p>Your additional account holders name is ' + userName + ', age is ' + userAge + ', and fitness goal is ' + userGoal + ' location</p>';
  return newUser;


}

while (wantsToJoin !== 'yes' && wantsToJoin !== 'no')  {
  wantsToJoin = prompt('Do you want to join our gym today?');
}

// if (wantsToJoin === 'yes') {
//   var numberOfUsers = prompt('How many account holders would you like to add?');

//   for (numberOfUsers; numberOfUsers > 0; numberOfUsers--) {
//     var newUser = {};
//     var userName = prompt('What is the name of the additional account holder?');
//     var userAge = prompt('What is the age of the additional account holder?');
//     var userGoal = prompt('What is the fitness goal of the additional account holder?');

//     var htmltoo = createNewUser(userName, userAge, userGoal);

//     document.write(htmltoo);
//   }




if (wantsToJoin === 'yes') {
  var numberOfUsers = prompt('How many account holders would you like to add?');
  var userList = [];

  for (numberOfUsers; numberOfUsers > 0; numberOfUsers--) {
    var newUser = {};
    newUser.name = prompt('What is the name of the additional account holder?');
    newUser.age = prompt('What is the age of the additional account holder?');
    newUser.goal = prompt('What is the fitness goal of the additional account holder?');

    newUser.html = createNewUser(newUser.name, newUser.age, newUser.goal);

    userList.push(newUser);
    console.log(userList);
    document.write(newUser.html);
  }


// List - multiples of the same thing
{/* <ul>
  <li>bacon</li>
  <li>strawberries</li>
  <li>orange juice</li>
  <li>champagne</li>
</ul> */}

// var brunchShoppingList = ['bacon', 'strawberries', 'orange juice', 'champagne'];
// console.log(brunchShoppingList);

// brunchShoppingList.push('fried chicken');
// brunchShoppingList.pop('bacon');

// console.log(brunchShoppingList[0]);

// for (var index = 0; index < brunchShoppingList.length; index++ ) {
//   console.log(brunchShoppingList[index]);

}


// // Object

// var cat1 = {
//   name: 'Amelia',
//   age: 1,
//   hobbies: 'chasing her brother',
// };

// // call the function
// console.log(cat1.name);
// cat1.speak();



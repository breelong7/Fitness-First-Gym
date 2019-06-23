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

var fitnessGoals = prompt ( 'Would you rather gain muscle or tone?');

if (fitnessGoals === 'gain muscle') {
  document.write('<p><h1>If you want to gain muscle, check out our trainer Jared. <a href="#Jared">Click here to view Jareds bio</a></h1></p>');
} else {
  document.write('<p><h1>If you want to tone, Isabelle or Tommy would be great trainer options for you.</h1></p>');
}


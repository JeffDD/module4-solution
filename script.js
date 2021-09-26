// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// Addition to the regular requirements
function getGreeting(firstName) {
  if (firstName.charAt(0).toLowerCase() === "j") {
    return byeSpeaker.speakSimple(firstName);
  } else {
    return helloSpeaker.speakSimple(firstName);
  }
}

// Bonus optional
// reduce an array of greetings by speak word
function getGreetingsBySpeakWord(speakWord, greetings) {
  return greetings.reduce((accumulator, currentValue) => {
    if (currentValue.toLowerCase().startsWith(speakWord.toLowerCase())) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  for (let firstName of names) {
    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = firstName.charAt(0).toLowerCase();

    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter === "j") {
      byeSpeaker.speak(firstName);
    } else {
      helloSpeaker.speak(firstName);
    }
  }

  // Addition to the regular requirements
  const greetings = names.map(getGreeting);
  for (const greeting of greetings) {
    console.log(greeting);
  }

  // Bonus/Optional
  // call function to get arrays that contain the speak word
  const helloGreetings = getGreetingsBySpeakWord("Hello", greetings);
  const goodbyeGreetings = getGreetingsBySpeakWord("Good Bye", greetings);

  // print hello greetings
  for (const greeting of helloGreetings) {
    console.log(greeting);
  }

  // print goodbye greetings
  for (const greeting of goodbyeGreetings) {
    console.log(greeting);
  }
})();

// var shape="circle"; 
var topics=['HTML', 'CSS', 'Git', 'Javascript'];
// console.log(topics);
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
// var studentInfo = ["Sean", 32, true];
// console.log('Student Info:', studentInfo);

// var shapes = ["triangle", "square", "pentagon", "circle"];
// console.log(shapes[0]);
function listTopics() {
   for(var x=0; x<topics.length; x++) {
      console.log(topics[x]);
    }
}


function selectTopic() {
   if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
     } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
     } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
     } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
     } else {
      console.log('Please try again!');
     }

}
console.log('topics we learned through the prework:');
listTopics();
console.log('which topic should we study first?');
selectTopic();
//Math.floor() and Math.random() are both properties of JavaScript's built-in Math object 
// that can be used together to generate a random number.


/* 
Conditional: If (a plate is fancy) {
   put it on the top shelf
 } else if (a plate is plain) {
   put it on the bottom shelf
 }  else if (a plate is cracked) {
   put it in the trash
 }

 
 if (condition) {
 // block of code to be executed if condition is truthy
}

if (first condition) {
   // block of code to be executed if first condition is truthy
} else if (second condition) {
   // block of code to be executed if second condition is truthy
}
 
if (0) {
   console.log("I'm 0!")
} else if (null) {
   console.log("I'm null!")
} else if (true) {
   console.log("I'm true!")
}
 
 */
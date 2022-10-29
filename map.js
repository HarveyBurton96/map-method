  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num*2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num*2;
}

const mapresults = nums.map(multByTwo);
console.log(mapresults);

// Simplified w/ map()
const simplifed = nums.map(function (num) { return num*2});
console.log(simplifed);


// Simplfied w/ map() + arrow function
const simplifedmap = nums.map(num => num*2);
console.log(simplifedmap);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentonject = students.map(student => [student.name, student.id]);
console.log(studentonject);
/**
 * 1
 * Write a function to return the keys of a  object.
 *
 * example output: name,sclass,rollno
 */
const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

function foo(obj){
  console.log(Object.keys(obj));
  console.log(Object.entries(obj));
}
//foo(student);
/**
 * 2
 * Write a function to delete the rollno property from the following object.
 * Print the object before AND after deleting the property.
 */
function deleteRollNoKey(obj){
  console.log(obj);
  obj['rollno'] = undefined;
  delete obj.rollno;
  console.log(obj);

}
//deleteRollNoKey(student);

/**
 * 3
 *
 * Write a function to get the length of a  object.
 */
function lengthOfObject(obj){
  let counter=0;
  for(let i in obj){ //this is for OBJECTS!
    counter++;
    //console.log(i + ',');
  }
  return counter;
  //return Object.keys(obj).length;
}
//console.log(lengthOfObject(student));
/**
 * 4
 *
 * Write a  function to print the data or each book on a single line (i.e. display book name, author name and reading status) of the following books.
 */

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

function printLibrary(arr){

  for( let x of arr){
    console.log(`${x.title}, ${x.author}, ${x.readingStatus}`);
  }
}
//printLibrary(library);

function mock(arr){
  let x={};
  for(let i of arr){
    //how do i add more than 1 object to an object?!
  }
}
/**
 * 5
 *
 * Write a function given the radius of a circle
 * to calculate and return the area and perimeter of a circle.
 *
 */
function areaAndPerimeter(radius){
  let area=0;
  let perimeter=0;
  area= Math.PI * (radius **2) //A = PI * r^2
  perimeter= 2 * Math.PI * radius ///P = 2* PI * r
  return `Area: ${area} \nPerimeter: ${perimeter}`;
}
//console.log(areaAndPerimeter(5));
/**
 * 6
 * 
 * Write a  function to return a sorted array of objects by the libraryID
 * 
 * example output:
    [
      {
        author: "Bill Gates",
        libraryID: 1254,
        title: "The Road Ahead"
      },
      {
        author: "Suzanne Collins",
        libraryID: 3245,
        title: "Mockingjay: The Final Book of The Hunger Games"
      },
      {
        author: "Walter Isaacson",
        libraryID: 4264,
        title: "Steve Jobs"
      },
    ]
*/

let mockObject =[
  {
    author: "Suzanne Collins",
    libraryID: 3245,
    title: "Mockingjay: The Final Book of The Hunger Games"
  },
  {
    author: "Walter Isaacson",
    libraryID: 4264,
    title: "Steve Jobs"
  },
  {
    author: "Bill Gates",
    libraryID: 1254,
    title: "The Road Ahead"
  }
];

// function findMinId(arr){
//   let min= arr[0];
//   for(let obj of arr){
//     if(min.libraryID > obj.libraryID){
//       min= obj;
//     }
//   }
//   return min;
// }
function sortArray(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].libraryID > arr[j].libraryID) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log(arr);
}


console.log(sortObjects(mockObject));

/**
 * 7
 *
 * Write a  function to convert an object into a list of `[key, value]` pairs.
 */

const book = {
  author: 'Bill Gates',
  libraryID: 1254,
  title: 'The Road Ahead',
};

/**
 * 8
 * 
 * Write a  function to get a copy of the object
 * where the keys have become the values and the values the keys.
 * 
 * example output:
  {
    bill_gates: "author",
    1254: "libraryID",
    the_road_ahead: "title"
  };
 */

/**
 * 9
 *
 * Write a  function to check whether an object contains given property.
 *
 */

// 1. Write a js program to find length of a string. 

// var str = "This is computer"
// console.log("Length of string is", str.length);


// 2. Write a js program to copy one string to another string. 

// var str = "I love Pak"
// var copy = ""
// var copy = str
// console.log(copy);


// 3. Write a js program to concatenate two strings. 

// function concate() {
//     var string1 = "Mohammad";
//     var string2 = "Awais";
//     var concate = string1.concat(string2);
//     console.log("After concating:", concate);
// }
// concate();


// 4. Write a js program to compare two strings. 

// function compare() {
//     var string1 = "Ali";
//     var string2 = "Ali";
//     var length1 = string1.length;
//     var length2 = string2.length;

//     if (length2 == length1) {
//         console.log("Strings Are Equal");
//     }
//      else {
//         console.log("Strings Are Not Equal");
//     }
// }
// compare();



// 5. Write a js program to convert lowercase string to uppercase. 

// function uppercase() {
//     var string = "ali saad";
//     var upper = string.toUpperCase();
//     console.log("After conversion to uppercase: ", upper);
//   }
//   uppercase();


//   6. Write a js program to convert uppercase string to lowercase. 

//   function lowercase() {
//     var string = "bilal qasim";
//     var lower = string.toLowerCase();
//     console.log("After conversion to lowercase: ", lower);
//   }
//   lowercase();



//   7. Write a js program to toggle case of each character of a string. 

// function togalcas() {
//     var string1 = "Muhammad Usama";
//     var alpha = "";
//     var z = "";
//     for (var x = 0; x < string1.length; x++) {
//         alpha = string1.charAt(x);
//         if (alpha >= "a") {
//             var y = alpha.toUpperCase();
//             z = z.concat(y);
//         } else {
//             var y = alpha.toLowerCase();
//             z = z.concat(y);
//         }
//     }
//     console.log("After togal:", z);
// }
// togalcas();



//   8. Write a js program to find total number of alphabets, digits or special character in a string. 

// function check() {
//     var string = "pakistan123@@usama#";
//     var alpha = digit = special = 0;
//     for (let x = 0; x < string.length; x++) {
//         var chec = string.charAt(x);
//         if (chec >= "a" || chec >= "A") {
//             alpha++;
//         } else if (chec >= 0 || chec <= 0) {
//             digit++;
//         } else {
//             special++;
//         }
//     }

//     console.log(digit, "No Of Digits", alpha, "No Of Alphabats", special, "No Of Special Characters");
// }
// check();



// 9. Write a js program to count total number of vowels and consonants in a string. 

// function vowelNumbers() {
//     var string = " pakistan";
//     var vowl = consonant = 0;
//     for (let x = 0; x < string.length; x++) {
//         var char = string.charAt(x);
//         if (
//             char == "a" ||
//             char == "A" ||
//             char == "e" ||
//             char == "E" ||
//             char == "i" ||
//             char == "I" ||
//             char == "o" ||
//             char == "O" ||
//             char == "u" ||
//             char == "U"
//         ) {
//             vowl++;
//         } else if (char >= "a" || char >= "A") {
//             consonant++;
//         }
//     }
//     console.log("Total Numbers Of Vowel In The String Is:", vowl);
//     console.log("Total Numbers Of Consonant In The String Is:", consonant);
// }
// vowelNumbers();



// 11. Write a js program to find reverse of a string. 

// function reverse() {
//     var string = "Developing";
//     var revers = "";
//     var sav;
//     for (let x = string.length; x >= 0; x--) {
//       sav = string.charAt(x);
//       revers = revers.concat(sav);
//     }
//     console.log("After reverse the string:", revers);
//   }
//   reverse();



// 13. Write a js program to reverse order of words in a given string 

// var str = "What is web-developing";
// var divWord= str.split(" ");
// console.log(divWord);
// var Rever= divWord.reverse();
// console.log(Rever);
// var strReverse = Rever.join();
// console.log("real string",str);
// console.log("reverse string",strReverse);  


// 15. Write a js program to find last occurrence of a character in a given string. 

// var char = "awais";
// var leng = char.length
// var lastChar = char.charAt(leng - 1)
// console.log("lastChar", lastChar);



// 17. Write a js program to count occurrences of a character in given string. 

// var str = "i love pakistan";
// console.log(str);
// var leng = str.length;
// console.log("total number of character in a string ",leng);



// 21. Write a js program to remove first occurrence of a character from string. 

// var str = "i love pakistan";
// var leng = str.length;
// var removeFirstchar = str.slice(1, leng)
// console.log("REMOVE FIRST CHAR", removeFirstchar);



// 22. Write a js program to remove last occurrence of a character from string. 

// var str = "i love pakistan";
// var leng = str.length - 1;
// var removeLastchar = str.slice(0, leng)
// console.log("REMOVE Last CHAR", removeLastchar);


// 25. Write a js program to replace first occurrence of a character with another in a string.

// function repelace(t,w) {
//     var string='i love my country pakistan'
//     for(let x=0;x<string.length;x++){
//       if (string.charAt(x)==t) {
//         var news=string.replace(t,w)

//       }
//     }
//     console.log("After Replacing ",t," With ",w," String is:",news);
//   }
//   repelace("i","You")


//26. Write a js program to replace last occurrence of a character with another in a string.

//   function repelacelast(t,w) {
//     var string='i love my country pakistan'
//     for(let x=string.length-1;x>=0;x--){
//       var aray=string.split("")
//       if (aray[x]==t) {
//           aray[x]=w
//           var news=aray.join("")
//         break
//       }
//     }
//     console.log("After Replacing ",t," With ",w," String is:",news);
//   }
//   repelacelast("i","a")



//   35. Write a js program to trim leading white space characters from given string. 

// var nam = "  Web developing company ";
// console.log(nam);
// var removeleadingStart = nam.trimStart();
// console.log(removeleadingStart);


// 36. Write a js program to trim trailing white space characters from given string. 

// var nam = "   Web developing company     ";
// console.log(nam);
// var removetrailingSpace = nam.trimEnd();
// console.log("remove end space", removetrailingSpace);


// 37. Write a js program to trim both leading and trailing white space characters from given string. 

// var nam = "   Web developing company     ";
// console.log(nam);
// var removeBothSpace = nam.trim();
// console.log(removeBothSpace);


// 38. Write a js program to remove all extra blank spaces from given string. 

// function extraSpace() {
//     var string='    I love Pakistan   is my country   '
//     var news=string.trim()
//     var array=news.split(" ")
//     for(let x=0;x<array.length;x++){

//       if (array[x]=="") {
//         array.splice(x,1)
//         x--
//       }
//     }
//     var result=array.join(" ")
//     console.log("After Removing All Extra White Space:",result);

//   }
//   extraSpace()



// Objects

//   1. Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// function properties() {
//   var student={
//     name:"David Rayy",
//     sclass:"VI",
//     rollno:12,
//   };
//   var news=Object.keys(student).join(", ")
//   console.log("Output",news);

// }
// properties()


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(student);
// delete  student.rollno;
// console.log(student);



// 3. Write a JavaScript program to get the length of a JavaScript object.   
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// function lengthobj() {
//     var student = {
//         name: "David Rayy",
//         sclass: "VI",
//         rollno: 12
//     };
//     var key = Object.keys(student)
//     console.log("length Of object Is:", key.length);
// }
// lengthobj()

// program :4
// var library =[
//     {
//         author:"Bill Gates",
//         title:"The Road Ahead",
//         readingStatus:true
//     },
//     {
//         author:"Steve Jobs",
//         title:"Walter Isaacson",
//         readingStatus:true
//     },
//     {
//         author:"Suzanne Collins",
//         title:"Mockingy: The Final Book of the The Hunger Games ",
//         readingStatus:true
//     },

// ]

// console.log(library);









//  conditional operators programming exercises

//  1. Write a js program to find maximum between two numbers using conditional operator.

// var x = 3
// var y = 6
// var max = 0
// max = (x>y) ? x : y
// console.log("max number", max);


// 2. Write a js program to find maximum between three numbers using conditional operator.

// var x = 9
// var y = -5
// var z = 59
// var max = 0
// max = x > y ? (x>z ? x:z) : (y>z ? y:z)
// console.log("Maximum between three numbers:",max);


// 3. Write a js program to check whether a number is even or odd using conditional operator. 

// var x = 2340
// var result = (x%2==0) ?  console.log("This is even", x) :
// console.log("This is odd", x)


// 4. Write a js program to check whether year is leap year or not using conditional operator.                   

// var year = 2020
// var leap = year
// var notleap = year          
// result = (year%4==0) ? console.log("This is leap year", leap)  :
// console.log("This is not leap year", notleap);


// 5. Write a js program to check whether character is an alphabet or not using conditional operator. 

// var char = 'N'
// var result = (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') ? console.log("This is alphabet", char) :
//     console.log("This is not alphabet", char);


// List of switch case programming exercises 

// 1. Write a js program to print day of week name using switch case.

// var week = 5

// switch (week) {
//     case 1:
//         console.log("This is monday", week);
//         break;

//     case 2:
//         console.log("This is tuesday", week);
//         break;
//     case 3:
//         console.log("This is Wednesday", week);
//         break;
//     case 4:
//         console.log("This is Thursday", week);
//         break;
//     case 5:
//         console.log("This is Friday", week);
//         break;
//     case 6:
//         console.log("This is Saturday", week);
//         break;
//     case 7:
//         console.log("This is Sunday", week);
//         break;
//     default:
//         console.log("This is invalid input", week);
// }


// 2. Write a js program print total number of days in a month using switch case.

// var month = 2

// switch (month) {
//     case 1:
//         console.log("31 days: Jan", month);
//         break;
//         case 2: 
//         console.log("28/29 days: Feb", month);
//         break;
//     case 3: 
//         console.log("31 days: Mar", month);
//         break;
//     case 4: 
//         console.log("30 days: Apr", month);
//         break;
//     case 5: 
//         console.log("31 days: May", month);
//         break;
//     case 6: 
//         console.log("30 days: June", month);
//         break;
//     case 7: 
//         console.log("31 days: July", month);
//         break;
//     case 8: 
//         console.log("31 days: Aug", month);
//         break;
//     case 9: 
//         console.log("30 days: Sept", month);
//         break;
//     case 10: 
//         console.log("31 days: Oct", month);
//         break;
//     case 11: 
//         console.log("30 days: Nov", month);
//         break;
//     case 12: 
//         console.log("31 days: Dec", month);
//         break;
//     default:
//         console.log("This is invalid input, enter b/w 1-12", month);
// }


// 3. Write a js program to check whether an alphabet is vowel or consonant using switch case.

// var alphabet = '!'

// switch (alphabet) {
//     case 'A':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'a':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'E':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'e':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'I':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'i':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'O':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'o':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'U':
//         console.log("This is vowel", alphabet);
//         break;
//     case 'u':
//         console.log("This is vowel", alphabet);
//         break;


//     default:
//         console.log("consonant", alphabet);

// }


// 4. Write a js program to find maximum between two numbers using switch case.

// var num1 = 10
// var num2 = 7

// switch (num1 > num2) {
//     case true:
//         console.log(num1);
//         break;
//     case false:
//         console.log(num2);
//         break;
//     default:
//         console.log("num2 is greater");
// }

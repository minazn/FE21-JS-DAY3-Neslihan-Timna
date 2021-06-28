//-----------------------------BASIC 1 ----------------------------------------

//random nr be between -5c and 25c
var celsius = Math.floor(Math.random() * 36) - 5;

if (celsius >= -5 && celsius <= 10) {
    console.log("The weather is cold: " + celsius);
} else {
    console.log("The weather is moderate: " + celsius);
}


//-----------------------------BASIC 2----------------------------------------

//highest value in array

var arr = [1, 7, -3, 9];
var tmp = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (tmp < arr[i]) {
        tmp = arr[i]
    }
}

console.log("The highest value in [" + arr + "] is: " + tmp);


//-----------------------------BASIC 3----------------------------------------

//random nr be between -5c and 25c
var celsius = Math.floor(Math.random() * 36) - 5;
document.getElementsByClassName("xyz").innerHTML = "some text";

if (celsius >= -5 && celsius <= 10) {
    document.getElementById("ma").innerHTML = "The weather is cold: " + celsius + "°C";
} else if (celsius > 24) {
    document.getElementById("ma").innerHTML = "The weather is hot: " + celsius + "°C";
} else {
    document.getElementById("ma").innerHTML = "The weather is moderate: " + celsius + "°C";
}


//-----------------------------INTERMEDIATE 1----------------------------------------

var arr_name = ["Martin", "Thomas", "Klaus", "Maria", "David"];
var arr_grade = [76, 85, 65, 93, 81];
var arr_condition = [60, 70, 80, 90, 100];
var arr_result = ["F", "D", "C", "B", "A"];
var result = "<br>";

for (let i = 0; i < arr_name.length; i++) {
    for (let j = 0; j < arr_name.length; j++) {
        if (arr_grade[i] < arr_condition[j]) {
            result += arr_name[i] + " has " + arr_grade[i] + " points and will be graded with: " + arr_result[j] + "<br>";
            break;
        }
    }
}

console.log(result);
document.write(result);

//-----------------------------INTERMEDIATE 2----------------------------------------

var n = 1;
var FizzBuzz = "<br>";

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        FizzBuzz += "FizzBuzz<br>";
    }
    else if (i % 3 == 0) {
        FizzBuzz += "Fizz<br>";
    } else if (i % 5 == 0) {
        FizzBuzz += "Buzz<br>";
    } else {
        FizzBuzz += String(i) + "<br>";
    }
}

document.write(FizzBuzz);


//-----------------------------INTERMEDIATE 3----------------------------------------
//----------------------this is not working--------------------------

// for (let i=0; i<star_arr.length; i++){
//     star_arr[i+1] = star_arr[i] + " &star;";
// }
// var star_arr = ["&star;","","","","",""];
// var star = "<br>";

// for (let i=0; i<star_arr.length; i++){
//     star += star_arr[i];
// }

// document.write(star);

//-----------------------this is working ------------------------
// console.log(star_arr);
// star_arr[1] = star_arr[0] + "&star;";
// star_arr[2] = star_arr[1] + "&star;";

// document.write(star_arr[2]);


var star = "&star;"
document.write("<br>" + star);
for (let i = 1; i < 6; i++) {
    star += "&star;";
    document.write("<br>" + star);
}

//-----------------------------CHALLANGE----------------------------------------

var students = ["John", "Jane", "Mark", "Tom", "Valerie"];
var grades = [70, 85, 38, 69, 100];
var condition = [60, 70, 100];
var condition_color = ["red", "yellow", "green"];
var msg = "";


function getStudentsGrade(student) {
    for (let i = 0; i < students.length; i++) {
        if (student == students[i]) {
            msg += students[i] + " has reached " + grades[i] + " points in Math this season.";
            break;
        }
    }
    return msg;
}

var student_input = prompt("type your name");
var idx = students.indexOf(student_input);


for (let j = 0; j < condition.length; j++) {
    if (grades[idx] < condition[j]) {
        document.getElementById("grades").style.color = condition_color[j];
        break;
    }
}

if (grades[idx]==100){
    document.getElementById("grades").style.color = "blue";
}

document.getElementById("grades").innerHTML = getStudentsGrade(student_input);
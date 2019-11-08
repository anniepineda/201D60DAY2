'use strict'; //=== and no global vars


var nameCapture = prompt('Whats your name?');
alert('Welcome to my site ' + nameCapture);
document.getElementById('thefeet').innerHTML = 'Welcome to my site ' + nameCapture + '.';

function myEducation () {
var higherEducation = prompt('Do I have higher education?');
if (higherEducation.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I do!');
}
}
myEducation();
//console.log('Higher Education:', higherEducation);

function mySeattle () {
var seattleNative = prompt('Am I originally from Seattle?');
if (seattleNative.toUpperCase() === 'NO'){
    alert('You are correct!');
}else{
    alert('Wrong! I am not!');
}
}
mySeattle();
//console.log('Seattle Native:', seattleNative);

function myMilitary () {
var militaryService = prompt('Have I served in the military?');
if (militaryService.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I did!');
}
}
myMilitary();
//console.log('Military Service:', militaryService);

function myAmazon () {
var previousAmazonian = prompt('Have I previously worked at Amazon?');
if (previousAmazonian.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I am a transfer!');
}
}
myAmaznn();
//console.log('Previous Amazonian:', previousAmazonian);

function myExperience () {
var jsExperience = prompt('Do I have any previous JavaScript experience?');
if (jsExperience.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I do!');
}
}
myExperience();


function myNumbers () {
var number;
var counter = 1;

while(number !== 39){
    if (counter <= 4){
        number = parseInt(prompt('How old am I?'));
        if (number < 39 ){
            alert('You guessed too low');
            counter++;
        }else if( number > 39){
            alert('You guessed too high');
            counter++;
        }else if(number === NaN || number === null){
            alert('please enter a real number');
            counter++;
        }
    }else if(counter > 4){
        alert('Too many guesses...');
        break;
    }
}
}
myNumbers();
    //alert('Correct! I am 39!')

//console.log('Prev js experience:', jsExperience);

function myCities () {
var cities = ['madrid', 'miami', 'paris', 'berlin', 'seattle', 'washington'];
var answer = prompt('Name a city I have visited!');
var lastCounter = 1;
var flag = false;

while(lastCounter < 6){
    var answer = prompt('Name a city I have visited!');
    for(var i = 0; i < cities.length; i++){
        if (answer === cities[i]){
            alert('Nice job, I really like' + ' ' + cities[i]);
            flag = true;
            break;
        }
        if(flag === true){
            break;
        }else if(flag!==true){
            lastCounter++;
            alert('Wrong');
        }
    }
}
}
myCities();
   //break;



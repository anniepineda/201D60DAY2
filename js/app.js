'use strict'; //=== and no global vars


var nameCapture = prompt('Whats your name?');
alert('Welcome to my site ' + nameCapture);
document.getElementById('thefeet').innerHTML = 'Welcome to my site ' + nameCapture + '.';

var higherEducation = prompt('Do I have higher education?');
if (higherEducation.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I do!');
}
//console.log('Higher Education:', higherEducation);

var seattleNative = prompt('Am I originally from Seattle?');
if (seattleNative.toUpperCase() === 'NO'){
    alert('You are correct!');
}else{
    alert('Wrong! I am not!');
}
//console.log('Seattle Native:', seattleNative);

var militaryService = prompt('Have I served in the military?');
if (militaryService.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I did!');
}
//console.log('Military Service:', militaryService);

var previousAmazonian = prompt('Have I previously worked at Amazon?');
if (previousAmazonian.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I am a transfer!');
}
//console.log('Previous Amazonian:', previousAmazonian);

var jsExperience = prompt('Do I have any previous JavaScript experience?');
if (jsExperience.toUpperCase() === 'YES'){
    alert('You are correct!');
}else{
    alert('Wrong! I do!');
}

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
    //alert('Correct! I am 39!')
}
//console.log('Prev js experience:', jsExperience);

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
   //break;



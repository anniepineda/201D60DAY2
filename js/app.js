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
//console.log('Prev js experience:', jsExperience);


'use strict';
const _Name = prompt("Hello. what is your name" );
alert("wellcome "+ _Name);
console.log(_Name);
let score=0;
let _YorN1 = prompt('1. tell me one of my favorite colors. You have 6 attempts', 'red, green, blue, brown');
console.log(_YorN1);
let possibleAnswers = ['red', 'blue', 'orange', 'black',];
console.log(possibleAnswers);
for (let i = 0; i < 6; i++) {
    if(_YorN1==possibleAnswers[0] || _YorN1==possibleAnswers[3]){
        alert('Correct!!');
        score++;
        break;
    }else
    _YorN1 = prompt('try again');
   
    console.log(i);
    console.log(_YorN1);
}
alert('Here is all my favorite colors: '+ possibleAnswers[0]+',  '+possibleAnswers[3] );
console.log(_YorN1);

let _YorN2 = prompt('2. How old I am? You have 4 attempts', '25, 18, 23, 30' );
for(let i=0; i<4 ; i++){
    if(parseInt(_YorN2)==23){
    alert('correct');
    score++;
    break;}
    else if (parseInt(_YorN2)<=18){
        alert('Too low');
        _YorN2 = prompt('2. How old I am?', '25, 18, 23, 30' );
    }
    else if (parseInt(_YorN2)>=30){
        alert('Too high');
        _YorN2 = prompt('2. How old I am?', '25, 18, 23, 30' );
    }else
    _YorN2 = prompt('Try again');
    console.log(i);
}

console.log(_YorN2);
let _YorN3 = prompt('3. Do I like Hello catty TV show? ', '(Y)es or (N)o');
switch(_YorN3.toLowerCase()){
    case 'yes':
    case 'y': 
    alert('Absolutely wrong');
    break;
    case 'no' :
    case 'n' :
        alert('Correct');
        score++     
         
}
console.log(_YorN3);
 let _YorN4 = prompt('4. Do I like The waling dead series', '(Y)es or (N)o');
 switch(_YorN4.toLowerCase()){
    case 'yes':
    case 'y': 
    alert('Correct '),
    score++; 
    break;
    case 'no' :
    case 'n' :
        alert('Wrong');
           
}
console.log(_YorN4);
 let _YorN5 = prompt('5. Do i have an experience at phones and computers ', '(Y)es or (N)o');
 switch(_YorN5.toLowerCase()){
    case 'yes':
    case 'y': 
    alert('Correct');
    score++;
    break;
    case 'no' :
    case 'n' :
        alert('Wrong'); 
              }
console.log(_YorN5);           
 let _YorN6 = prompt('6. Did i work at a factory', '(Y)es or (N)o');
 switch(_YorN6.toLowerCase()){
    case 'yes':
    case 'y': 
    alert('No, I didn\'t');
    break;
    case 'no' :
    case 'n' :
        alert('Correct');
        score++;      
}
console.log(_YorN6);
 let _YorN7 = prompt('7. Am I an Engineer?', '(Y)es or (N)o');
 switch(_YorN7.toLowerCase()){
    case 'yes':
    case 'y': 
    alert('No I studied English language and literature');
    break;
    case 'no' :
    case 'n' :
        alert('Correct'); 
        score++;      
}
console.log(_YorN7);
alert('Thank you '+ _Name + ', Your score is ' + score+ ' out of 7');
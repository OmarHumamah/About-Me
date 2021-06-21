'use strict';
const _Name = prompt("Hello. what is your name" )
alert("wellcome "+ _Name)
console.log(_Name)

let _YorN = prompt('Did you know my name? Answer with "yes" or "no"/ "y" or "n".')


function yesOrno(a, b, c,){
switch(_YorN.toLowerCase()){
    case 'yes':
    case 'y' :
    console.log(_YorN);
    alert(a)
        break
    a
    case 'no' :
    case 'n'  :  
    console.log(_YorN);
    alert(b)
    break

    default: 
    console.log(_YorN);
    alert(c)
}
}
yesOrno(
    'I don\'t think so, I am not famous yet ;p.',
    'Ok, I\'ll give you a hint.', 
    'you want to spoil it, ha?! '+'!!!!'+_YorN+'!!!!', );
    
_YorN = prompt('It is begins with \"O\". Did you get it yet? "yes" or "no"/ "y" or "n".')
yesOrno(
    'Come on! there is alot of names begin with O, I\'ll give you another hint. Om\*\*',
    'It is Ok, I\'ll give you another hint. Om\*\*',
    'Do not spoil it, play fair'

)
_YorN = prompt('Still hard for you to know, ha? ')
yesOrno(
    'Another one. Oma* just add one character.',
    'then what is my name?',
    'Don\'t be silly just "y"/"n"',
)

let myName = prompt('So, my name is ....')
switch(myName.toLowerCase()){
    case 'omar':
        console.log(myName);
        alert('Finaly!! It is correct thank you.')
        break
    default:
        console.log(myName);
        alert('I can not make it easer. I\'m done. It is Omar')

}

alert('Thank you '+ _Name + ' for your patience')


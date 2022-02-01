
const message =[]

//Generate random number between 0 &3 and assign each outcome to a phrase
const genMessage1 =()=>{
    rand = Math.random()*3;
    randNum = Math.floor(rand)
    switch(randNum){
        case 1:
            message.push('Good luck ')
            break;
        case 2:
            message.push('Bad luck ')
            break;
         default:
            message.push('Dont call me if you are ')
             break
    }
} 
// Test output
/*console.log(genMessage1()); */

//Generate random number between 0 & 3 and assign each outcome to a second phrase
const genMessage2 =()=>{
    rand = Math.random()*3;
    randNum = Math.floor(rand)
    switch(randNum){
        case 1:
            message.push('on your journey, ')
            break;
        case 2:
            message.push('driving, wherever that is, ')
            break;
         default:
            message.push('with your girlfriend, ')
             break
    }
} 
// Test output
/*console.log(genMessage2()); */

//Generate random number between 0 & 3 and assign each outcome to a third phrase
const genMessage3 =()=>{
    rand = Math.random()*3;
    randNum = Math.floor(rand)
    switch(randNum){
        case 1:
            message.push('do NOT forget to post the mail!'+ artStr3)
            message
            break;
        case 2:
            message.push( 'remember to pick up cigs!'+artStr2)
            break;
         default:
            message.push('let me know when your on your way! ' +artStr1)
             break
    }
} 
 const artStr1 = String.raw`

          //  ||\ \
    _____//___||_\ \___
    )  _          _    \
    |_/ \________/ \___|
   ___\_/________\_/______
   

`;
const artStr2 = String.raw`

                    (  )/  
                    )(/
 ________________  ( /)
()__)____________)))))  

`;
const artStr3 = String.raw`

__________________
|\                /|
| \              / | 
| /\____________/\ | 
|/                \| 
|__________________| 


`;




genMessage1()
genMessage2()
genMessage3()
console.log(message.join(''))



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
            message.push('driving, wherever that is, '
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
            message.push('do NOT forget to post the mail!')
            break;
        case 2:
            message.push( 'remember to pick up cigs!')
            break;
         default:
            message.push('let me know when your on your way! ')
             break
    }
} 
//Print full random 
console.log(message.join(''))


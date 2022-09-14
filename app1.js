//console.log("its working fine")
//if(1+1===2){
   // console.log("correct one")
//}


//console.log("its not working fine")
//const dayofweek="monday"
//if (dayofweek==="monday"){
    //console.log("i love monday")
//}
//else if(dayofweek==="thursday"){
    //console.log("its not their")
//}


//const age=35;
//if (age<5){
  //  console.log("you are a baby ,you et for free")
//}
//else if(age<10){
    //console.log("you are a child,you should pay $10")
//}
//else if(age<65){
    //console.log("you are elder,ypu should pay $100")
//}


//let rating= prompt("enter the number");
//if(rating===3){
  //  console.log("you are sucess")
//}
//else if(rating===2){
   // console.log("meets expectation")
//}
//else if(rating===1){
   // console.log("needs improvement")
//}
//else{
    //console.log('ivalid rating')
//}



//const password = prompt("enter the pssword");
//password must be 6+ character
//if (password>=10){
  //  console.log("long enough password")
//}
//else{
  //  console.log("very short")
//}


const password = prompt("enter the password");
if (password.length>=6 && password.indexOf('')===-1){
    console.log("valid password")
}
else{
    console.log("incorrect password")
}
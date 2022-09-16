//console.log("Hello from our first js file")


//for(let i=1;i<=10;i++){
   // console.log(i)
//}


//for (let i=0; i<=20;i++){
  //  console.log(i)
//}

// for (let i=0;i<=20;i+=2){
//     console.log(i)
// }


// for (let i=100;i>=0;i-=10){
//     console.log(i)
// }

// for (let i=10;i<=1000;i*10){
//     console.log(i)
// }

// for (let i=25;i>=0;i-=5){
//     console.log(i)
// }

// const animals=['tiger','lion','deer'];
// for (let i=0;i<animals.length;i++){
//     console.log(i,animals[i])
// }

// const animals=['tiger','lion','deer'];
// for(let i=animals.length-1;i>=0;i--){
//     console.log(i,animals[i])
// }

// const people=['ramu','venu','geetha','neetha']
// for(let i=0;i<people.length;i++){
//     console.log(i,people[i])
// }

// for(let i=1;i<=10;i++){
//     console.log(`i is: ${i}`)
//     for(let j=1;j<4;j++){
//         console.log(`   j is:${j}`)
//     }
// }


// let num=0;
// while(num<10){
//     num++;
//     console.log(num);
    
// }


// const password="divyareddy";
// let guess=prompt("enter the password");
// while(guess=pasword){
//     guess=prompt("enter the pssword");

// }
// console.log("you won")


// for (let i=0;i<=1000;i++){
//     console.log(i);
//     if (i===100) break;
// }


// for(let char of "helloworld"){
//     console.log(char)
// }


// function singSong(){
//     console.log("hi");
//     console.log("am");
//     console.log("here");
// }

// function repeat(str,numTimes){
//     let result='';
//     for (let i=0;i<numTimes;i++){
//         result+=str;

//     }
//     console.log(result);
// }

// function add(x,y){
//     console.log(x+y)
// }

// function add(x,y){
//     let sum=x+y;
//     return sum;
// }

// let radius=8;
// if(radius>0){
//     const pi=3.14519;
//     let msg='hi';

// }
// console.log(radius);


// let animal='tiger';
// function animalwatch(){
//     let animal="lion";
    
// }
// console.log("animal");


// function test(){
//     console.log(y)
//     var x=y+10;
// }
// var y=10;
// test()


// function test(){
//     console.log(y)
//     var x=y=10
// }
// var y=10;
// test()
// {
//     console.log(y)
// }


// function test(){
//     console.log(y)
//     var x=y+10;

// }
// let y=10;
// const num=83;
// test()
// {
//     num=+
//     console.log(num)
// }



// function test(){
//     var x=10;
//     console.log(x)
// }
// var x=10;
// test()


// let x=1;
// function outer(){
//     console.log("x",x)
//     console.log("y",y)
//     let z=10;
//     function inner(){
//         let z=20;
//         console.log("z",z)
//     }
//     inner()
// }
// let y=10;
// outer()



// let x=1;
// let z=300;
// function outer(){
//     console.log("x",x)
//     console.log("y",y)
   
//     function inner(){
//        // let z=20;
//         console.log("z",z)

//     }
//     inner()
// }
// let y=10;
// outer()



// let x=1;

// function outer(){
//     console.log("x",x)
//     console.log("y",y)
//     console.log("z",z)
//     function inner(){
//         let z=10;
//     }
//     inner()
//     }
//     let y=10;
//     outer()




// function add(x,y){
//     return x+y
// }


// const add=function(x,y){
//     return x+y;
// }


// const square=function(num){
//     return num*num;
// }



// function first(fun){
//     fun()
// }
// function second(){
//     console.log("this is a second function")
// }
// first(second)



// function first(fun){
//     console.log(fun)
//     fun()
// }
// function second(){
//     console.log("this is second function")
// }
// //let second=20;
// var second=30;
// first(second)



// var arr=[2,3,4,5,6]
// function squares(arr){
//     squares=[]
//     for(ele of arr){
//         let res=ele*ele;
//         squares.push(res)
//     }
//     console.log(squares)
// }
// squares(arr)


// function cubes(arr){
//     cubes=[]
//     for (ele of arr){
//         let res=ele*ele*ele;
//         cubes.push(res)

//     }
//     console.log(cubes)
// }
// cubes(arr)



// function first(){
//     return second
// }
// function second(){
//     console.log("this is second function")
// }
// let res=first()
// res()



//console.log(this)

// var a=10;
// console.log(this)
// console.log(window.a)
// console.log(a)
// console.log(this.a)
// var ab ={
//     name:"divya"
// }
// console.log(this.ab)




// var a=10;
// function add(){
//     console.log(this.a)
//     console.log(window.a)
// }
// add()


// var a=10;
// var movie={
//     name:"sita-ramam",
//     getName:function(){
//         console.log(this)
//     }
// }
// movie.getName()



// try{
//     console.log("line1")
//     console.log(line2)
//     console.log("line3")
// }
// catch(error){
//     console.log(error)
//     console.log(error.name)
//     console.log(error.message)
// }
// console.log("line4")


// try{
//     console.log("line1")
//     console.log("line2")
//     console.log("inside in try")
// }
// catch(error){
//     console.log(error)
//     console.log('inside catch')
// }
// console.log("line4")



//let x=20;
// let x=10;
// console.log("line1")
// if(x<15){
//     throw "x must be greater than 15"
//     console.log("xyz")
// }
// console.log("hello")




// function test(a){
//     //console.log(a())
//     a()
// }
// test (function(){
//     console.log("call back function")

// })




// function first(test){
//     console.log(test())
//     console.log("this is the first function")
// }
// function second(){
//     console.log("this is the second function")
// }
// first(second)
// second()



// function add(a,b){
//     console.log(a+b)
// }
// function product(a,b){
//     console.log(a*b)
// }
// function calculator(val1,val2,operation){ 
//     operation(val1,val2)
// }
// calculator(2,3,add)
// calculator(2,3,product)



arr=[1,2,3,4,5]
var res=arr.map(function(ele,index,arr){
    return ele*ele
})
console.log(res)

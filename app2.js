// const btn=document.querySelector('#v2')


// btn.onclick=function(){
//     console.log("witer over")
//     console.log("read me")
// }



const btn=document.querySelector('button');
buttton.addEventListener('click',function(){
    const r=Math.floor(Math.random()*16);
    const g=Math.floor(Math.random()*16);
    const b=Math.floor(Math.random()*16);
    const newcolor=`rgb(${r},${g},${b})`
    document.body.style.backgroundColor='newcolor'
})

const tru=document.querySelector(".prevBtn");
const cong=document.querySelector(".nextBtn");
const counter=document.getElementById("counter");
let i=0;

// tru.addEventListener("click",()=>{
//     i=i-1;
//     if(i<0){
//         counter.style.color="red"
//     }
//     if(i>0){
//         counter.style.color="green"
//     }
    
//     counter.innerHTML=i;
// })
// cong.addEventListener("click",()=>{
//     i=i+1;
//     if(i<0){
//         counter.style.color="red"
//     }
//     if(i>0){
//         counter.style.color="green"
//     }
    
//     counter.innerHTML=i;
// })

const input1=document.getElementById("input1")
const input2=document.getElementById("input2")
const input3=document.getElementById("input3")
const result=document.getElementById("result")
result.addEventListener("click",()=>{
    let arr=["+","-","*","/"]
    let i=input1.value;
    let j=input3.value;
    if(input2.value=="+"){
        counter.innerHTML=Number(i)+Number(j);
    }
    if(input2.value=="-"){
        counter.innerHTML=Number(i)-Number(j);
    }
    if(input2.value=="*"){
        counter.innerHTML=Number(i)*Number(j);
    }
    if(input2.value=="/"){
        counter.innerHTML=Number(i)/Number(j);
    }
    else{
        counter.innerHTML="SAI DINH DANG"
    }
})

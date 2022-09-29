const btn1=document.getElementById("btn-1")
const text=document.getElementById("text")

quotes = new Array();
quotes[0] = "Nội dung đoạn Text 1";
quotes[1] = "Nội dung đoạn Text 2";
quotes[2] = "Nội dung đoạn Text 3";
quotes[3] = "Nội dung đoạn Text 4";
quotes[4] = "Nội dung đoạn Text 5";
quotes[5] = "Nội dung đoạn Text 6";

btn1.addEventListener('click',(e)=>{
    text.innerHTML=quotes[Math.floor(Math.random() *quotes.length)]

})
function randomHexCode(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}
const btn2=document.getElementById("btn-2")
btn2.addEventListener('click',(e)=>{
    text.style.color=randomHexCode()
})
const btn3=document.getElementById("btn-3")
function randomRgbCode(){
    let rgb="rgb"
    let arr=[];
    for(let i=0;i<3;i++){
      arr.push(Math.floor(Math.random() *256))
    }
    rgb+="("
    rgb+=arr.join();
    rgb+=")"
   return rgb

}
btn3.addEventListener('click',(e)=>{
    text.style.backgroundColor=randomRgbCode()
})
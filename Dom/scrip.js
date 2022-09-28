const element =document.getElementById("text");
element.style.color="#777";
element.style.fontSize="32px";
element.innerHTML="toi co the lam moi thu voi javascrip"

const li =document.getElementsByTagName("li")
for(let i=0;i<li.length;i++){
    li[i].style.color="blue";
}


const btn =document.getElementById("btn");
function myFuntion(){
    const text2=document.getElementById("text2");
    if (text2.style.display == 'none') {
        text2.style.display = 'block';
    } else {
        text2.style.display = 'none';
    }
}

const select =document.getElementById("texture-selector")
const textureB =document.getElementById("texture-background")
select.addEventListener('change',(e)=>{
    textureB.innerHTML=""
    const imgURL=e.target.value;
    const img=document.createElement('img');
    img.src =imgURL
    textureB.appendChild(img)
}
)

//Câu 1
const text =document.getElementById("text");
text.style.color="#777"
text.style.fontSize="2rem"
text.innerHTML="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript"
//Câu 2
const li =document.getElementById("cau2").children
for(let i=0;i<li.length;i++){
    li[i].style.color="blue";
}
//Câu 3
    const listli =document.getElementById("list")
    const item8=document.createElement("li")
    item8.textContent="Item 8"
    listli.appendChild(item8)

    const item9=document.createElement("li")
    item9.textContent="Item 9"
    listli.appendChild(item9)
 
    const item10=document.createElement("li")
    item10.textContent="Item 10"
    listli.appendChild(item10)

    let item =listli.children
    item[0].style.color="red"
    
    item[2].style.backgroundColor="blue"
    
    listli.removeChild(item[3])
    const item11=document.createElement("li")
    item11.textContent="javascrip"
    listli.insertBefore(item11,item[3])
 
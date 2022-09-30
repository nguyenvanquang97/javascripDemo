let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
const boxes=document.querySelector(".boxes")
for(let i=0;i<colors.length;i++){
    const box=document.createElement('div')
box.className='box'
box.style.backgroundColor=colors[i]
boxes.appendChild(box)

}
const score=document.querySelector(".points")
let count=boxes.children.length
score.textContent=count
function rm() {
    this.remove();
 }
 const box=document.querySelectorAll(".box")
 box.forEach(button => {
   button.addEventListener('click', rm);
 });
 box.forEach(button => {
    button.addEventListener('click', ()=>{
        let count=boxes.children.length
        score.textContent=count
    });
  });
const moreBox=document.getElementById("btn")
moreBox.addEventListener('click',()=>{
    for(let i=0;i<colors.length;i++){
        const box=document.createElement('div')
    box.className='box'
    box.style.backgroundColor=colors[i]
    boxes.appendChild(box)
    }
    let count=boxes.children.length
    score.textContent=count
    const box=document.querySelectorAll(".box")
    box.forEach(button => {
      button.addEventListener('click', rm);
    });
    box.forEach(button => {
       button.addEventListener('click', ()=>{
           let count=boxes.children.length
           score.textContent=count
       });
     });
})
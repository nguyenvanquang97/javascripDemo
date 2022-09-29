let noteList=[
    {Title:"Relaxing",Content:"Go to bed on time"},
    {Title:"Next trip",Content:"Go to Spain"},
    {Title:"Offical work",Content:"report the work"},
]

const list=document.querySelector(".list-group")
for(let i=0;i<noteList.length;i++){
    const newNote=document.createElement('div')
    const title=document.createElement("li")
    title.className="list-group-item list-group-item-primary"
    title.textContent=`Title:${noteList[i].Title}`
    newNote.appendChild(title)

    const deleteButton=document.createElement('button')
    deleteButton.innerHTML="delete"
    deleteButton.className="btn btn-outline-secondary del"
    title.appendChild(deleteButton)

    const content=document.createElement("li")
    content.className="list-group-item list-group-item-light"
    content.textContent=`Content:${noteList[i].Content}`
    newNote.appendChild(content)
    list.appendChild(newNote)
}
//add
const add =document.getElementById("add")
const addTitle=document.getElementById("title")
const addContent=document.getElementById("content")
add.addEventListener('click',()=>{
    const newNote=document.createElement('div')
    const title=document.createElement("li")
    title.className="list-group-item list-group-item-primary"
    title.textContent=`Title:${addTitle.value}`
    newNote.appendChild(title)

    const deleteButton=document.createElement('button')
    deleteButton.innerHTML="delete"
    deleteButton.className="btn btn-outline-secondary del"
    title.appendChild(deleteButton)

    const content=document.createElement("li")
    content.className="list-group-item list-group-item-light"
    content.textContent=`Content:${addContent.value}`
    newNote.appendChild(content)
    list.appendChild(newNote)
    noteList.push(addTitle.value,addContent.value)
    addTitle.value=""
    addContent.value=""
  
    deleteButton.addEventListener('click',rmParent)
})
const deleteButton=document.querySelectorAll('.del')
function rmParent() {
    this.parentElement.parentElement.remove();
 }
 
 deleteButton.forEach(button => {
   button.addEventListener('click', rmParent);
 });

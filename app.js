var list = document.getElementById("list")

function addItems() {
    var todo_items = document.getElementById("to-do-list")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_items.value)
    var liTexts = document.getElementById("to-do-list").value;
   
    if (liTexts === '') {
        alert("You must write something!");
      } else {
        li.appendChild(liText)
        list.appendChild(li)
      }
      todo_items.value = ""


    var dlBtn = document.createElement("button")
    var dlText = document.createTextNode("Delete")
    dlBtn.setAttribute("class","btn1")
    dlBtn.setAttribute("onclick","deleteItem(this)")
    dlBtn.appendChild(dlText)

    var edBtn = document.createElement("button")
    var edText = document.createTextNode("Edit")
    edBtn.appendChild(edText)
    edBtn.setAttribute("class","btn")
    edBtn.setAttribute("onclick","editItem(this)")
   
    li.appendChild(edBtn)
    li.appendChild(dlBtn)

    
    todo_items.value = ""

}
function deleteItem(e){
e.parentNode.remove()
}
function dlAll(){
    list.innerHTML = ""
}
function editItem(e){
    console.log(e.parentNode.firstChild.nodevalue)
    var value = prompt("Enter the new value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = value;
}
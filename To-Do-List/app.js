const inputBox = document.getElementById("input-box");
const listTask = document.getElementById("list-task");

function addTask(){
    if(inputBox.value === ''){
        alert("You need to write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);  
        let span = document.createElement("span");
        span.innerHTML = "✖";
        li.appendChild(span);
    }
    inputBox.value = '';
    storeData()
}
listTask.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData()
    }

},false);

function storeData(){
    localStorage.setItem("data",listTask.innerHTML)
}

function showData(){
    listTask.innerHTML=localStorage.getItem("data");
}
showData();

const inputFill = document.querySelector("#inputFill");
const addBtn =  document.querySelector(".addBtn");
const addNodeList =  document.querySelector(".addNodeList");


addBtn.addEventListener('click' , function(){
    if(inputFill.value === '') {
        alert("Please Enter something")

    } else if(inputFill.value === Text.value ) {
        alert("place New input something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputFill.value;
        addNodeList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span)

        // inputFill.value = " ";
    }
    
    saveData();
})


addNodeList.addEventListener('click' , function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove("span")
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', addNodeList.innerHTML)
}

let myData = ['delfin','not delfin', 'Apple'];

function init(){
    //localStorage.setItem("myCat", "Tom");
    //console.log(myData); 
    //console.log(JSON.stringify(myData));
    getFromLocalStorage();
    render()
}



function saveData(){
    let inputRef = document.getElementById('data_input');

    if(inputRef.value != ""){
        myData.push(inputRef.value);
    }

    saveToLocalStorage();

    render();
    inputRef.value = "";
}


function saveToLocalStorage(){
    localStorage.setItem("myData", JSON.stringify(myData));
}


function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("myData"));
    
}


function render(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`
    }
}
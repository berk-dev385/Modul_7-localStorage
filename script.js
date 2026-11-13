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
    myData = myArr; 
}


function render(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`
    }
}     

//deep dive in Kevins trick.
//Cannot read properties of null (reading 'length')wird angezeigt
//Witziger Weise ist die Trickfehleranzeige auf englisch anders herum zu lesen
// Unzwar "reading length" ist das was wir tun wollen , können wir aber nicht von null
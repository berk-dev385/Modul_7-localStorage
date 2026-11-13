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
   
   //Aufgabe
   //In Zeile 39 myArr; gegenprüfen mit einer Hilfsabfrage ob myArr = 0 ist.
   // Und wenn das null ist dann mache ich das in zeile 39 eben nicht.    
   // also if myArr = 0, dann das in Zeiel 39 nicht machen   
    if (myArr !== null) {
    myData = myArr;
}
}


function render(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let index = 0; index < myData.length; index++) {
        contentRef.innerHTML += `<p>${myData[index]}</p>`
    }
}     



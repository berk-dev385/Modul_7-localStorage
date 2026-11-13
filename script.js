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

// wir wollen natürlich myData lesen, ist nicht sehr überraschend da wir das ja GERADE bearbeitet haben.
// Der Trick wird im Debugger fortgeführt. 
//Also da aber tatsächlich vor der render(), vor dem hier (myData) nichts passiert
//außer im getFromLocalStorage, Das heisst wenn wir uns den getFromLocal storage angucken 
// Muss schon....Weil das einzige was wir in dieser Funktion machen ist
//myData = myArr setzen. Das heisst myArr muss null sein. 

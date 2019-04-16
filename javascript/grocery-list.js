function deleteItem(ItemText){
    arrayList = document.getElementById("list-item").childNodes;
    for(i=0;i<arrayList.length;i++){
        element=arrayList[i];
        if(element.innerText === ItemText){
            element.parentNode.removeChild(element);
            return;
        }
    }
}

function addItem(){
    // Creating a new <div> element
    var el = document.createElement("div"); 
    // Getting the value in the Input text box.
    item = document.getElementById("inp-box").value;
    if(item == "" || item== " " )
        return;
    // Adding the new <li> to the DOM
    el.innerHTML =
                "<li class='list-group-item each-item'>"
                    +item+
                '<i class="fas fa-trash-alt trash-can" onclick=deleteItem(\"'+item+'\") id="trashCan"></i></li>';
    // Figuring where the <ul> is to add <li>
    myUl = document.getElementById("list-item");
    // adding<li>
    myUl.appendChild(el);

    // Clearing the input box
    document.getElementById("inp-box").value= "";
}

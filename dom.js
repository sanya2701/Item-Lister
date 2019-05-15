var form=document.getElementById("frm");
var itemList=document.getElementById("items");
form.addEventListener('submit',addItem);
itemList.addEventListener('click',delet);

function addItem(e){
	e.preventDefault();

//Grab inputbox's value
    var newItem=document.getElementById("inpt").value;

//create new element
    var newLi=document.createElement('li');
    newLi.className="list-group-item";

//Insert into DOM
    var newLiText=document.createTextNode(newItem);
    newLi.appendChild(newLiText);	

//create del button
    var del=document.createElement('button');
    del.className="btn btn-danger float-right";
    del.appendChild(document.createTextNode('X'));

//Add del to li
    newLi.appendChild(del);

//Append li to itemlist
    itemList.appendChild(newLi);

	
}

function delet(e) {
      itemList.removeChild(itemList.childNodes[0]);
}
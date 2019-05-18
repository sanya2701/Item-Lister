var form=document.getElementById("frm");
var itemList=document.getElementById("items");
var clear=document.getElementById("clr");
form.addEventListener('submit',addItem);
itemList.addEventListener('click',delet);
clear.addEventListener('click',clr);

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
    del.className="btn btn-danger float-right delete";
    del.appendChild(document.createTextNode('X'));

//Add del to li
    newLi.appendChild(del);

//Append li to itemlist
    itemList.appendChild(newLi);

	
}

function delet(e){
          //console.log(e.target);
          if(e.target.classList.contains('delete'))
          {
              if(confirm('Are you sure to delete this task?'))
              {
              var li=e.target.parentElement;
              itemList.removeChild(li);
              }
          }
}

function clr(e) {
    //console.log(e.target);
    //var x = e.target.previousElementSibling;
    //var y = e.target.parentElement;
    //console.log(x);
    itemList.innerHTML="";
}

// //Add to Local storage
// function addToStorage(e){
//     var val=document.getElementById('inpt').value;
//     console.log(val);

//     var tasks;
//     if(localStorage.getItem('tasks')) 
//         tasks=JSON.parse(localStorage.getItem('tasks'));
//     else
//         tasks=[];

//     localStorage.setItem('tasks',JSON.stringify(tasks));
//     tasks.push(val);
//     localStorage.setItem('tasks',JSON.stringify(tasks));

//     e.preventDefault();
// }
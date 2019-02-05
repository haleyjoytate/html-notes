document.addEventListener('DOMContentLoaded', onLoadContent('clicked')) 

function onLoadContent(){
//this button should get value from yay input
//and when press we should add a new li to 
//our things list
  document
        .getElementById('yay-btn')
        .addEventListener('click', function (){
          let addItem = document.getElementById('yay-input').value
        console.log("New List Item", newItem);
        });

//Add a lister to the input elemnt with an id yay-input
// This listener sould console.log the event
document
    .getElementById('yay-input')
    .addEventListener('keyup', keyInputAddItem); 
          

      
      function keyInputAddItemm (event) {
        console.log("Keyup input: ", this.value);
      }

 
 //object constructor
      let arr = ["thing", "saddle", "help", "string", "ride", "buy"]

//array for numbers

 let numbers = []
//array for content
 let content = []
 for (var i = 0; i< arr.length; i++){
   if(typeof arr [i] === 'string') {
     content.push(arr[i])
} else if (typeof arr[i] === 'number') {
  numbers.push(arr[i])
}
}


//make sure it works
console.log(content)

var ulList = document.getElementById('things-list')

for (var i = 0; i< content.length; i++) {
let listItem = document.createElement('li')
 listItem.textContent = content[i]
 ulList.append(listItem)
}



//document.getElementById('things-list')

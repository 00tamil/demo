// const htmlCollection= document.querySelector("#Todo-List")
// const element= document.getElementsByClassName('item')
// const newItems= document.createElement('li')
//       newItems.classList.add('item')
//       newItems.innerHTML="item3"
//       htmlCollection.appendChild(newItems)
// // console.log(htmlCollection)
// for(Item of element){
//     console.log(Item)
// }

const todoList = document.querySelector("#Todo-List")
const element= document.getElementsByClassName('item')
const button = document.querySelector('.submit')
const totalRecord = document.querySelector('.Records')
const TextElement = document.querySelector('.inpText')
button.addEventListener('click',function(){
    const newItems = document.createElement('li')
    newItems.classList.add('item')
    newItems.innerHTML= `${TextElement.value}`
    todoList.appendChild(newItems)
    totalRecord.innerHTML=`${element.length}`; 
   newItems.addEventListener('click', function(){
     newItems.remove()
     totalRecord.innerHTML=`${element.length}`;
   })
})
// totalRecord.innerHTML=`${element.length}`;
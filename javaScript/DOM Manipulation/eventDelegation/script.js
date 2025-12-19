let add=document.querySelector('#add');
let ul = document.querySelector('#list');


// add events dynamically

add.addEventListener('click',()=>{
    //create element
   const li = document.createElement('li');
   li.textContent = ('Item' + (ul.children.length + 1));
   ul.appendChild(li);
})



//event delegation
ul.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        alert('you clicked '+e.target.textContent);
            e.target.classList.toggle('active');
            e.target.remove();

    
    }
});


// //event delegation for delete items
// ul.addEventListener('click',(e)=>{
//     if(e.target.tagName === 'LI'){
//      e.target.remove();                 
//     }
//})

// //event delegation for color changes
// ul.addEventListener('click',(e)=>{
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle('active');
//     }
// })
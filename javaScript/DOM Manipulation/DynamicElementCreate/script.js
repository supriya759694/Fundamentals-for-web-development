let add = document.querySelector('#add');

add.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent = Math.floor(Math.random()*100);
    document.querySelector('ul').appendChild(li);
});
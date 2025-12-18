// //1. Change text of an html Element

// let text = document.querySelector('#text');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click',()=>
//     {
//         text.textContent = 'Welcome, to this JavaScript Series';
//         btn.style.color ='blue';
//         btn.style.backgroundColor ="crimson";
//         btn.style.padding ="10px 20px";
//         btn.style.border ="none";
//         btn.style.cursor ="pointer";
//     })



// // 2. show input value

// let input = document.querySelector('#input');
// let output = document.querySelector('#output');

// input.addEventListener('input',()=>{
//     output.textContent = input.value || 'Start Typing.........';
// })


// //3. Toggle visibility

// let box = document.querySelector('.box');
// let toggle = document.querySelector('#toggle');
// toggle.style.color = 'blue';
// toggle.style.fontWeight = '800';
// toggle.style.padding = '15px 25px';
// toggle.style.backgroundColor= 'crimson';
// toggle.style.cursor= 'pointer';




// toggle.addEventListener('click', ()=>{
//   box.style.display  =  box.style.display === 'none'?'block':'none';
// })

//4. Add class to Element
let btn = document.querySelector('#btn');
let box = document.querySelector('.box');

// btn.addEventListener('click',()=>{
//   box.classList.add('active');
// })

// btn.addEventListener('click',()=>{
//   box.classList.remove('active');
// })

btn.addEventListener('click',()=>{
  box.classList.toggle('active');
})
  // 5. count cards
  let card = document.querySelector('#card');
  let cards = document.querySelectorAll('.cards');

  card.addEventListener('click',()=>{
    const count = cards.length;
    alert("total cards" + count);
  })

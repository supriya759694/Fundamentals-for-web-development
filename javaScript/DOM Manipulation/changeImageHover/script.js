const img = document.querySelector('#myimg');


img.addEventListener('mouseover',()=>{
    img.src = 'pic2.jpg';
})

img.addEventListener('mouseout',()=>{
    img.src = 'download.jpg';
})
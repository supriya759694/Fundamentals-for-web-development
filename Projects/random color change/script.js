
const btn = document.getElementById("btn")
const box =document.getElementById("box1")

btn.addEventListener("click",()=>{
    let r =Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = `rgb(${r},${g},${b})`;

    box.style.backgroundColor = color;
})
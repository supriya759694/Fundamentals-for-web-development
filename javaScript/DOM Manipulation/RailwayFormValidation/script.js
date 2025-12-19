let submit = document.querySelector('#submit');
let error = document.querySelector('#error');


submit.addEventListener('click', ()=> {

    const name=document.querySelector('#name').value.trim();
    const age = document.querySelector('#age').value;
    const gender = document.querySelector('#gender').value;
    const from = document.querySelector('#from').value.trim();
    const to = document.querySelector('#to').value.trim();


    if(name === ""){
        showError("Passenger name is required");
    }
    else if(age=== "" || age<=0 || age>120){
        showError("enter valid age (1-120)")
    }
    else if(gender === ""){
        showError("please select gender");
    }
     else if (from === "") {
    showError("From station required");
  }
  else if (to === "") {
    showError("To station required");
  }
  else{
    error.textContent=" ✅ Ticket Booked Successfully";
    error.style.color ="green";
  }
});

function showError(message){
    error.textContent = "❌ " + message;
    error.style.color = "red";
}
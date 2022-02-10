// handler deposit button event

document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount deposite
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    console.log(depositTotal.innerText);
   depositTotal.innerText = depositAmount;
})
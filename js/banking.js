// handler deposit button event

document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount deposite
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount =parseFloat(newDepositText);
    //console.log(depositAmount);
    
    //update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmoutn = parseFloat(previousDepositText);
    const newDepositTotal =previousDepositAmoutn + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear input field
    depositInput.value = '';

});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    console.log(withdrawInput);
})
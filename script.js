let balance=Number(document.getElementById('balance').innerText);


function credit(){
    let amount = parseFloat(document.getElementById('amount').value);
    balance = balance + amount;
    document.getElementById('balance').innerText=balance;
    document.getElementById('amount').value = '';
}

function debit(){
    let amount = parseFloat(document.getElementById('amount').value);
    if (amount <= balance) {
        balance= balance - amount;
        document.getElementById('balance').innerText=balance;
        document.getElementById('amount').value = '';

    } else if(amount>balance) {
        alert('Amount cannot be withdrawn, Insufficient balance!')
    } 
}

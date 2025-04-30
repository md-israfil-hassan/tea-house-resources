// Log Out Btn section

document.getElementById('log-out-btn').addEventListener('click', function(event){
event.preventDefault()
 window.location.href ='/login.html'

})

//Card Section 
// first Card 
document.getElementById('first-order-btn').addEventListener('click', function(){

    const accountBalance = document.getElementById('account-balance').innerText ;
    const balance = parseFloat(accountBalance) ;
    
const paymentBalance = document.getElementById('payment-balance').innerText ;
const payment = parseFloat(paymentBalance) ;
const addProduct = document.getElementById('add-products').innerText ;
const product = parseFloat(addProduct) ;

if( balance > payment ){
    
    const resumeBalance = balance - payment ; 
    document.getElementById('account-balance').innerText = resumeBalance;
    document.getElementById('add-products').innerText = product + 1;
}

}) ;
//second Card
document.getElementById('second-order-btn').addEventListener('click', function(){

    const accountBalance = document.getElementById('account-balance').innerText ;
    const balance = parseFloat(accountBalance) ;
    
const paymentBalance = document.getElementById('second-payment-balance').innerText ;
const payment = parseFloat(paymentBalance) ;
const addProduct = document.getElementById('add-products').innerText ;
const product = parseFloat(addProduct) ;

if( balance > payment ){
    
    const resumeBalance = balance - payment ; 
    document.getElementById('account-balance').innerText = resumeBalance;
    document.getElementById('add-products').innerText = product + 1;
}

})
// third Card
document.getElementById('third-order-btn').addEventListener('click', function(){

    const accountBalance = document.getElementById('account-balance').innerText ;
    const balance = parseFloat(accountBalance) ;
    
const paymentBalance = document.getElementById('third-payment-balance').innerText ;
const payment = parseFloat(paymentBalance) ;
const addProduct = document.getElementById('add-products').innerText ;
const product = parseFloat(addProduct) ;

if( balance > payment ){
    
    const resumeBalance = balance - payment ; 
    document.getElementById('account-balance').innerText = resumeBalance;
    document.getElementById('add-products').innerText = product + 1;
}

})
// fourth Card
document.getElementById('fourth-order-btn').addEventListener('click', function(){

    const accountBalance = document.getElementById('account-balance').innerText ;
    const balance = parseFloat(accountBalance) ;
    
const paymentBalance = document.getElementById('fourth-payment-balance').innerText ;
const payment = parseFloat(paymentBalance) ;
const addProduct = document.getElementById('add-products').innerText ;
const product = parseFloat(addProduct) ;

if( balance > payment ){
    
    const resumeBalance = balance - payment ; 
    document.getElementById('account-balance').innerText = resumeBalance;
    document.getElementById('add-products').innerText = product + 1;
}

})
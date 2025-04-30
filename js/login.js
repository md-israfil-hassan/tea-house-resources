 document.getElementById('login-page').addEventListener('click', function(event){
event.preventDefault() ;


const email = document.getElementById('login-email').value ;
const password = document.getElementById('login-password').value ;

if( email === '01319'& password === '123#' ){
    
window.location.href ='/index.html'

}
else{
    alert('wrong Email/number & password')
}

 })
//  making p as link so that when the user clicks Create account a new Create account div will pop up 
function p(){
    let main=document.getElementById("main");
    main.style.display="block";
}
// stores name of user and tranfer them to next page
const form =document.getElementById('form');
const fullname =document.getElementById('fullname');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const fullnameValue=fullname.value;

    localStorage.setItem('full-name',fullnameValue);

    window.location.href="result.html";
})

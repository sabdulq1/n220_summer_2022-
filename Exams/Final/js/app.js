const form =document.getElementById('form');
const firstname =document.getElementById('firstname');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const firstnameValue=firstname.value;

    localStorage.setItem('first-name',firstnameValue);

    window.location.href="result.html";
})

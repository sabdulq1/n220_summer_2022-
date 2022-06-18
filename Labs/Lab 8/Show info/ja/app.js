function myFunction (button) {
    var x = button.id;
    switch (x) {
        case '1':
            myFunction1(x);
            var dvOutput = document.getElementById("dvOutput");
            dvOutput.style.display="block";
            break;
        case '2':
            myFunction2(x);
            break;
        case '3':
            myFunction3(x);
            break;
        default:
            return false;
    }
}

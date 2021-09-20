// document.getElementById('Button').addEventListener('click', function() {
//     document.querySelector('.bg-modal').style.display = 'flex';
// });



function myFunction() {
    var x = document.getElementsByClassName("bg-modal").item(0);
    x.style.display = "flex";
}



function myFunctionClose() {

    var v = document.getElementsByClassName("bg-modal").item(0);
    v.style.display = "none";
}
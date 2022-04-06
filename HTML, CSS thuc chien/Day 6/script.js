var content = document.getElementsByClassName('content-wrapper')
var initialText = document.getElementById('initialText')
console.log(content)
document.addEventListener("keydown", function(event){
    event.preventDefault();
    initialText.classList.add('undisplay-part')
    content[0].classList.remove('undisplay-part')
    var keyName = event.keyCode === 32 ? 'Space' : event.key;
    document.getElementById("keyCode").innerText = event.code;
    document.getElementById("keyPress").innerText = keyName;
    document.getElementById("keyWhich").innerText = event.which;
    document.getElementById("keyLocation").innerText = event.location;
    document.getElementById("keyNumber").innerText = event.which;
})
  
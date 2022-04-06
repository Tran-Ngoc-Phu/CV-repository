// Get the modal
var modal = document.getElementsByClassName('modal')

// Get the total number of image
var slideImage = document.getElementsByClassName('image')

// Get the close icon
var closedIcon = document.getElementById('closedIcon')

// Get the image
var image = document.getElementById('imageModal')

//Get the previous and next icon
var next = document.getElementById('nextArrow')
var previous = document.getElementById('previousArrow')

var currentNumber

function showImage(event, currentNumberImage){
    image.src = event.src
    modal[0].classList.add("showModal")
    currentNumber = currentNumberImage
    if(currentNumber <= 0) {
        previous.style.display = "none"
    }
    if(currentNumber >= slideImage.length - 1){
        next.style.display = "none"
    }
}
function closeModal(){
    modal[0].classList.remove("showModal")
}

function plusImage(number){
    currentNumber += number
    if(currentNumber >= slideImage.length - 1) {
        currentNumber = slideImage.length - 1
        next.style.display = "none"
    }
    else{
        next.style.display = "initial"
    }
    if(currentNumber <= 0) {
        currentNumber = 0
        previous.style.display = "none"
    }
    else{
        previous.style.display = "initial"
    }
    image.src = slideImage[currentNumber].src
}
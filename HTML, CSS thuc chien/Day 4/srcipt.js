var modal = document.getElementsByClassName('modal')

var closeButton = document.getElementById('closedIcon')

var imageModal = document.getElementById('imageModal')

var previousIcon = document.getElementById('previousIcon')

var imageGallery = document.getElementsByClassName('image')

var previousIcon = document.getElementById('previousIcon')

var nextIcon = document.getElementById('nextIcon')

var currentImage

function openModal(event, currentImageNumber){
    imageModal.src = event.src
    modal[0].classList.add('modal-animation')
    currentImage = currentImageNumber
    if(currentImage <= 0){
        previousIcon.style.display = "none"
    }else{
        previousIcon.style.display = "initial"
    }
    if(currentImage >= imageGallery.length - 1){
        nextIcon.style.display = "none"
    }else{
        nextIcon.style.display = "initial"
    }
}

closeButton.onclick = function(){
    modal[0].classList.remove('modal-animation')
}

function changeImage(addingValue){
    currentImage += addingValue
    if(currentImage <= 0){
        previousIcon.style.display = "none"
    }else{
        previousIcon.style.display = "initial"
    }
    if(currentImage >= imageGallery.length - 1){
        nextIcon.style.display = "none"
    }else{
        nextIcon.style.display = "initial"
    }
    imageModal.src = imageGallery[currentImage].src


}
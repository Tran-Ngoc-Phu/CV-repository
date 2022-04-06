var searchButton = document.querySelector('.search-button')

searchButton.addEventListener('click', function(){
    this.parentNode.classList.toggle('active')
    this.previousElementSibling.focus()
})
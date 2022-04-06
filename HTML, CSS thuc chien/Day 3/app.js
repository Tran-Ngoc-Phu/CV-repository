var modal = document.querySelector('.modal');
var openModal = document.querySelector('.open-modal');
var closeBtn = document.querySelector('.modal-footer button');
var closeIcon = document.querySelector('.modal-header i');

function toggleModal(){
	modal.classList.toggle('hide')
}
openModal.addEventListener('click', toggleModal)
closeBtn.addEventListener('click', toggleModal)
closeIcon.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) =>{
    if(e.target == e.currentTarget) toggleModal()
})

var inputTags = document.querySelector('.input-tags')
var content = document.querySelector('.content')

inputTags.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        var contentLi = document.querySelectorAll('.content li')
        var arrayConvert = Array.from(contentLi)
        var dupplicatedValue = arrayConvert.some(element => element.innerText.trim() == inputTags.value.trim())
        if(!dupplicatedValue){
            if(contentLi.length == 0){
                content.insertAdjacentHTML("afterbegin",`
                <li>
                    ${inputTags.value}
                    <i class="fas fa-times" onclick="deleteTag(this)"></i>
                </li>
                `)
            }else{
                contentLi[contentLi.length - 1].outerHTML += 
                `
                    <li>
                        ${inputTags.value}
                        <i class="fas fa-times" onclick="deleteTag(this)"></i>
                    </li>
                `
            }
            
            content = document.querySelector('.content')
        }
        
        inputTags.value = ''
    }
})

function deleteTag(element){
    content.removeChild(element.parentNode)
}

function deleteAllTag(){
    var contentLi = document.querySelectorAll('.content li')
    var contentLiLength = contentLi.length
    for(let i = 0; i < contentLiLength; i++){
        content.removeChild(contentLi[i])
    }
}
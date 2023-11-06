const ul = document.querySelector('ul')
const inputValue = document.getElementById('inputValue')
const button = document.getElementById('submit')
let index= 0
function submitHandler(){
    index += 1
    const li = document.createElement('li')
    const text = document.createElement('div')
    const buttons = document.createElement('div')
    const DelBtn = document.createElement('i')
    const EdtBtn = document.createElement('i')
    li.appendChild(text)
    li.appendChild(buttons)
    ul.appendChild(li)
    buttons.appendChild(DelBtn)
    buttons.appendChild(EdtBtn)
    text.textContent = inputValue.value
    text.setAttribute('class','text')
    li.setAttribute('id',`${index}`)
    buttons.setAttribute('class','buttons')
    EdtBtn.setAttribute('class',"fas fa-edit")
    DelBtn.setAttribute('class','fa fa-trash')
    DelBtn.setAttribute('onclick',`DelItem(${index})`)
    EdtBtn.setAttribute('onclick',`EdtItem(${index})`)
    inputValue.value = ""
}
function DelItem(val){
    const li = document.getElementById(val)
    li.remove()
}

function EdtItem(val){
    const li = document.getElementById(val)
    button.textContent = "Edit"
    // console.log(inputValue.value)
    inputValue.value = li.firstChild.innerText
    button.setAttribute('onclick',`NewEdtBtn(${val})`)
}
function NewEdtBtn(val){
    const li =document.getElementById(val)
    li.firstChild.innerText = inputValue.value
    inputValue.value = ''
    button.setAttribute('onclick','submitHandler()')
    button.textContent = "Submit"
}
function removeAlls(){
    const ul = document.querySelector('ul')
    while(ul.firstChild){
        ul.firstChild.remove()
    }
}
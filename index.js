const menu = document.querySelector('#menu')
const list = document.querySelector('#list')

menu.addEventListener('click', ()=>{
    if (list.style.display === 'none'){
      list.style.display = 'block'
    }else{
        list.style.display = 'none'
    }
     
})
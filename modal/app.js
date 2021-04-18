let blogcard=document.getElementsByClassName('blog-card')
let overlay=document.getElementById('overlay')
let closebutton=document.getElementById('close')

for(let i=0;i<blogcard.length;i++){
    blogcard[i].addEventListener('click',()=>{
      
        overlay.style.height='100%';
        overlay.style.opacity='100%';
        overlay.firstElementChild.firstElementChild.nextElementSibling.style.height='100%';
        
        overlay.firstElementChild.firstElementChild.firstElementChild.src=blogcard[i].firstElementChild.firstElementChild.src
        overlay.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML=blogcard[i].firstElementChild.nextElementSibling.firstElementChild.innerHTML
        overlay.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=blogcard[i].firstElementChild.nextElementSibling.nextElementSibling.innerHTML
    })
}
closebutton.onclick=()=>{
    overlay.firstElementChild.firstElementChild.nextElementSibling.style.height='0%';
    overlay.style.height='0%';
    overlay.style.opacity='0%';
}
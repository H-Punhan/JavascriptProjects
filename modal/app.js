let blogcard=document.getElementsByClassName('blog-card')
let overlay=document.getElementById('overlay')
let closebutton=document.getElementById('close')

for(let i=0;i<blogcard.length;i++){
    blogcard[i].addEventListener('click',()=>{
      
        overlay.style.height='100%';
        overlay.style.opacity='100%';
        
        overlay.firstElementChild.firstElementChild.firstElementChild.src=blogcard[i].firstElementChild.firstElementChild.src
    })
}
closebutton.onclick=()=>{
   
    overlay.style.height='0%';
    overlay.style.opacity='0%';
}
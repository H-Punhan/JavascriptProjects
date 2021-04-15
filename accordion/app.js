let accordion_header=document.getElementsByClassName('acc-header')

for(let i=0;i<accordion_header.length;i++){
    
    accordion_header[i].addEventListener('click',()=>{
        for(let x=0;x<accordion_header.length;x++){
            accordion_header[x].nextElementSibling.style.padding='0px'
            accordion_header[x].nextElementSibling.style.height='0px'
            
        }
        if(accordion_header[i].nextElementSibling.clientHeight<=0){
            accordion_header[i].nextElementSibling.style.height='auto'
            accordion_header[i].nextElementSibling.style.padding='10px'
        }
        else{
            accordion_header[i].nextElementSibling.style.height='0px'

            accordion_header[i].nextElementSibling.style.padding='0px'
        }
    })
}
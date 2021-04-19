let screen=document.getElementById('screen')
let btn=document.getElementsByClassName('btn')
let result=document.getElementById('result')
let clear=document.getElementById('clear')

for(let i=0;i<btn.length;i++){
  
    btn[i].onclick=()=>{
        screen.innerHTML+=btn[i].innerHTML
       
    }
}
result.onclick=()=>{
   
    
    if(screen.innerHTML!=null){
        screen.innerHTML=eval(screen.innerHTML)
    }
    
    
    
}

clear.onclick=()=>{
    screen.innerHTML=null
}
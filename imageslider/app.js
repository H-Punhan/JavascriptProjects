let right=document.getElementById('right')
let img=document.getElementsByClassName('img')
let sliderwidth=document.getElementById('slider').clientWidth
let textbar=document.getElementById('textbar')
let leftValue=0
let nindex=0
let names=[]
for(let i=0;i<img.length;i++){
    names.push(img[i].alt)
}




right.onclick=()=>{
    leftValue+=sliderwidth
    nindex+=1
    if(nindex>names.length-1){
        nindex=0
    }
    if(leftValue>(sliderwidth*img.length)-sliderwidth){
        leftValue=0
        
    }
    for(let i=0;i<img.length;i++){
        img[i].style.left=-leftValue+"px"
        textbar.innerHTML=names[nindex]


        
    }
    

}
left.onclick=()=>{
    leftValue-=sliderwidth
    nindex-=1
    if(nindex<0){
        nindex=names.length-1
    }
    if(leftValue<0){
        leftValue=sliderwidth*(img.length-1)
        
    }
    for(let i=0;i<img.length;i++){
        img[i].style.left=-leftValue+"px"
        textbar.innerHTML=names[nindex]


        
    }
    

}



textbar.innerHTML=names[nindex]

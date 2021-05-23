const canvas=document.getElementById('canvas')

let ctx=canvas.getContext('2d')

const SPEED=5

const COLLUSIONRADIUS=20

let startgame=null

let snake={
    x_pos:0,
    y_pos:0,
    width:20,
    height:20,
    color:'lightgreen'
    
}

let object={
    x:0,
    y:0,
    height:20,
    width:20,
    color:'red'
}


let commands=[
    {
        command:'w',
        x:0,
        y:-1,

    },
    {
        command:'s',
        x:0,
        y:1,

    },
    {
        command:'a',
        x:-1,
        y:0,
    },
    {
        command:'d',
        x:1,
        y:0,

    }
]

window.addEventListener('keyup',(key)=>{
   
    for(let keyindex=0;keyindex<commands.length;keyindex++){
        if(key.key==commands[keyindex].command){
            
            clearInterval(startgame)
            startgame=setInterval(()=>{
              
                snake.x_pos+=commands[keyindex].x
                snake.y_pos+=commands[keyindex].y

                document.getElementById('score').innerHTML=`
                snake:${snake.x_pos}-${snake.y_pos}
                </br>
                object:${'s'}
                `
                if(snake.x_pos>canvas.clientWidth){
                    snake.x_pos=-5
                }

                else if(snake.x_pos<-10){
                    snake.x_pos=canvas.clientWidth
                    // console.log(canvas.clientWidth)
                    // console.log(snake.x_pos)
                   
                }

                else if(snake.y_pos>canvas.clientHeight){
                    snake.y_pos=-5
                }

                else if(snake.y_pos<-10){
                    snake.y_pos=canvas.clientHeight

                }
              
                //background
                ctx.fillStyle='black'
                ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)

                //snake
                ctx.fillStyle=snake.color
                ctx.fillRect(snake.x_pos,snake.y_pos,snake.width,snake.height)

                //object 
                ctx.fillStyle=object.color
                ctx.fillRect(object.x,object.y,object.width,object.height)

                if (object.x-COLLUSIONRADIUS<snake.x_pos && snake.x_pos<object.x+COLLUSIONRADIUS && object.y-COLLUSIONRADIUS<snake.y_pos && snake.y_pos<object.y+COLLUSIONRADIUS){
                    changeObjectposition()
                    
                }
                
            },SPEED)
           
         
       
        }
    }
   
 
})

function  changeObjectposition(){
    object.x=Math.floor(Math.random()*canvas.clientWidth)*1

    object.y=Math.floor(Math.random()*canvas.clientHeight)*1
   
    
}


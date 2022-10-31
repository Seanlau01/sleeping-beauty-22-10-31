var cs=$('canvas')[0]
var $bx=$('.bx')
var $cute=$('.cuteGirl')
var ctx=cs.getContext('2d')
var cs_W=window.innerWidth
var cs_H=window.innerHeight
$('.bx').css({'width':cs_W,'height':cs_H})
var r=50
var ML=(cs_W - $cute.width())/2
var MT=(cs_H - $cute.height())/2
var clipLeft=ML<0?0:ML
var clipTop=MT<0?0:MT
var arcObj={x:(cs_W - 2*r - 2*clipLeft)*Math.random()+r+clipLeft,y:(cs_H - 2*r - 2*clipTop)*Math.random()+r+clipTop}
cs.width=cs_W
cs.height=cs_H
let image=new Image()
image.src='cuteGirl.webp'
image.onload=function(){
   drawCircle()
}
$('.cuteGirl').css({'left':ML+'px','top':MT+'px'})
window.onresize=function(){
    cs_W=window.innerWidth
    cs_H=window.innerHeight
    $('.bx').css({'width':cs_W,'height':cs_H})
    r=50
    ML=(cs_W - $cute.width())/2
    MT=(cs_H - $cute.height())/2
    clipLeft=ML<0?0:ML
    clipTop=MT<0?0:MT
    arcObj={x:(cs_W - 2*r - 2*clipLeft)*Math.random()+r+clipLeft,y:(cs_H - 2*r - 2*clipTop)*Math.random()+r+clipTop}
    cs.width=cs_W
    cs.height=cs_H
    image=new Image()
    image.src='cuteGirl.webp'
    image.onload=function(){
    drawCircle()
    }
    $('.cuteGirl').css({'left':ML+'px','top':MT+'px'})
}
function drawCircle(){
    ctx.save()
    ctx.clearRect(0,0,cs_W,cs_H)
    ctx.beginPath()
    ctx.arc(arcObj.x,arcObj.y,r,0,Math.PI*2)
    ctx.clip()
    ctx.drawImage(image,
        ML>0?0:-ML,MT>0?0:-MT,
        Math.min($cute.width(),cs_W),Math.min($cute.height(),cs_H),
        ML>0?ML:0,MT>0?MT:0,
        Math.min($cute.width(),cs_W),Math.min($cute.height(),cs_H))
        ctx.closePath()
        ctx.restore()    
}
show.addEventListener('click',function(){
    let timer=setInterval(function(){
        r+=30
        if(r>Math.sqrt(Math.min(cs_W,$cute.width())*Math.min(cs_W,$cute.width())+
        Math.min(cs_H,$cute.height())*Math.min(cs_H,$cute.height()))){
          clearInterval(timer)
        }
         drawCircle()
    },50)
})
reset.onclick=function(){
    r=50
    arcObj={x:(cs_W - 2*r - 2*clipLeft)*Math.random()+r+clipLeft,y:(cs_H - 2*r - 2*clipTop)*Math.random()+r+clipTop}
        drawCircle()
}
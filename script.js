const bg=document.querySelector('.bg')
const loadingText=document.querySelector('.loading-text')

var count = 100

function increase() {
if(count<=100) {
        count=count-1;
    }if(count<=0){
        clearInterval(intervalId)   
    }
    
    loadingText.innerHTML=count+"%"
    bg.style.filter ="blur("+count+"px)";
    loadingText.style.opacity=count+"%"
   }
intervalId= setInterval(increase,90);

       

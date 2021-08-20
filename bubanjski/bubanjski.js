const slider=document.querySelector('.slider')
const sliderContainer=document.querySelector('.slider-container')
let sliderPosition=0
const sliderRight=document.querySelector('#slider-arrow-right')
const sliderLeft=document.querySelector('#slider-arrow-left')
function sliderGo() {
    if (sliderPosition===-400) {
        sliderPosition=0
    }else{
        sliderPosition-=100
    }   
    slider.style.translate=`${sliderPosition}%`
}
let id = setInterval(sliderGo,2000)
sliderContainer.addEventListener('mouseenter',function () {    
    clearInterval(id)
})
sliderContainer.addEventListener('mouseleave',function(){    
    id=setInterval(sliderGo,2000)
})
sliderRight.addEventListener('click',function (evt) {    
    if (sliderPosition===-400) {
        sliderPosition=0
    }else{
        sliderPosition-=100
    }   
    slider.style.translate=`${sliderPosition}%`
    
})
sliderLeft.addEventListener('click',function (evt) {    
    if (sliderPosition===0) {
        sliderPosition=-400
    }else{
        sliderPosition+=100
    }    
    slider.style.translate=`${sliderPosition}%`
    
})


const navLis= document.querySelectorAll('.nav >li')
for (const li of navLis) {      
    const link=li.querySelector('a')    
    const menu=li.querySelector('.menu-nav')
    link.addEventListener('mouseenter',function(evt) {
        
        link.style.color='orange'
        if (menu!==null) {
            menu.style.visibility='visible'       
            menu.style.opacity='1' 
        }                    
        
    })
    li.addEventListener('mouseleave',function (evt) {
        if (!li.classList.contains('active')) {
            link.style.color='black'
        }  
        if (menu!==null) {
            menu.style.opacity='0'
            menu.style.visibility='hidden' 
        }                
                
    })
}
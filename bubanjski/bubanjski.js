function createDots(beforeElement,numberOfDots) {
    const dotsContainer=document.createElement('div')
    dotsContainer.classList.add('slider-dots')
    console.log(numberOfDots);
    for (let i = 0; i < numberOfDots; i++) {
        const dot=document.createElement('span')
        dot.classList.add('slider-dot')
        dot.addEventListener('click',function(evt) {
            sliderSwap(i)        
        })    
        if (i===0) {
            dot.classList.add('slider-dot-colored')
        }
        dotsContainer.appendChild(dot)        
    }
    beforeElement.insertAdjacentElement('afterend',dotsContainer)
}
const slider=document.querySelector('.slider')
const sliderContainer=slider.parentElement
const sliderImages=document.querySelectorAll('.slider-img-js')
createDots(slider,sliderImages.length)
let sliderPosition=0
const slideInterval=2000
const sliderRight=document.querySelector('#slider-arrow-right')
const sliderLeft=document.querySelector('#slider-arrow-left')
const dots= document.querySelectorAll('.slider-dot')


let selectedImage=0

function sliderSwap(newSelected) {
    if (newSelected===sliderImages.length) {
        newSelected=0
    }else if (newSelected===-1) {  
        newSelected=sliderImages.length-1
    }
    sliderPosition=newSelected*-100
    slider.style.translate=`${sliderPosition}%`
    dots[selectedImage].classList.remove('slider-dot-colored')
    dots[newSelected].classList.add('slider-dot-colored')   
    selectedImage=newSelected
    
}

function slideToRight() {     
    sliderSwap(selectedImage+1)   
}
function slideToLeft() {    
    sliderSwap(selectedImage-1)         
}

let id = setInterval(slideToRight,slideInterval)
sliderContainer.addEventListener('mouseenter',function () {    
    clearInterval(id)
})
sliderContainer.addEventListener('mouseleave',function(){    
    id=setInterval(slideToRight,slideInterval)
})
sliderRight.addEventListener('click',slideToRight)
sliderLeft.addEventListener('click',slideToLeft )

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
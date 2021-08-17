let sliderImages = ['file:///home/bobakpd/Documents/web_desing/bubanjski/slika1.jpg','file:///home/bobakpd/Documents/web_desing/bubanjski/slika2.jpg','file:///home/bobakpd/Documents/web_desing/bubanjski/slika3.jpg','file:///home/bobakpd/Documents/web_desing/bubanjski/slika4.jpg','file:///home/bobakpd/Documents/web_desing/bubanjski/slika5.jpg']
let sliderArrowRight= document.querySelector('#slider-arrow-right')
let sliderArrowLeft= document.querySelector('#slider-arrow-left')
let sliderImage=document.querySelector('#slider-img')
let sliderImageIndex = 0
const sliderContainer= document.querySelector('.slider-container')
const sliderNavs=document.querySelector('.slider-navs')
sliderContainer.addEventListener('mouseover',function (e) {
    sliderNavs.style.opacity='1'
    clearInterval(id)
})
sliderContainer.addEventListener('mouseout',function (e) {
    sliderNavs.style.opacity='0'
    id=setInterval(slideToRight,3000)
})
const slideToRight = function () {  
    if (sliderImageIndex===sliderImages.length-1) {
        sliderImageIndex=0
    }else{
        sliderImageIndex+=1
    }      
    sliderImage.setAttribute('src',`${sliderImages[sliderImageIndex]}`)
    sliderDots[sliderImageIndex].classList.toggle('slider-dot-colored')
    if (sliderImageIndex===0) {
        sliderDots[sliderDots.length-1].classList.toggle('slider-dot-colored')
    }else{
        sliderDots[sliderImageIndex-1].classList.toggle('slider-dot-colored')
    }
    
}   

const slideToLeft = function () {
    if (sliderImageIndex===0) {
        sliderImageIndex=sliderImages.length-1
    }else {
        sliderImageIndex-=1
    }
    sliderImage.setAttribute('src',`${sliderImages[sliderImageIndex]}`)
    sliderDots[sliderImageIndex].classList.toggle('slider-dot-colored')
    if (sliderImageIndex===sliderDots.length-1) {
        sliderDots[0].classList.toggle('slider-dot-colored')
    }else {
        sliderDots[sliderImageIndex+1].classList.toggle('slider-dot-colored')
    }
}
let id=setInterval(slideToRight,2000)



sliderArrowRight.addEventListener('click',slideToRight )
sliderArrowLeft.addEventListener('click',slideToLeft )
const dotsContainer= document.querySelector('.slider-dots')
for (let i = 0; i < sliderImages.length; i++) {
    const newDot =document.createElement('span')
    newDot.classList.add('slider-dot')
    dotsContainer.appendChild(newDot)    
}
const sliderDots= document.querySelectorAll('.slider-dot')
sliderDots[0].classList.add('slider-dot-colored')

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
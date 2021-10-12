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
    const menu=li.querySelector('.menu-nav')
    const link=li.children[0]     
    
    link.addEventListener('mouseenter',function (evt) {
        if (menu) {
            menu.classList.add('menu-nav-visible') 
            li.addEventListener('mouseleave',function (evt) {                
                menu.classList.remove('menu-nav-visible')
            })  
            
            li.addEventListener('mousedown',function (evt) {
                
                menu.classList.add('menu-nav-ss-show')
                nav.classList.remove('nav-visible')
            })
            const back= menu.children[0]
            back.addEventListener('click',function (evt) {                
                menu.classList.remove('menu-nav-ss-show')
                nav.classList.add('nav-visible')
                evt.stopPropagation()
            })
        }
    })    
}

const menuButton=document.querySelector('.menu-button')
const nav=document.querySelector('.nav')

menuButton.addEventListener('click',function(evt) {    
    const menu=document.querySelector('.menu-nav-ss-show')
    if (!menu) {
        nav.classList.toggle('nav-visible')
    }else{
        menu.classList.remove('menu-nav-ss-show')
    }     
})


//proverava da li node ili predak ima neku od zadatih klasa i vraca boolean
function ancestorHasClass(element, NizKlasa) {    
    while (element) {
        console.log(element);
        for (const klasa of NizKlasa) {
            if (element.classList.contains(klasa)) {            
                return true 
            }        
        }
            element=element.parentElement              
    }
    return false
}   

//proverava da li je element ( ili njegovi preci ) neki od elemenata iz niza
function ancestorIsNode(checkingElement, elementsToCheck) {    
    while (checkingElement) {
        console.log(checkingElement);
        if (elementsToCheck.indexOf(checkingElement)>-1) {
            return true
        }        
        checkingElement = checkingElement.parentElement
    }
}
/*
//logika za funkciju ancestorIsNode
window.addEventListener('click',function (evt) {
    let turnOf=true  
    const arrayToCheck = [menuButton,...navLis]
     if ( ancestorIsNode(evt.target, arrayToCheck) ) {
        turnOf= false
    } 
    
    if (turnOf) { 
        const menu= document.querySelector('.menu-nav-ss-show') 
        if (menu) {
            menu.classList.remove('menu-nav-ss-show')
        }                     
        nav.classList.remove('nav-visible')
    }
})
*/


//logika za funkciju ancestorHasClass
window.addEventListener('click',function (evt) {
    let turnOf=true  

     if ( ancestorHasClass(evt.target, ['nav','menu-button']) ) {
        turnOf= false
    }    
    
    if (turnOf) { 
        const menu= document.querySelector('.menu-nav-ss-show') 
        if (menu) {
            menu.classList.remove('menu-nav-ss-show')
        }                     
        nav.classList.remove('nav-visible')
    }
})



menuButton.addEventListener('blur',function(evt) {          
    nav.classList.remove('nav-visible')        
})

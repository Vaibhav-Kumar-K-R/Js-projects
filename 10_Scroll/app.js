// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date=document.getElementById('date')
date.innerHTML=new Date().getFullYear()

// ********** close links ************
let linkscontainer=document.querySelector('.links-container')
let links=document.querySelector('.links')
let navbar=document.querySelector('.nav-toggle')
navbar.addEventListener('click',()=>{
     linkscontainer.classList.toggle('show-links')
    let containerheight=linkscontainer.getBoundingClientRect().height
    const linksheight=links.getBoundingClientRect().height
   if(containerheight===0){
    linkscontainer.style.height=`${linksheight}px`
   }else{
    linkscontainer.style.height=0
   }
})
let navbar1=document.getElementById('nav')
const topLink=document.querySelector('.top-link')
window.addEventListener('scroll',()=>{
    const scrollheight=window.pageYOffset
    const navHeight=navbar1.getBoundingClientRect().height
   if(scrollheight>navHeight ){
    navbar1.classList.add('fixed-nav')
    arrowup.classList.add('show-link')
   }else{
    navbar1.classList.remove('fixed-nav')
     arrowup.classList.remove('show-link')
   }
});
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
const scrollLinks=document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        let id=e.currentTarget.getAttribute('href').slice(1)
     let element=document.getElementById(id)
     let navHeight=navbar1.getBoundingClientRect().height
     let containerheight=linkscontainer.getBoundingClientRect().height;
     const fixednav=navbar1.classList.contains('fixed-nav')
     let position=element.offsetTop-navHeight
        if(!fixednav){

             position=element.offsetTop-navHeight
        }
         if (navHeight > 82) {
      position = position + containerheight;
    }
         
    window.scrollTo({
        left:0,
        top:position
    })
    linkscontainer.style.height=0
    })
})

let arrowup=document.querySelector('a>i').parentElement

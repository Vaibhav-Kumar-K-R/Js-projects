let value=document.getElementById('value')
let inc=document.querySelector('.increase')
let dec=document.querySelector('.decrease')
let reset=document.querySelector('.reset')
let i=0;
function setColor(i){
    if(i==0){
        value.style.color='#102a42'
    }else if(i>0){
        value.style.color='green'
    }else{
        value.style.color='red'
    }
}
inc.addEventListener('click',(e)=>{
    value.innerHTML=++i;
    setColor(i)
    
})
dec.addEventListener('click',()=>{
    value.innerHTML=--i;
    setColor(i)
})
reset.addEventListener('click',()=>{
   
    value.innerHTML=i=0;
    setColor(i)
})


let modalbtn=document.querySelector('.modal-btn')
let modaloverlay=document.querySelector('.modal-overlay')
let closebtn=document.querySelector('.close-btn')
modalbtn.addEventListener('click',()=>{
   modaloverlay.classList.add('open-modal');
})
closebtn.addEventListener('click',()=>{
     modaloverlay.classList.remove('open-modal');
})
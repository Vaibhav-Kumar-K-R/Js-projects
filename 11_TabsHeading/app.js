let btns=document.querySelectorAll('.btn-container>button')
let content=Array.from(document.querySelector('.about-content').children)
btns.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        btns.forEach((btn)=>{
            if(btn.classList.contains('active')){
                btn.classList.toggle('active')
            }
        })
        ele.classList.add('active')
        let selected=ele.getAttribute('data-id')
        content.forEach((el)=>{
            if(el.classList.contains('active')){
                el.classList.toggle('active')
            }
        })
        let div=document.getElementById(`${selected}`)
        div.classList.toggle('active')

       
        
    })
})
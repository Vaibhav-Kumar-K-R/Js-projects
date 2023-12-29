//using selectors inside the element
let questions=document.querySelectorAll('.question')
questions.forEach((ele1)=>{
    let qbtn=ele1.querySelector('.question-btn')
    qbtn.addEventListener('click',()=>{
        questions.forEach((ele)=>{
           console.log(ele);
           if(ele.classList.contains('show-text')&&!ele1.classList.contains('show-text')){
          ele.classList.toggle('show-text')
           }
        })
        ele1.classList.toggle('show-text')
    })
})
// traversing the dom
// let questionbtns=document.querySelectorAll('.question-btn')
// let questiontext=document.querySelectorAll('.question-text')
// questionbtns.forEach((ele)=>{
//     ele.addEventListener('click',show)
// })
// function show(e){
// e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//   e.currentTarget.classList.toggle('show-text')
// }



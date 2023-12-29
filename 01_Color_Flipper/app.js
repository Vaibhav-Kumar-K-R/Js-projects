const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let color= document.querySelector('.color')
document.querySelector('#btn').addEventListener('click',()=>{
    let randomNumber=Math.floor(Math.random()*colors.length);
   color.innerHTML=`${colors[randomNumber]}`
    document.body.style.backgroundColor=colors[randomNumber];
})
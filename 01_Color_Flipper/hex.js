const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let randomColor="#";
let color= document.querySelector('.color')
document.querySelector('#btn').addEventListener('click',()=>{

    for(let i=0;i<6;i++){
        let randomNumber=Math.floor(Math.random()*hex.length);
        randomColor+=hex[randomNumber];
    }
    color.innerHTML=`${randomColor}`
    document.body.style.backgroundColor=randomColor;
    randomColor="#"
   
}) 
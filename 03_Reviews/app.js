// local reviews data

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: './image-1.png',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: './image-2.png',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: './image-3.png',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: './image-4.png',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
let img=document.querySelector('#person-img');
let author=document.querySelector('#author');
let job=document.querySelector('#job');
let info=document.querySelector('#info');
let i=0;
window.addEventListener('DOMContentLoaded',()=>{
  showPerson(i)
})
document.querySelector('.prev-btn').addEventListener('click',()=>{
  i-=1
  if(i<0){
    i=reviews.length-1
  }
  showPerson(i)
})
document.querySelector('.next-btn').addEventListener('click',()=>{
  i+=1;
  if(i>reviews.length-1){
    i=0
  }
   showPerson(i)
})
document.querySelector('.random-btn').addEventListener('click',()=>{
  let randomNumber=Math.floor(Math.random()*reviews.length)
  showPerson(randomNumber)
})

function showPerson(n){
  const item=reviews[n]
  img.src=item.img;
  author.innerHTML=item.name
  job.innerHTML=item.job
  info.innerHTML=item.text
}
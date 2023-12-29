const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "Lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]
let section_center=document.querySelector('.section-center')
window.addEventListener('DOMContentLoaded',()=>{

  displayItems(menu)
})
let btns=document.querySelectorAll('.filter-btn')
btns.forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
      if(e.target.innerHTML==="All"){
        displayItems(menu)
        return
      }
      let m=menu.filter((ele)=>{
      return ele.category===e.target.innerHTML
      })
      displayItems(m)
    })
})

function displayItems(menu){
  section_center.innerHTML=""
   menu.map((ele)=>{
    let article=document.createElement('article')
    article.classList.add('menu-item')
    let img=document.createElement('img')
    img.classList.add('photo')
    img.src=`${ele.img}`
    article.appendChild(img)
    let div=document.createElement('div')
    div.classList.add('item-info')
    let header=document.createElement('header')
    let h41=document.createElement('h4')
    h41.innerHTML=`${ele.title}`
    let h42=document.createElement('h4')
    h42.innerHTML=`${ele.price}$`
    h42.classList.add('price')
    header.appendChild(h41)
    header.appendChild(h42)
    let p=document.createElement('p')
    p.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corrupti possimus, dicta ipsam optio nesciunt?'
    div.appendChild(header)
    div.appendChild(p)
    article.appendChild(div)
    section_center.appendChild(article)


  })
}


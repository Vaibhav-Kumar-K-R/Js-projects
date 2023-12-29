const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let giveaway=document.querySelector('.giveaway')
let deadline=document.querySelector('.deadline')
let items =document.querySelectorAll('.deadline-format h4')
let nextDate=new Date(2023,3,10,3,30,0)
let currDate=new Date()
if(currDate.getFullYear()===nextDate.getFullYear()){
  nextDate.setFullYear(currDate.getFullYear()+1)
}
let year=nextDate.getFullYear()
let month=nextDate.getMonth()
let day=nextDate.getDay()
let hours=nextDate.getHours()
let min=nextDate.getMinutes()
giveaway.textContent=`giveaway ends on ${weekdays[day]},${nextDate.getDate()} ${months[month]}  ${year} ${hours}:${min}am`
//
let futureTime=nextDate.getTime()

function getRemainingTime(){
    let today=new Date().getTime()
    let t=futureTime-today
    let oneday=24*60*60*1000
    const oneHour=60*60*1000
    let oneMinute=60*1000
    let days=Math.floor(t/oneday)
    let hours=Math.floor((t%oneday)/(oneHour))
    let minutes=Math.floor((t%oneHour)/oneMinute)
    let seconds=Math.floor((t%oneMinute)/1000)
    let values=[days,hours,minutes,seconds]
    items.forEach((item,index)=>{
      item.innerHTML=values[index]
    })


}
setInterval(()=>{
  getRemainingTime()
},1000)
console.log(currDate);
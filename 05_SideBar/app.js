let sidebar_toggle=document.querySelector('.sidebar-toggle')
let closebtn=document.querySelector('.close-btn')
let sidebar=document.querySelector('.sidebar')
sidebar_toggle.addEventListener('click',toggle)
closebtn.addEventListener('click',toggle)
function toggle(){
    sidebar.classList.toggle('show-sidebar');
}
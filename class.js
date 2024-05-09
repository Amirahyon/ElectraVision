const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon')
const menuIcon = document.querySelector('.line-icon');
const closeIcon = document.querySelector('.close')

function toggleMenu() {
    if(menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        icon.style.display = 'block';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menu.classList.add("show-menu");
        icon.style.display = 'none';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}
icon.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);



function showDateTime(){
    const now = new Date()
    let day = now.getDate() + 1;
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let slash = '/';
    let column = ':'
    let space = ' '
    let fullDate = hour + column + min;
    return fullDate
}
console.log(showDateTime());

console.log(span);
// switch (fullDate){
//     case 'hour >= 12' :
//         span.textContent = fullDate + 'pm';
//         break;
//     case 'hour < 12':
//         span.textContent = fullDate + 'am';
//         break;
// };





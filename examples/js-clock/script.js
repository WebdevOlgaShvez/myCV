setInterval(setClock, 1000);

 const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]'); 
const secondHand = document.querySelector('[data-second-hand]'); 
const time = document.querySelector('.time')

 function setClock() {
    const today= new Date();
    const seconds = (today.getSeconds()/60);
    const minutes = (today.getMinutes()/60);
    const hours = (minutes + today.getHours())/12;
  
    setRotation(secondHand, seconds); 
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours); 
 let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 let monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    day = days[today.getDay()];
    date =today.getDate();
    month = monthes[today.getMonth()];
    year = today.getFullYear();

time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${addZero(day)},  ${addZero(date)} ${addZero(month)} ${addZero(year)}`;
 
}

function setRotation(element, rotationRatio){

   element.style.setProperty('--rotation', rotationRatio*360)
 }; 

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
} 

setClock();
//dark mode
document.querySelector('.darkmode').addEventListener('click', (event) => {
   event.preventDefault();
   if (localStorage.getItem('theme') === 'dark') {
     localStorage.removeItem('theme');
   }
   else {
     localStorage.setItem('theme', 'dark')
   }
   addDarkClassToHTML()
 });
 
 function addDarkClassToHTML() {
   try {
     if (localStorage.getItem('theme') === 'dark') {
       document.querySelector('html').classList.add('dark');
       document.querySelector('.darkmode').textContent = 'Light mode';
       document.querySelector('.clock .hand.minute').classList.add('dark');
       document.querySelector('.darkmode').classList.remove('dark');
     }
     else {
       document.querySelector('html').classList.remove('dark');
       document.querySelector('.darkmode').textContent = 'Dark mode';
       document.querySelector('.clock .hand.minute').classList.remove('dark');
       document.querySelector('.darkmode').classList.add('dark');
     }
   } catch (err) { }
 }
 
 addDarkClassToHTML();

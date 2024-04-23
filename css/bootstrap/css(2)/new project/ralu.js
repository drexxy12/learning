const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const dayEl = document.getElementById('day')
const monthEl = document.getElementById('month')
const yearEl = document.getElementById('year')

const ampmEl= document.getElementById('ampm')

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let a = new Date().getDay()
    let b = new Date().getMonth()
    let c = new Date().getFullYear()
    let ampm ='AM'


 if (h > 12) {
    h = h - 12;
    ampm = 'PM'
}
h = h < 10 ? '0' + h : h
m = m < 10 ? '0' + m : m
s = s < 10 ? '0' + s : s
a = a = 10 ? '0' + a : a
b = b = 10 ? '0' + b : b

hourEl.innerText = h;
minuteEl.innerText = m;
secondsEl.innerText = s;
ampmEl.innerText = ampm;
dayEl.innerText = a;
monthEl.innerText = b;
yearEl.innerText = c;

setTimeout(() =>{
    updateClock()
}, 1000)
}
updateClock()
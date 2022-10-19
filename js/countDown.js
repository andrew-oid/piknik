
//event date
const EVENT_DATE = new Date(2022, 9, 22).getTime()

const mos = document.querySelector('#clock .months > section')
const dys = document.querySelector('#clock .days > section')
const hrs = document.querySelector('#clock .hours > section')
const mi = document.querySelector('#clock .minutes > section')
const s = document.querySelector('.s')

const counter = setInterval(() => {
  const { months, days, hours, mins, secs } = countDownToEvent(EVENT_DATE)
  mos.textContent = months || '00'
  dys.textContent = days || '00'
  hrs.textContent = hours || '00'
  mi.textContent = mins || '00'
  s.textContent = secs || '00'

}, 1000)

const countDownToEvent = (eventDate) => {
  const NOW = new Date().getTime()
  const EVENT = new Date(eventDate).getTime()

  const pad = (n) => (n < 10 ? '0' + n : n)

  let length = EVENT - NOW
  
  let months = pad(new Date(EVENT).getMonth() - new Date(NOW).getMonth())
  let days = pad(Math.floor(length / (1000 * 60 * 60 * 24)))
  let hours = pad(Math.floor((length % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  let mins = pad(Math.floor((length % (1000 * 60 * 60)) / (1000 * 60)))
  let secs = pad(Math.floor((length % (1000 * 60)) / 1000))
  
 
  if (length < 0) {
    return clearInterval(counter)
  }
  return { months, days, hours, mins, secs }
}

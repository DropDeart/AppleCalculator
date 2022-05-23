//DOM Elements(Document Object Model)
const hourEl = document.querySelector('.hour')
const minuteEL = document.querySelector('.minute')

//Set up the time

const updateTime = () => {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  const currenMinute = currentTime.getMinutes()

  hourEl.textContent = currentHour.toString()
  minuteEL.textContent = currenMinute.toString()
}
setInterval(updateTime, 1000)//1000-milisecond
updateTime();

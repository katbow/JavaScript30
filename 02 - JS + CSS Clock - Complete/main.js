var secondHand = document.querySelector('.second-hand')
var minHand = document.querySelector('.min-hand')
var hourHand = document.querySelector('.hour-hand')

function setDate () {
  var now = new Date()

  var seconds = now.getSeconds()
  var secondsDegrees = ((seconds / 60) * 360) + 90
  if (secondsDegrees === 90 || secondsDegrees === 96) toggleTransition(secondHand)
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  var mins = now.getMinutes()
  var minsDegrees = ((mins / 60) * 360) + 90
  if (minsDegrees === 90 || minsDegrees === 96) toggleTransition(minHand)
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  var hours = now.getHours()
  var hoursDegrees = ((hours / 12) * 360) + 90
  if (hoursDegrees === 90 || hoursDegrees === 120) toggleTransition(hourHand)
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

function toggleTransition (el) {
  el.classList.toggle('no-transition')
}

setInterval(setDate, 1000)

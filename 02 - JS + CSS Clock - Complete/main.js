var secondHand = document.querySelector('.second-hand')
var minHand = document.querySelector('.min-hand')
var hourHand = document.querySelector('.hour-hand')

function setDate () {
  var now = new Date()

  var seconds = now.getSeconds()
  var secondsDegrees = ((seconds / 60) * 360) + 90
  if (secondsDegrees === 90) removeTransition(secondHand)
  else if (secondsDegrees === 96) addTransition(secondHand)
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  var mins = now.getMinutes()
  var minsDegrees = ((mins / 60) * 360) + 90
  if (minsDegrees === 90) removeTransition(minHand)
  else if (minsDegrees === 96) addTransition(minHand)
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  var hours = now.getHours()
  var hoursDegrees = ((hours / 12) * 360) + 90
  if (hoursDegrees === 90) removeTransition(hourHand)
  else if (hoursDegrees === 120) addTransition(hourHand)
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

function removeTransition (el) {
  el.classList.add('no-transition')
}

function addTransition (el) {
  el.classList.remove('no-transition')
}

setInterval(setDate, 1000)

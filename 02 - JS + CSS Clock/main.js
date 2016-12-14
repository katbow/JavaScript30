var secondHand = document.querySelector('.second-hand')
var minHand = document.querySelector('.min-hand')
var hourHand = document.querySelector('.hour-hand')

function setDate () {
  var now = new Date()
  var seconds = now.getSeconds()
  var secondsDegrees = ((seconds / 60) * 360) + 90
  // could apply below to secs, mins, hours to avoid '90deg glitch'
  if (secondsDegrees === 90) {
    secondHand.className = 'hand second-hand no-transition'
  } else if (secondsDegrees === 96) {
    secondHand.className = 'hand second-hand'
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  var mins = now.getMinutes()
  var minsDegrees = ((mins / 60) * 360) + 90
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  var hours = now.getHours()
  var hoursDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)

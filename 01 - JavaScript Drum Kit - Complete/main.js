function playSound (e) {
  var audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  var key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

var keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function removeTransition (e) {
  if (e.propertyName !== 'transform') {
    this.classList.remove('playing')
  }
}

document.addEventListener('keydown', playSound)

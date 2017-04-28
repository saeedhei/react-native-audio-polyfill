import Audio from '../..'
import mp3Test from './mpthreetest.mp3'

let test

export const description = 'play with resource'

export default function() {
  test = new Audio(mp3Test)
  test.autoPlay = true
  console.log(test)
  test.addEventListener('canplay', evt => {
    test.play()
    console.log('canplay')
  })
}

export const unload = function() {
  test.pause()
}
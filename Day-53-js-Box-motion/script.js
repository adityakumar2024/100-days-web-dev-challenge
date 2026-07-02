 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!

  let time = gsap. timeline({
    paused:true
 })

time.to ("#square1",{
    rotation:360,
    duration: 3,
    backgroundColor: "black"
})

time.to ("#square2",{
    rotation:360,
    duration: 3,
    backgroundColor: "black"
})

time.to ("#square3",{
    rotation:360,
    duration: 3,
    backgroundColor: "black"
})

time.to ("#square4",{
    rotation:360,
    duration: 3,
    backgroundColor: "black"
})

time.to ("#square4",{
    rotation:360,
    duration: 3,
    backgroundColor: "black"
})

let play = document.querySelector("button1")
let pause = document.querySelector("button2")
let reverse = document.querySelector("button3")
let restart = document.querySelector("button4")
let timescale = document.querySelector("button4")

button1.addEventListener("click",() =>{
  time.play()
})

button2.addEventListener("click",() =>{
  time.pause()
})

button3.addEventListener("click",() =>{
  time.reverse()
})

button4.addEventListener("click",() =>{
  time.restart()
})

button5.addEventListener("click",() =>{
  time.timeScale()
})
 });






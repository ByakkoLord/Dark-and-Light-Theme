let altbtn = document.querySelector('#altmode');
let background = document.querySelector('body');
let submit_btn = document.querySelector('#submit-btn')

function alternate(){
    if (altbtn.classList.contains('fa-sun')) {
      setTimeout(function() {
        altbtn.classList.remove('fa-sun');
        altbtn.classList.add('fa-moon');
      }, 300)
        
        background.style.animation = 'colorsin forwards normal 2s'
        altbtn.style.animation = 'sunmoveout forwards ease 0.5s'

        submit_btn.addEventListener('mouseenter', function() {
          submit_btn.style.background = 'linear-gradient(to left,#3D2873, #593AA6 ,#564B73)'})
        submit_btn.addEventListener('mouseleave', function() {
          submit_btn.style.background = ''
        })
        
      } else if (altbtn.classList.contains('fa-moon')) {
        setTimeout(function() {
          altbtn.classList.remove('fa-moon');
          altbtn.classList.add('fa-sun');
        }, 300)

        altbtn.style.animation = 'sunmovein backwards ease 0.5s'
        background.style.animation = 'colorsout backwards normal 2s'

        submit_btn.addEventListener('mouseenter', function() {
          submit_btn.style.background = 'linear-gradient(100deg  ,#ffe53bd8, #ff2525da)'})
        submit_btn.addEventListener('mouseleave', function() {
          submit_btn.style.background = ''
        })
      }
    
}

let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

const relogio = setInterval(function time(){
  let dateToday = new Date()
  let hr = dateToday.getHours()
  let mn = dateToday.getMinutes()
  let s = dateToday.getSeconds()

  hours.textContent = hr
  minutes.textContent = mn
  seconds.textContent = s
})

let congra_display = document.querySelector('#congra')
let congra_btn = document.querySelector('#close_login')


  submit_btn.addEventListener('click', function verify(){
    congra_display.style.display = 'block'
  })

  congra_btn.addEventListener('click', function(){
    congra_display.style.display = 'none'
  })
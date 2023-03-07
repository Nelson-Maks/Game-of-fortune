let play_btn = document.querySelector('.play_btn')
let play_again = document.querySelector('.play_again')

let play = document.querySelector('.play')

let get_started = document.querySelector('.get_started')

let start_container = document.querySelector('.start_container')
let start = document.querySelector('.start')

let form = document.querySelector('.form')



get_started.addEventListener('click', (e)=>{
    e.preventDefault(),
    start_container.style.display = 'flex'
})

start.addEventListener('click', (e)=>{
    e.preventDefault();

    let p_name = document.querySelector('.p_name').value
    let s_amount = document.querySelector('.s_amount').value

    if(p_name === ''){
        alert('please enter Player name')
    }else{
        if(s_amount < 5){
            alert("pls enter stake amount must be 5 and above")
        }
        else{
            play.style.display = 'flex'
            start_container.style.display = 'none'
        }
    }

})


let computer_balls = []
let player_balls = []
let counter = 0;

play_btn.addEventListener('click', (e)=>{
    e.preventDefault(),

    play_again.style.display = 'flex'
    play_btn.style.display = 'none'

    let s_amount = parseFloat(document.querySelector('.s_amount').value)


    // COMPUTER BALLS (LUCKY BALLS)
    for(let i=0; i<5; i++){
        let random_ball = Math.floor(Math.random() * 90)
        if(!computer_balls.includes(random_ball)){
            computer_balls.push(random_ball)
        }else{
           if(random_ball < 90){
              random_ball = random_ball 
              lucky_balls.push(random_ball)
           }
        }


        let l_balls = document.createElement('span')
        l_balls.classList.add('l_balls')
        l_balls.textContent = random_ball
        let lucky_balls = document.querySelector('.lucky_balls')
        lucky_balls.appendChild(l_balls)

    } 

    
    for(let i=0; i<5; i++){
        let random_playerBall = Math.floor(Math.random() * 90)
        if(!player_balls.includes(random_playerBall)){
            player_balls.push(random_playerBall)
           
        }else{
           if(random_playerBall < 90){
              random_playerBall = random_playerBall 
              player_balls.push(random_playerBall)
           }
        }

        let player_ball = document.createElement('span');
        if(computer_balls.includes(random_playerBall)){
            player_ball.classList.add('p_balls')
            counter++;
        }else{
            player_ball.classList.add('ball_2')
        }
        player_ball.textContent = random_playerBall
        document.querySelector('.player_balls').appendChild(player_ball)
    }

    document.querySelector('.amount_won').textContent = (counter * s_amount)
})

play_again.addEventListener('click', (e)=>{
    e.preventDefault(),

    play.style.display = 'none'
    let p_name = document.querySelector('.p_name').value
    p_name.textContent = ''
    let s_amount = document.querySelector('.s_amount').value
    s_amount.textContent = ''

})



let menu = document.querySelector('.menu')
menu.addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('nav').classList.toggle('display')
})



let theme_change = document.querySelector('.theme_change')
let theme_ball = document.querySelector('.theme_ball')
theme_change.addEventListener('click', (e)=>{
    e.preventDefault()

    theme_ball.classList.toggle('move_r')

    document.querySelector('header').classList.toggle('dark_theme')

    document.querySelector('main').classList.toggle('dark_theme')

    document.querySelector('footer').classList.toggle('dark_theme')

    menu.classList.toggle('inverter')
    document.querySelector('nav').classList.toggle('inverter')

    let a = document.querySelectorAll('a')
    a.classList.toggle('inverter')
    a.forEach((a)=>{
        a.classList.toggle('dark_a')
    })

})
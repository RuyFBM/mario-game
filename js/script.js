const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const planta = document.querySelector('.planta');
// const end = document.querySelector('.endgame');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const plantaPosition = planta.offsetLeft
    

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 || plantaPosition <= 80 && plantaPosition > 0 && marioPosition < 80 ) {



        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        
        planta.style.animation = 'none';
        planta.style.left = `${plantaPosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        
        mario.src = 'images/game-over.png';
        mario.style.width = '76px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop);
    }
      
}, 10);


document.addEventListener('keydown', jump);

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});
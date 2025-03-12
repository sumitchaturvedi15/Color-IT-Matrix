// const randomColor = function(){
//     const hex='0123456789ABCDEF'
//     let color='#'
//     for(let i=0;i<6;i++){
//         color+=hex[Math.floor(Math.random()*16)]
//     }
//     return color
// }

// let intervalSet
// const startChangingColor= function(){
//     if(!intervalSet){
//         intervalSet=setInterval(changeBgColor, 1000)
//     }
//     function changeBgColor(){
//         document.body.style.backgroundColor=randomColor()
//     }
// }

// const stopChangingColor= function(){
//     clearInterval(intervalSet)
//     intervalSet=null
// }

// document.querySelector("#start").addEventListener('click', startChangingColor)
// document.querySelector("#stop").addEventListener('click', stopChangingColor)

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const colorSpectrum = document.querySelector('.colorChange');
const addMatrix = document.querySelector('.matrix');
let interval;

function gradientColor() {
    addMatrix.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('newGradient');
        particle.style.width = `${5 + Math.random() * 20}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${10 + Math.random() * 20}s`;
        addMatrix.appendChild(particle);
    }
}

function getRandomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    gradientColor();

    if (!interval) {
        interval = setInterval(() => {
            const newColor = getRandomColor();
            colorSpectrum.style.backgroundColor = newColor;
            document.body.style.background = `linear-gradient(135deg, ${newColor}, ${getRandomColor()})`;
            gradientColor();
        }, 1500);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    document.body.style.background = 'linear-gradient(135deg, var(--bg-dark), #1a1a2e)';
    colorSpectrum.style.backgroundColor = 'transparent';
    addMatrix.innerHTML = '';

    startButton.disabled = false;
    stopButton.disabled = true;
});

gradientColor();

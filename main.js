function clock (){
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const secondsArrow = document.querySelector('.seconds');
    const numberHours = document.querySelector('.number__hours');
    const numberMinutes = document.querySelector('.number__minutes');
    const numberSeconds= document.querySelector('.number__seconds');

    const deg = 6;

    setInterval(() => {
        const day = new Date();
        
        const hours = day.getHours() * 30;
        const minutes = day.getMinutes() * deg;
        const seconds = day.getSeconds() * deg;

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`;

        numberHours.innerHTML = getZero(day.getHours());
        numberMinutes.innerHTML = getZero(day.getMinutes());
        numberSeconds.innerHTML = getZero(day.getSeconds());

    }, 0)
}
function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

clock();
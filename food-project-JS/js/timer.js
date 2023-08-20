const deadline = '2023-06-24';
function updateIndexTimer (str) {
    const destination = document.querySelector('.promotion__dscr h4');
    destination.innerHTML = str;
    

}
updateIndexTimer(deadline);

function getTime(str) {
    const time = Date.parse(str) - Date.parse(new Date());
    const days = Math.floor(time / 1000 / 60 / 60 / 24),
        hours = Math.floor((time / 1000 / 60 / 60) % 24),
        minutes = Math.floor((time / 1000 / 60) & 60),
        seconds = Math.floor((time / 1000) % 60);
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }   
}
getTime(deadline);

function updateTimer(parentSelector, endtime) {
    const timer = document.querySelector(parentSelector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');

        function checkTimer() {
            const t = getTime(endtime);
            days.innerHTML = getZero(t.days),
            hours.innerHTML = getZero(t.hours),
            minutes.innerHTML = getZero(t.minutes),
            seconds.innerHTML = getZero(t.seconds);
            setTimeout(checkTimer, 1000);
        }

        checkTimer();

        function getZero(arg) {
            if(arg < 10) {
                return `0${arg}`;
            } else {
                return arg;
            }
        }
}
updateTimer('.timer', deadline);
const parent = document.querySelector('.rightpanel'),
    upArrow = parent.querySelector('.rightpanel__up'),
    downArrow = parent.querySelector('.rightpanel__down');


 function visibleUp() {
    const scrollOffset = window.pageYOffset || document.documentElement.pageYOffset;

    upArrow.style.display = scrollOffset >= 800 ? 'block' : 'none';
    downArrow.style.display = scrollOffset > 3000 ? 'none' : 'block';

    // if(currentTarget >= 800) {
    //     arrowUp.style.display = 'block';
    // } else {
    //     arrowUp.style.display = 'none';
    // }
    // if(currentTarget > 3000) {
    //     arrowDown.style.display = 'none';
    // } else {
    //     arrowDown.style.display = 'block';
    // }

 }

 upArrow.addEventListener('click', () => {
    window.scrollTo(110, 110);
 })
 downArrow.addEventListener('click', () => {
   window.scrollBy(0, window.innerHeight);
 })
 window.addEventListener('scroll', visibleUp);
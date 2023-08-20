const tabContent = document.querySelectorAll('.tabcontent'),
        tabItem = document.querySelectorAll('.tabheader__item'),
        tabList = document.querySelector('.tabheader__list');

function clearTabContent() {
    tabContent.forEach(item => {
        item.style.display = 'none';
    })
    tabItem.forEach(item => {
        item.classList.remove('tabheader__item-active');
    })
}
clearTabContent();

function showTabContent(i = 0) {
     tabContent[i].style.display = 'block';
     tabItem[i].classList.add('tabheader__item-active');

}

showTabContent();

tabList.addEventListener('click', (event) => {
    event.preventDefault();
    const currentTarget = event.target;

    tabItem.forEach((item, i) => {
        if(currentTarget === item) {
            clearTabContent();
            showTabContent(i);
        }
    });
})
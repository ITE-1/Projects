
class Card {
    constructor(src, alt, subtitle, dscr, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.subtitle = subtitle;
        this.dscr = dscr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
                <div class="menu__item">
                        <img src=${this.src} alt="${this.alt}" >
                        <h3 class="menu__item-subtitle">${this.subtitle}</h3> 
                        <div class="menu__item-descr"> ${this.dscr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>
        `;
        this.parent.append(element);
    }

}

new Card(   
"./assets/img/fitnes.jpg",
"menu1",
'Меню "Фитнес"',
'Меню "Фитнес"- это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
'229',

'.menu .container'
).render();

new Card(   
"./assets/img/fitnes.jpg",
"menu1",
'Меню "Фитнес"',
'Меню "Фитнес"- это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
'229',

'.menu .container'
).render();
    

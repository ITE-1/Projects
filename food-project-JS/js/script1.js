//     const result = document.querySelector('.calculating__result span');

//     let sex, age, weight, height, ratio;
    
// function calcResult() {

//     if(!sex || !weight || !height || !age || !ratio) {
//         result.textContent = '___';
//         return;
//     }

//     if (sex === 'female') {
//         result.textContent = (Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) * ratio);
//     } else {
//         result.textContent = (Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)) * ratio);
//     }

// }

// function getStaticInformation(parentSelector, activityClass) {
    
//     const element = document.querySelectorAll(`${parentSelector} div`);
    
//     document.querySelector(parentSelector).addEventListener('click', (e) => {
        
//         if(e.target.getAttribute('data-ratio')) {
//             ratio = +e.target.getAttribute('data-ratio');
        
//         } else {
//             sex = e.target.getAttribute('id');
//         }
        
//             element.forEach(item => {
//                 item.classList.remove(activityClass);
//             })

//             e.target.classList.add(activityClass);
        
//     })
    
  
// }
// calcResult();
// getStaticInformation('#gender', 'calculating__choose__item-active');
// getStaticInformation('.calculating__choose__big', 'calculating__choose__item-active');

// function getDynamicInformation(selector) {
//     const input = document.querySelector(selector);

//     input.addEventListener('input', () => {
//         if(input.value.match(/\D/g)) {
//             input.style.border = '1px solid red';
//         } else {
//             input.style.border = 'none';
//         }


//         switch(input.getComputedStyle('id')) {
//             case 'height':
//                 height = +input.value;
//                 break; 
//             case 'weight':
//                 weight = +input.value;
//                 break;
//             case 'age':
//                 age = +input.value;
//                 break;
//         }
//     })
// }
// getDynamicInformation('calculating__choose');


    const calcResult = document.querySelector('.calculating__result span');
    let weight, height, age, sex, ratio;
    
    function getResult() {
    
        if(!weight || !height || !age || !sex || !ratio) {
    
            calcResult.textContent = '____';
            return;
        }

        if( sex === 'female') {
            calcResult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            calcResult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }

    }
    getResult();

    function getStaticInformation(parentSelector, activityClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        document.querySelector(parentSelector).addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('data-ratio');
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('id');
            }
            elements.forEach(elem => {
                elem.classList.remove(activityClass);
            })
            e.target.classList.add(activityClass);

            getResult();
        })
        
    }
    getStaticInformation('#gender', 'calculating__choose__item-active');
    getStaticInformation('.calculating__choose__big', 'calculating__choose__item-active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch(input.getAttribute('id')) {
                case 'height': 
                    height = +input.value;
                    break;
                case 'weight': 
                    weight = +input.value;
                    break;
                case 'age': 
                    age = +input.value;
                    break;        
            }
            getResult();
        })
       
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
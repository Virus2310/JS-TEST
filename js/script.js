let openBtn = document.getElementById('open-btn'); // Отримали кнопку
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];
let isOpenValue = document.getElementsByClassName('isopen-value')[0];

let goodsItem = document.getElementsByClassName('goods-item');
let goodsBtn = document.getElementById('goodsBtn');

let budgetBtn = document.getElementsByTagName('button')[2];
let employersBtn = document.getElementsByTagName('button')[3];
let chooseItem = document.querySelector('.choose-item');
let timeValue = document.querySelector('.time-value');
let countBudgetValue = document.querySelector('.count-budget-value');
let hireEmployersItem = document.querySelectorAll('.hire-employers-item');
let myBudget, 
    price;

openBtn.addEventListener('click', () => {
    myBudget = prompt("Ваш бюджет?");

    while (isNaN(myBudget) || myBudget === " " || myBudget == null) {
        myBudget = prompt("Ваш бюджет?");
    }

    budgetValue.textContent = myBudget; // Записуємо в поле Бюджет наш Бюджет 
    nameValue.textContent = prompt("Название вашего магазина?").toUpperCase();
});


goodsBtn.addEventListener('click', () => {

	for (let i = 0; i < goodsItem.length; i++) { // goodsItem.length визначає скільки полів буде для goodsItem(input)
        let a = goodsItem[i].value;  // Те що введено в наше поле

            if ((typeof(a)) === 'string' && (typeof(a)) === null && a.length < 50) {
                console.log("Vse Virno");
                mainList.shopGoods[i] = a;
                goodsValue.textContent += mainList.shopGoods; // Записуємо в масив товари
            }
            else {
            // i = i - 1;
   	    }
    }
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;  // Провіряємо те що написано в input

	if (isNaN(items) && items != '') {
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();
        itemsValue.textContent = mainList.shopItems; 
    }
});


timeValue.addEventListener('change', () => {
	let time = timeValue.value; 

	if (time < 0) {
		console.log('Такого не може бути');
		mainList.open = false; 
	} else if (time >= 8 && time <= 20) {
		console.log('Час працювати');
		mainList.open = true;
	} else if (time > 24) {
		console.log('Вже пізно');
		mainList.open = false 
	} else {
		console.log('День має 24 години');
		mainList.open = false; 
	}

	if (mainList.open == true) {
		isOpenValue.style.backgroundColor = 'green';
	} else {
		isOpenValue.style.backgroundColor = 'red';
	}
});


budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = myBudget/30;
});

employersBtn.addEventListener('click', () => {
	for (i = 0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
        mainList.employers[i] = name;

        employersValue.textContent += mainList.employers[i] + ',  ';
    }
});

const mainList = {
        budget: myBudget,
        shopName: nameValue,
        shopGoods: [],
        employers: {},
        open: true,
        discount: true,
        shopItems: [],

        discountSystem: function discountSystem() {
            price = 1000;
            while (mainList.discount == true) {
                disc = price * 80 / 100;
                alert("Ваша знижка становить " + disc);
                break;
            }
        },

    } // mainList


// mainList.chooseGoods();
// mainList.budgetOneDay();
// mainList.addEmployers();
// mainList.chooseShopItems();

console.log(mainList);
let myBudget, nameMagaz, price;

function start() {
    myBudget = prompt("Ваш бюджет?");

    while (isNaN(myBudget) || myBudget === " " || myBudget == null) {
        myBudget = prompt("Ваш бюджет?");
    }

    nameMagaz = prompt("Название вашего магазина?").toUpperCase();
}
start();

var mainList = {
        budget: myBudget,
        shopName: nameMagaz,
        shopGoods: [],
        employers: {},
        open: true,
        discount: true,
        shopItems: [],
        chooseGoods: function chooseGoods() {
            for (let i = 0; i < 3; i++) {
                var a = prompt("Какой тип товаров будем продавать?");

                if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
                    console.log("Vse Virno");
                    mainList.shopGoods[i] = a;
                } else {
                    // i = i - 1;
                }
            }
        },

        budgetOneDay: function budgetOneDay() {
            let budgetOneDay = myBudget / 30;
            alert("Ваш бюджет на один день " + budgetOneDay);
        },

        discountSystem: function discountSystem() {
            price = 1000;
            while (mainList.discount == true) {
                disc = price * 80 / 100;
                alert("Ваша знижка становить " + disc);
                break;
            }
        },

        addEmployers: function addEmployers() {
            for (i = 1; i < 4; i++) {
                let name = prompt("Имя вашего сотрудника");
                mainList.employers[i] = name;
            }

            for (let key in mainList.employers) {
                alert("Ваші співробітники " + key + ' : ' + mainList.employers[key]);
            }
        },

        chooseShopItems: function chooseShopItems() {
            let items = prompt("Перерахуйте через кому ваші товари", "");
            // mainList.shopItems = items;
            mainList.shopItems = items.split(",");
            mainList.shopItems.push(prompt("Почекайте трохи ", ""));
            mainList.shopItems.sort();
            mainList.shopItems.forEach(function(el, index) {
                alert("У нас вы можете купить: " + (`index: ${index,1}, element:${el}`));
            });

            for( let key in mainList.shopItems) {
                alert("Наш магазин включает в себя: " + mainList.shopItems[key]);
            }
        }
    } // mainList



mainList.chooseGoods();
mainList.budgetOneDay();
mainList.addEmployers();
mainList.chooseShopItems();

console.log(mainList);
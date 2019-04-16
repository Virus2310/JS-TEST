
var myBudget, nameMagaz, price;

function start() {
    myBudget = prompt("Ваш бюджет?");

    while (isNan(money)|| money == "" || money == null) {
        myBudget = prompt("Ваш бюджет?");
    }

    nameMagaz = prompt("Название вашего магазина?").toUpperCase();
}


start();

var mainList = {
    budget : myBudget,
    shopName : nameMagaz,
    shopGoods: [],
    employers: {},
    open: true,
    discount: false

}
function chooseGoods(){
    for (var i = 0;i<3;i++) {
        var a = prompt("Какой тип товаров будем продавать?");
        
        if( (typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
            console.log("Vse Virno");
            mainList.shopGoods[i] = a; 
        } else {
            
        }
    }
}

chooseGoods();

function budgetOneDay(){
    var budgetOneDay= myBudget/30;
    alert("Ваш бюджет на один день " + budgetOneDay);
}

console.log(mainList);
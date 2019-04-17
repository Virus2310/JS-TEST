
var myBudget, nameMagaz, price;

function start() {
    myBudget = prompt("Ваш бюджет?");

    while (isNaN(myBudget)|| myBudget == "" || myBudget == null) {
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
    discount: true

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

function budgetOneDay() {
    var budgetOneDay= myBudget/30;
    alert("Ваш бюджет на один день " + budgetOneDay);
}
budgetOneDay();

function discountSystem() {
    price = 1000;
    while(mainList.discount == true){
        disc= price*80/100;
        alert("Ваша знижка становить " + disc);
        break;
    }
}
discountSystem();

function addEmployers() {   
    for(i = 1 ;i < 4; i++) {
        let emp = prompt("Имя вашего сотрудника");

        if( (typeof(emp)) === 'string' && (typeof(emp)) === null && emp != '' && a.length < 50) {
            console.log("Vse Virno");
            mainList.employers[i] = emp; 
        } else {
            
        }
    }
}
addEmployers();

console.log(mainList);
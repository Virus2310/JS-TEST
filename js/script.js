
var myBudget = prompt("Ваш бюджет?");
var nameMagaz = prompt("Название вашего магазина?");

var mainList = {
    budget : myBudget,
    shopName : nameMagaz,
    shopGoods: [],
    employers: {},
    open: true

}

for(var i = 0;i<3;i++){
    var a = prompt("Какой тип товаров будем продавать?");
    
    if( (typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
        console.log("Vse Virno");
        mainList.shopGoods[i] = a; 
    } else {

    }
}

var budgetOneDay= myBudget/30;
alert("Ваш бюджет на один день " + budgetOneDay);
console.log(mainList);
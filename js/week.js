
//Дні тиждня виводятьтся з нової строки
let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Нд'];
document.write(week[0] + "<br \/>");
document.write(week[1] +  "<br \/>");
document.write(week[2] +  "<br \/>");
document.write(week[3] +  "<br \/>");
document.write(week[4] +  "<br \/>");
document.write('<b>' + week[5]+ '</b>' +  "<br \/>");
document.write('<b>' + week[6]+ '</b>' +  "<br \/>");


// Виводить в консоль тільки ті числа, що починаються з цифри 3 або 7
arr = ["123","12314","42342","32423","77563","54564"];
for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == '3' || arr[i][0] == '7') {
		console.log(arr[i]);
	}
}


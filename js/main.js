let count = 1; // Счетчик
var ourList = document.getElementById("list-items"); // <ul>
var myBtn= document.getElementById("btn");  //Кнопка
var myMainHead = document.getElementById("myHead"); // Заголовок
var myList = document.getElementById("list-items").getElementsByTagName("li"); // Список <li>

 for(i = 0 ; i < myList.length;i++){
     myList[i].addEventListener("click", activateItem);
}  

//myList.addEventListener("click", activateItem);

function activateItem(){  // Функція змінює заголовок при кліку на певний список <li>, а також настп. рядок коду , при кліку на певний список <li> додає клас "active" і змінює колір на червоний 
    myMainHead.innerHTML = this.innerHTML;
    this.classList.add("active"); // Змінює колір <li>
    myMainHead.classList.add("back"); // Змінює колір заголовку
    for(i = 0 ; i < myList.length;i++){
        myList[i].classList.remove("active");
    }
    
}

myBtn.addEventListener("click", addItem);
function addItem(){ // Ф-ція додає списки <li>
    for(i = 0;i<5;i++){
        ourList.innerHTML += "<li> Smth " + count +  "</li>";    
        count++; 
    }
}
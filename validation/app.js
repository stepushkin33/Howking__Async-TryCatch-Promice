const loadBtn = document.querySelector(".js-load");
const searchInput = document.querySelector(".js-input");
const resultContainer = document.querySelector(".js-result");

loadBtn.addEventListener("click", function (event) {
    const searchValue = searchInput.value;
    const num = /^[1-9]\d{9}$/;
    console.log(searchValue);  
    console.log(typeof searchValue) 
    try {
        if (searchValue == "") {
            throw new Error('Заполните поле!');
        }
        else if (isNaN(searchValue)) {
            throw new Error("Введённые данные должны быть числом");
        }
        else if((searchValue < 5) || (searchValue > 10)) {
            throw new Error("Число должно находиться в диапазоне от 5 до 10")
        }
        resultContainer.innerHTML = `<p> Вы ввели число ${String(searchValue)} !</p>`
    }
    catch(e){
        resultContainer.innerHTML = `<p class = "error-messege">${e}</p>`
    }
});
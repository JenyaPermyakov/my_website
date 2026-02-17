// подключаюсь к блоку с отправкой и запрещаю отправлять форму.
document.getElementById("contact-form"),addEventListener("submit", function(event) {
    event.preventDefault();

// подключаюсь к полям заполнения форм. 
const name = document.querySelector('#name').value.trim();
const email = document.querySelector('#email').value.trim();
const message = document.querySelector('#message').value.trim();

//создаем условия проверки для полей
if (name === "") {
        alert("Введите имя");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Введите корректный email");
        return;
    }

    if (message === "") {
        alert("Введите сообщение");
        return;
    }

    // Создаем переменную с данными для отправки в консоль 
    const data = {
        name: name,
        email: email,
        message: message
    };
    // отправляем в консоль 
    console.log(data);

    alert("Форма отправлена!");

    // Очистка формы
    document.querySelector('.contact-form').reset();
});

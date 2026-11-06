function log(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}

function checkWeather(temperature) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (temperature > 0) {
                resolve("Тепло!");
            } else {
                reject(new Error("Холодно!"));
            }
        }, 1000);
    });
}

log("Запрос погоды для 5 градусов...");
checkWeather(5)
    .then((result) => {
        log("Успех: " + result);
    })
    .catch((error) => {
        log("Ошибка: " + error.message);
    });

log("Запрос погоды для -5 градусов...");
checkWeather(-5)
    .then((result) => {
        log("Успех: " + result);
    })
    .catch((error) => {
        log("Ошибка (сработал .catch): " + error.message);
    });

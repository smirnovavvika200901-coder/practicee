function log(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}
function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);
    
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Таймаут'));
        }, ms);
    });
     return Promise.race([fetchPromise, timeoutPromise]);
}

const testUrl = "https://jsonplaceholder.typicode.com/todos/1";

log("Запуск 1: Таймаут 100 мс (ожидаем ошибку)...");
fetchWithTimeout(testUrl, 100)
    .then(response => {
 log("Успех: Данные получены (это может случиться, если интернет очень быстрый)");
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
        log("Ошибка 1: " + error.message);
    });
setTimeout(() => {
    log("Запуск 2: Таймаут 5000 мс (ожидаем успех)...");
    fetchWithTimeout(testUrl, 5000)
        .then(response => {
            log("Успех 2: Данные успешно пришли!");
            return response.json();
               })
        .then(data => console.log("Данные:", data))
        .catch(error => {
            log("Ошибка 2: " + error.message);
        });
}, 2000);
13:31
Сегодня


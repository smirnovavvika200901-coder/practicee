function log(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}

const urls = [
    "https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current_weather=true",
    "https://wttr.inn/Moscow?format=j1",
    "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true"
];

const cityNames = ["Москва", "Лондон (ошибочный URL)", "Париж"];

log("Начинаем запросы...");

Promise.allSettled(urls.map(url => fetch(url).then(response => {
    if (!response.ok) {
        throw new Error("Сетевая ошибка: статус " + response.status);
    }
    return response.json();
})))
.then(results => {
    results.forEach((result, index) => {
        const city = cityNames[index];
        
        if (result.status === 'fulfilled') {
            const temp = result.value.current_weather.temperature;
            log(`Успех [${city}]: Температура ${temp}°C`);
        } else if (result.status === 'rejected') {
            log(`Ошибка [${city}]: ${result.reason.message}`);
        }
    });
});

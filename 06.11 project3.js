function log(message) {
  console.log(message);
  const outputDiv = document.getElementById('output');
  const p = document.createElement('p');
  p.textContent = message;
  outputDiv.appendChild(p);
}
const urls = [
    "https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current_weather=true",
    "https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=-0.12&current_weather=true",
    "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true"
];
const cityNames = ["Москва", "Лондон", "Париж"];
log("Запрос погоды для трех городов...");
Promise.all(urls.map(url => fetch(url).then(response => response.json())))
.then(results =>{ 
      result.forEach((data, index0 => 
        {
          const temp = data.current_weather.temperature;
          log(`Температура в городе $[cityNames[index]}: ${temp]C`)
        });
})
.catch(error => {
  log("Произошла ошибка при получении данных: " + error.message);
});

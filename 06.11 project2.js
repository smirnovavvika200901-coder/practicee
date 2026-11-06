function getMoscowWeather() {
    fetch('https://wttr.in/Moscow?format=j1')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return data.current_condition[0];
        })
        .then((currentCondition) => {
            return currentCondition.temp_C;
        })
        .then((temp) => {
            console.log(`Температура: ${temp}°C`);
        })
        .catch((error) => {
            console.error("Произошла ошибка:", error.message);
        })
        .finally(() => {
            console.log("Запрос завершён");
        });
}

getMoscowWeather();

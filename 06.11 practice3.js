async function getWeather(){
  try {
    const response = await 
      fetch('https://wttr.in/Moscow?format=j1');
    if(!response.ok) {
      throw new Error('Ошибка HTTP: ${response.status}');
    }
    const data = await
      response.json();
 const current = data.current_condition[0];
    const temp = current.temp_C;
    const humidity = current.humidity;
  const description = current.weatherDesc[0].value;
    console.log(`Температура: ${temp}C`);
    console.log(`Влажность: ${humidity}%};
    console.log(`Погода: ${description}`);
    } catch (error){
    console.error("Не удалось получить данные:", error);
    }
    }
    getWeather();

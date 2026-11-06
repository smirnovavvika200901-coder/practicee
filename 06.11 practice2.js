async function getWeather(){
  try {
    const response = await 
      fetch('https://wttr.in/Moscow?format=j1');
    if(!response.ok) {
      throw new Error('Ошибка HTTP: ${response.status}');
    }
    const data = await
      response.json();
    console.log("Данные о погоде:", data);
  } catch (error) {
    console.error("Не удалось получить данные:", error);
  }
}
getWeather();

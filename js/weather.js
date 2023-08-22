const API_KEY = "fed5f48ab273601bbc5efb9b5696d0b7";
const spanStatus = document.getElementById("weather-status");
const spanTemper = document.getElementById("weather-temper");
const spanCity = document.getElementById("weather-city");

const displayWeatherStatus = (data) => {
  const status = data.weather[0].main;
  const icon = document.createElement("i");
  icon.classList.add("fas");
  console.log(status);
  switch (status) {
    case "Clouds":
      icon.classList.add("fa-cloud");
      break;
    case "Rain":
      icon.classList.add("fa-umbrella");
      break;
    case "Snows":
      icon.classList.add("fa-snowflake");
      break;
    default:
      icon.classList.add("fa-sun");
  }
  spanStatus.appendChild(icon);
  spanTemper.innerText = `${data.main.temp}°C`;
  spanCity.innerText = data.name;
};
const onGeoOk = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeatherStatus(data);
  } catch (error) {}
};
const onGeoError = () => {};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

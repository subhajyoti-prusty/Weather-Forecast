document.getElementById("submitBtn").addEventListener("click", function () {
  var inputCity = document.getElementById("cityInput").value;
  var apiKey = "63a90ae96d390ec37d6c1252f5a86e1a";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputCity +
      "&appid=" +
      apiKey
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found!");
      }
      return response.json();
    })
    .then((data) => {
      var cityName = data.name;
      var description = data.weather[0].description;
      var temperature = (data.main.temp - 273).toFixed(2);
      var windSpeed = data.wind.speed;
      document.getElementById(
        "cityOutput"
      ).innerHTML = `Weather of <span>${cityName}</span>`;
      document.getElementById(
        "description"
      ).innerHTML = `Sky Conditions: <span>${description}</span>`;
      document.getElementById(
        "temperature"
      ).innerHTML = `Temperature: <span>${temperature} °C</span>`;
      document.getElementById(
        "wind"
      ).innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=84fa4d9963823776d7a7124db02e91bb";
 fetch(url2)
   .then(function(response) {
     return response.json();
   }).then(function(json) {
     let forecast = "";
        for (let i=0; i < json.list.length; i++) {
        forecast += "<div class = 'forecast2'> <h2 class = 'datetime'>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm a') + "</h2>";
        forecast += '<img class = "clouds" src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += "<p class = 'desc'>" + json.list[i].weather[0].description + "</p>";
        forecast += "<p class = 'temp'>Temperature: " + json.list[i].main.temp + "</p>";
        forecast += "<p class = 'feel'>Feels like: " + json.list[i].main.feels_like + "</p>";
        forecast += "<p class = 'wind_speed'>Wind speed: " + json.list[i].wind.speed + "</p>";
        forecast += "<p class = 'humidity'>Humidity: " + json.list[i].main.humidity + "%</p></div>";



        }
        document.getElementById("forecastResults").innerHTML = forecast;
   });
});

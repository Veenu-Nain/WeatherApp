const apiKey = "857d846a4b2accfccc68e5bcbab8250b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weather_icon = document.querySelector(".weather-icon")

async function checkWeather(city){
	const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

	if(response.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}else{
		var data = await response.json();
	document.querySelector(".place").innerHTML = data.name;
	document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

	if(data.weather[0].main == "Clouds"){
		weather_icon.src ="images/cloud.png";
	}else if(data.weather[0].main == "Clear"){
		weather_icon.src ="images/clear.png"
	}else if(data.weather[0].main == "Rain"){
		weather_icon.src ="images/rain.png"
	}else if(data.weather[0].main == "Snow"){
		weather_icon.src ="images/snow.png"
	}else if(data.weather[0].main == "Mist"){
		weather_icon.src ="images/mist.png"
	}

	document.querySelector(".weather").style.display ="block";
	document.querySelector(".error").style.display = "none";

}
}
searchBtn.addEventListener("click",()=>{
	checkWeather(searchBox.value)});
	


	

const getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8d378f57cmshf188f2bf12413f7p1032dajsn60ca5ecb1e83',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

  
// let userCity='dehradun'
return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(data =>data)
	.catch(err => console.error(err));

  
}

/**
 * Retrieve city input and get the weather data

 */


const searchCity =async() => {

  const city=document.getElementById('city-input').value;
  console.log(city);
  let searchbtn=document.getElementById('searchbtn')

  const data=await getWeatherData(city);
  showWeatherData(data)
  
 
}


const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData, ';p')
  console.log(weatherData.main.temp)
  document.getElementById('temp').innerText=weatherData.main.temp
  document.getElementById('city-name').innerText=weatherData.name
  document.getElementById('weather-type').innerText=weatherData.weather[0].main
  document.getElementById('min-temp').innerText=weatherData.main.temp_min
  document.getElementById('max-temp').innerText=weatherData.main.temp_max
}

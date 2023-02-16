
let display = document.getElementById("display")

let getweather = async (city) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3bff2d8922mshe47a998528b5daep1a5c36jsnd0be5b147954',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	let cityname = document.querySelector("#cityname")
	cityname.innerHTML = city
	let response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	let data = response.json();
	return data
}


getweather("Delhi").then((res) => {
	console.log(res)
	let temperature = document.querySelector("#temperature");
	temperature.innerHTML = res.temp
	let Min_Temperature = document.querySelector("#min-temperature");
	Min_Temperature.innerHTML = res.min_temp
	let Max_Temperature = document.querySelector("#max-temperature");
	Max_Temperature.innerHTML = res.max_temp
	let Wind_Degree = document.querySelector("#WindDegree");
	Wind_Degree.innerHTML = res.wind_degrees
	let Feels_Like = document.querySelector("#FeelsLike");
	Feels_Like.innerHTML = res.feels_like
	let Humidity = document.querySelector("#Humidity");
	Humidity.innerHTML = res.humidity
	let Wind_Speed = document.querySelector("#WindSpeed");
	Wind_Speed.innerHTML = res.wind_speed
	let srise = document.querySelector("#Sunrise");
	srise.innerHTML = res.sunrise
	let sset = document.querySelector("#Sunset");
	sset.innerHTML = res.sunset

}).catch((err) => console.log(err))

let button = document.querySelector(".btn")
button.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(display.value).then((result) => {
		console.log(result);
		let temperature = document.querySelector("#temperature");
		temperature.innerHTML = result.temp
		let Min_Temperature = document.querySelector("#min-temperature");
		Min_Temperature.innerHTML = result.min_temp
		let Max_Temperature = document.querySelector("#max-temperature");
		Max_Temperature.innerHTML = result.max_temp
		let Wind_Degree = document.querySelector("#WindDegree");
		Wind_Degree.innerHTML = result.wind_degrees
		let Feels_Like = document.querySelector("#FeelsLike");
		Feels_Like.innerHTML = result.feels_like
		let Humidity = document.querySelector("#Humidity");
		Humidity.innerHTML = result.humidity
		let Wind_Speed = document.querySelector("#WindSpeed");
		Wind_Speed.innerHTML = result.wind_speed
		let Sunrise_Time = document.querySelector("#Sunrise");
		Sunrise_Time = result.sunrise
		let SunsetTime = document.querySelector("#Sunset")
		SunsetTime.innerHTML = result.sunset
	}).catch((error) => console.log(error));

})


let getweatherShanghai = () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3bff2d8922mshe47a998528b5daep1a5c36jsnd0be5b147954',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			let cloud = document.querySelector(".cloud");
			cloud.innerHTML = response.cloud_pct

			let feels = document.querySelector(".feels")
			feels.innerHTML = response.feels_like
			let humi = document.querySelector(".humi");
			humi.innerHTML = response.humidity
			let mxtemp = document.querySelector(".mxtemp");
			mxtemp.innerHTML = response.max_temp
			let intemp = document.querySelector(".intemp")
			intemp.innerHTML = response.min_temp
			let temp = document.querySelector(".emp")
			temp.innerHTML = response.temp

			let rise = document.querySelector(".rise");
			rise.innerHTML = response.sunrise
			let set = document.querySelector(".set")
			set.innerHTML = response.sunset



		}).catch(err => console.error(err));

}
getweatherShanghai()


let getweatherKolkata = () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3bff2d8922mshe47a998528b5daep1a5c36jsnd0be5b147954',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			let cloud = document.querySelector(".cl");
			cloud.innerHTML = response.cloud_pct

			let feels = document.querySelector(".fe")
			feels.innerHTML = response.feels_like
			let humi = document.querySelector(".hu");
			humi.innerHTML = response.humidity
			let mxtemp = document.querySelector(".xtemp");
			mxtemp.innerHTML = response.max_temp
			let intemp = document.querySelector(".ntemp")
			intemp.innerHTML = response.min_temp
			let temp = document.querySelector(".temp")
			temp.innerHTML = response.temp

			let rise = document.querySelector(".sr");
			rise.innerHTML = response.sunrise
			let set = document.querySelector(".ss")
			set.innerHTML = response.sunset



		}).catch(err => console.error(err));

}
getweatherKolkata()










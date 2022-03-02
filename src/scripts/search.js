
//  let weather = {
//     fetchWeather: function(city) {
//         fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json')
//         .then(res => res.json())
//         .then(data => this.displayWeather(data));

//     },
//     displayWeather: function(data) {
//         const { address, days } = data;
//         const {icon, temp, windspeed, humidity} = data.currentConditions;
//         console.log(address, days, icon, temp, humidity, windspeed)
//         document.getElementById('day-one-far').innerHTML = ` ${days[0].temp}&degF`
//         document.getElementById('day-one-cel').innerHTML = ` ${Math.round((days[0].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-one-windspeed').innerHTML = `Wind: ${days[0].windspeed} km/h `
//         document.getElementById('day-two-far').innerHTML = `Humidity: ${days[0].humidity}
//  }
// }

// console.log(weather.fetchWeather('Hayward'))



    //             .then(() => )
    //             .then(() => document.getElementById('day-two-far').innerHTML = ` ${weatherData.days[1].temp}&degF`)
    //             .then(() => document.getElementById('day-two-cel').innerHTML = ` ${Math.round((weatherData.days[1].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-two-windspeed').innerHTML = `Wind: ${weatherData.days[1].windspeed} km/h `)
    //             .then(() => document.getElementById('day-three-far').innerHTML = ` ${weatherData.days[2].temp}&degF`)
    //             .then(() => document.getElementById('day-three-cel').innerHTML = ` ${Math.round((weatherData.days[2].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-three-windspeed').innerHTML = `Wind: ${weatherData.days[2].windspeed} km/h `)
    //             .then(() => document.getElementById('day-four-far').innerHTML = ` ${weatherData.days[3].temp}&degF`)
    //             .then(() => document.getElementById('day-four-cel').innerHTML = ` ${Math.round((weatherData.days[3].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-four-windspeed').innerHTML = `Wind: ${weatherData.days[3].windspeed} km/h `)
    //             .then(() => document.getElementById('day-five-far').innerHTML = ` ${weatherData.days[4].temp}&degF`)
    //             .then(() => document.getElementById('day-five-cel').innerHTML = ` ${Math.round((weatherData.days[4].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-five-windspeed').innerHTML = `Wind: ${weatherData.days[4].windspeed} km/h `)
    //             .then(() => document.getElementById('day-six-far').innerHTML = ` ${weatherData.days[5].temp}&degF`)
    //             .then(() => document.getElementById('day-six-cel').innerHTML = ` ${Math.round((weatherData.days[5].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-six-windspeed').innerHTML = `Wind:${weatherData.days[5].windspeed} km/h `)
    //             .then(() => document.getElementById('day-seven-far').innerHTML = ` ${weatherData.days[6].temp}&degF`)
    //             .then(() => document.getElementById('day-seven-cel').innerHTML = ` ${Math.round((weatherData.days[6].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-seven-windspeed').innerHTML = `Wind: ${weatherData.days[6].windspeed} km/h `)

    // document.getElementById("search-but").addEventListener("click", function () {

    // });

//  let weather = {
//     fetchWeather: function(city) {
//         fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json')
//         .then(res => res.json())
//         .then(data => this.displayWeather(data));

//     },
//     displayWeather: function(data) {
//         const { address, days } = data;
//         const {icon, temp, windspeed, humidity} = data.currentConditions;
//             const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
//             const d = new Date();
//             let day = d.getDay()
//         // console.log(address, days, icon, temp, humidity, windspeed)
//         document.getElementById('day-one-far').innerHTML = ` ${days[0].temp}&degF`
//         document.getElementById('day-one-cel').innerHTML = ` ${Math.round((days[0].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-one-windspeed').innerHTML = `Wind: ${days[0].windspeed} mph `
//         document.getElementById('day-one-humidity').innerHTML = `Humidity: ${days[0].humidity} %`
//         document.getElementById('day-two-far').innerHTML = `${days[1].temp}&degF`
//         document.getElementById('day-two-cel').innerHTML = ` ${Math.round((days[1].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-two-windspeed').innerHTML = `Wind: ${days[1].windspeed} mph `
//         document.getElementById('day-two-humidity').innerHTML = `Humidity: ${days[1].humidity} %`
//         document.getElementById('day-three-far').innerHTML = ` ${days[2].temp}&degF`
//         document.getElementById('day-three-cel').innerHTML = ` ${Math.round((days[2].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-three-windspeed').innerHTML = `Wind: ${days[2].windspeed} mph `
//         document.getElementById('day-three-humidity').innerHTML = `Humidity: ${days[2].humidity} % `
//         document.getElementById('day-four-far').innerHTML = ` ${days[3].temp}&degF`
//         document.getElementById('day-four-cel').innerHTML = ` ${Math.round((days[3].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-four-windspeed').innerHTML = `Wind: ${days[3].windspeed} mph `
//         document.getElementById('day-four-humidity').innerHTML = `Humidity: ${days[3].humidity} % `
//         document.getElementById('day-five-far').innerHTML = ` ${days[4].temp}&degF`
//         document.getElementById('day-five-cel').innerHTML = ` ${Math.round((days[4].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-five-windspeed').innerHTML = `Wind: ${days[4].windspeed} mph `
//         document.getElementById('day-five-humidity').innerHTML = `Humidity: ${days[4].humidity} % `
//         document.getElementById('day-six-far').innerHTML = ` ${days[5].temp}&degF`
//         document.getElementById('day-six-cel').innerHTML = ` ${Math.round((days[5].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-six-windspeed').innerHTML = `Wind: ${days[5].windspeed} mph `
//         document.getElementById('day-six-humidity').innerHTML = `Humidity: ${days[5].humidity} % `
//         document.getElementById('day-seven-far').innerHTML = ` ${days[6].temp}&degF`
//         document.getElementById('day-seven-cel').innerHTML = ` ${Math.round((days[6].temp - 32) * 5 / 9)}&degC `
//         document.getElementById('day-seven-windspeed').innerHTML = `Wind: ${days[6].windspeed} mph `
//         document.getElementById('day-seven-humidity').innerHTML = `Humidity: ${days[6].humidity} % `
//         document.getElementById("day-one-day").innerHTML = weekday[(day) % weekday.length]
//         document.getElementById("day-two-day").innerHTML = weekday[(day + 1) % weekday.length]
//         document.getElementById("day-three-day").innerHTML = weekday[(day + 2) % weekday.length]
//         document.getElementById("day-four-day").innerHTML = weekday[(day + 3) % weekday.length]
//         document.getElementById("day-five-day").innerHTML = weekday[(day + 4) % weekday.length]
//         document.getElementById("day-six-day").innerHTML = weekday[(day + 5) % weekday.length]
//         document.getElementById("day-seven-day").innerHTML = weekday[(day + 6) % weekday.length]

//  }, 
//         search: function () {
//             this.fetchWeather(document.getElementById("search-bar").value)
//         }

// }

// document.getElementById("search-but").addEventListener("click",  function() {

    
// });

// function




    // if ('geolocation' in navigator) {

    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         let lat = position.coords.latitude
    //         let lon = position.coords.longitude

    //             let locationInfo;
    //             let city;
    //             fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
    //                 .then(response => response.json())
    //                 .then(data => locationInfo = data)
    //                 .then(() => city = locationInfo.city)
    //                 .then(() => document.getElementById("location").innerHTML = `${city},${locationInfo.principalSubdivision}`)
    //                 .then(() => {
    //             let weatherData;
    //             fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json`)
    //             .then(response => response.json())
    //             .then(data =>  weatherData = data )
    //             .then(() => document.getElementById('day-one-far').innerHTML = ` ${weatherData.days[0].temp}&degF`)
    //             .then(() => document.getElementById('day-one-cel').innerHTML = ` ${Math.round((weatherData.days[0].temp - 32) * 5 / 9)}&degC `)
    //             .then(() => document.getElementById('day-one-windspeed').innerHTML = `Wind: ${weatherData.days[0].windspeed} km/h `)
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
    //                           })
   
  
    // const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
    // const d = new Date();
    // let day = d.getDay()
    // document.getElementById("day-one-day").innerHTML = weekday[(day) % weekday.length]
    // document.getElementById("day-two-day").innerHTML = weekday[(day + 1) % weekday.length]
    // document.getElementById("day-three-day").innerHTML = weekday[(day + 2) % weekday.length]
    // document.getElementById("day-four-day").innerHTML = weekday[(day + 3) % weekday.length]
    // document.getElementById("day-five-day").innerHTML = weekday[(day + 4) % weekday.length]
    // document.getElementById("day-six-day").innerHTML = weekday[(day + 5) % weekday.length]
    // document.getElementById("day-seven-day").innerHTML = weekday[(day + 6) % weekday.length]
    //     })

    // } else {
    //     console.log('geolocation is disabled')
    // }


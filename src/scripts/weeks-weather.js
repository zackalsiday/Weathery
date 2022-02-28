export default document.addEventListener("DOMContentLoaded", () => {
    if ('geolocation' in navigator) {

        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            var obj;
            const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json`)

                .then(response => response.json())
                .then(data => obj = data)
                // .then(() => console.log(obj.days))
                .then(() => document.getElementById('day-one-far').innerHTML = ` ${obj.days[0].temp}&degF`)
                .then(() => document.getElementById('day-one-cel').innerHTML = ` ${Math.round((obj.days[0].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-one-day').innerHTML = ` Date: ${weekday[0]} `)
                .then(() => document.getElementById('day-one-windspeed').innerHTML = ` ${obj.days[0].windspeed} km/h `)
                .then(() => document.getElementById('day-two-far').innerHTML = ` ${obj.days[1].temp}&degF`)
                .then(() => document.getElementById('day-two-cel').innerHTML = ` ${Math.round((obj.days[1].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-two-day').innerHTML = ` Date: ${weekday[1]} `)
                .then(() => document.getElementById('day-two-windspeed').innerHTML = ` ${obj.days[1].windspeed} km/h `)
                .then(() => document.getElementById('day-three-far').innerHTML = ` ${obj.days[2].temp}&degF`)
                .then(() => document.getElementById('day-three-cel').innerHTML = ` ${Math.round((obj.days[2].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-three-day').innerHTML = ` Date: ${weekday[2]}`)
                .then(() => document.getElementById('day-three-windspeed').innerHTML = ` ${obj.days[2].windspeed} km/h `)
                .then(() => document.getElementById('day-four-far').innerHTML = ` ${obj.days[3].temp}&degF`)
                .then(() => document.getElementById('day-four-cel').innerHTML = ` ${Math.round((obj.days[3].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-four-day').innerHTML = ` Date: ${weekday[3]} `)
                .then(() => document.getElementById('day-four-windspeed').innerHTML = ` ${obj.days[3].windspeed} km/h `)
                .then(() => document.getElementById('day-five-far').innerHTML = ` ${obj.days[4].temp}&degF`)
                .then(() => document.getElementById('day-five-cel').innerHTML = ` ${Math.round((obj.days[4].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-five-day').innerHTML = ` Date: ${weekday[4]} `)
                .then(() => document.getElementById('day-five-windspeed').innerHTML = ` ${obj.days[4].windspeed} km/h `)
                .then(() => document.getElementById('day-six-far').innerHTML = ` ${obj.days[5].temp}&degF`)
                .then(() => document.getElementById('day-six-cel').innerHTML = ` ${Math.round((obj.days[5].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-six-day').innerHTML = ` Date: ${weekday[5]} `)
                .then(() => document.getElementById('day-six-windspeed').innerHTML = ` ${obj.days[5].windspeed} km/h `)
                .then(() => document.getElementById('day-seven-far').innerHTML = ` ${obj.days[6].temp}&degF`)
                .then(() => document.getElementById('day-seven-cel').innerHTML = ` ${Math.round((obj.days[6].temp - 32) * 5 / 9)}&degC `)
                .then(() => document.getElementById('day-seven-day').innerHTML = ` Date: ${weekday[6]} `)
                .then(() => document.getElementById('day-seven-windspeed').innerHTML = ` ${obj.days[6].windspeed} km/h `)
  

        })

    } else {
        console.log('geolocation is disabled')
    }
})
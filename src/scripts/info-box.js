export default  document.addEventListener("DOMContentLoaded", () => {
    if ('geolocation' in navigator) {

        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            var obj;
            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json`)
                .then(response => response.json())
                .then(data => obj = data)
                // .then(() => console.log(obj))
                .then(() => document.getElementById('humidity').innerHTML = ` Humidity: ${obj.days[0].humidity}`)
                .then(() => document.getElementById('temperature').innerHTML = ` Temperature: ${obj.days[0].temp}`)
                .then(() => document.getElementById('wind-speed').innerHTML = ` Wind Speed: ${obj.days[0].windspeed}`)

        })

    }else{
        console.log('geolocation is disabled')
    }
})
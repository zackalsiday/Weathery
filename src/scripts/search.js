
 let cityData;
 let weather = {
    
    fetchWeather: function(city) {
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json')
        .then(res => res.json())
        .then(data => cityData = data)
        .then(() => this.displayWeather(cityData))   
        .then(() => this.initMap(cityData))         

    },
    displayWeather: function(data) {
        let { address, days, latitude, longitude} = data;
        const {icon, temp, windspeed, humidity} = data.currentConditions;
            const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
            const d = new Date();
            let day = d.getDay()
            let dataTwo;
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
                    .then(response => response.json())
                    // .then(data => console.log(data))
                    .then(data => dataTwo = data)
                    .then(() => document.getElementById("location").innerHTML = `${dataTwo.locality}, ${dataTwo.principalSubdivision}`)
                    
        // console.log(address, days, icon, temp, humidity, windspeed, latitude, longitude)
        document.getElementById('day-one-far').innerHTML = ` ${days[0].temp}&degF`
        document.getElementById('day-one-cel').innerHTML = ` ${Math.round((days[0].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-one-windspeed').innerHTML = `Wind: ${days[0].windspeed}  km/h `
        document.getElementById('day-one-humidity').innerHTML = `Humidity: ${days[0].humidity} %`
        document.getElementById('day-two-far').innerHTML = `${days[1].temp}&degF`
        document.getElementById('day-two-cel').innerHTML = ` ${Math.round((days[1].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-two-windspeed').innerHTML = `Wind: ${days[1].windspeed}  km/h `
        document.getElementById('day-two-humidity').innerHTML = `Humidity: ${days[1].humidity} %`
        document.getElementById('day-three-far').innerHTML = ` ${days[2].temp}&degF`
        document.getElementById('day-three-cel').innerHTML = ` ${Math.round((days[2].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-three-windspeed').innerHTML = `Wind: ${days[2].windspeed}  km/h `
        document.getElementById('day-three-humidity').innerHTML = `Humidity: ${days[2].humidity} % `
        document.getElementById('day-four-far').innerHTML = ` ${days[3].temp}&degF`
        document.getElementById('day-four-cel').innerHTML = ` ${Math.round((days[3].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-four-windspeed').innerHTML = `Wind: ${days[3].windspeed}  km/h `
        document.getElementById('day-four-humidity').innerHTML = `Humidity: ${days[3].humidity} % `
        document.getElementById('day-five-far').innerHTML = ` ${days[4].temp}&degF`
        document.getElementById('day-five-cel').innerHTML = ` ${Math.round((days[4].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-five-windspeed').innerHTML = `Wind: ${days[4].windspeed} km/h `
        document.getElementById('day-five-humidity').innerHTML = `Humidity: ${days[4].humidity} % `
        document.getElementById('day-six-far').innerHTML = ` ${days[5].temp}&degF`
        document.getElementById('day-six-cel').innerHTML = ` ${Math.round((days[5].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-six-windspeed').innerHTML = `Wind: ${days[5].windspeed} km/h `
        document.getElementById('day-six-humidity').innerHTML = `Humidity: ${days[5].humidity} % `
        document.getElementById('day-seven-far').innerHTML = ` ${days[6].temp}&degF`
        document.getElementById('day-seven-cel').innerHTML = ` ${Math.round((days[6].temp - 32) * 5 / 9)}&degC `
        document.getElementById('day-seven-windspeed').innerHTML = `Wind: ${days[6].windspeed} km/h `
        document.getElementById('day-seven-humidity').innerHTML = `Humidity: ${days[6].humidity} % `
        document.getElementById("day-one-day").innerHTML = weekday[(day) % weekday.length]
        document.getElementById("day-two-day").innerHTML = weekday[(day + 1) % weekday.length]
        document.getElementById("day-three-day").innerHTML = weekday[(day + 2) % weekday.length]
        document.getElementById("day-four-day").innerHTML = weekday[(day + 3) % weekday.length]
        document.getElementById("day-five-day").innerHTML = weekday[(day + 4) % weekday.length]
        document.getElementById("day-six-day").innerHTML = weekday[(day + 5) % weekday.length]
        document.getElementById("day-seven-day").innerHTML = weekday[(day + 6) % weekday.length]
        document.getElementById("day-one-icon").src = 'images/weather_icons/' + days[0].icon + '.svg'
        document.getElementById("day-two-icon").src = 'images/weather_icons/' + days[1].icon + '.svg'
        document.getElementById("day-three-icon").src = 'images/weather_icons/' + days[2].icon + '.svg'
        document.getElementById("day-four-icon").src = 'images/weather_icons/' + days[3].icon + '.svg'
        document.getElementById("day-five-icon").src = 'images/weather_icons/' + days[4].icon + '.svg'
        document.getElementById("day-six-icon").src = 'images/weather_icons/' + days[5].icon + '.svg'
        document.getElementById("day-seven-icon").src = 'images/weather_icons/' + days[6].icon + '.svg'
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + address + " ')"
 }, 
        search: function () {
            this.fetchWeather(document.getElementById("search-bar").value)
           
        },
        defaultCity: function(){
            if (document.getElementById("search-bar").value == "") {
                if ('geolocation' in navigator) {
                    
                  navigator.geolocation.getCurrentPosition( (position) => {
                        let lat = position.coords.latitude
                        let lon = position.coords.longitude
                        // let locationInfo;
                        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
                            .then(response => response.json())
                            .then(data => weather.fetchWeather(data.locality))
                      

                    })

                } else {
                    console.log('geolocation is disabled')
                }
            }
        },

      initMap: function(data){
            const {latitude, longitude} = data
            var map 
            var marker
            var location = {lat: latitude, lng: longitude};
            // console.log(location)
            map = new google.maps.Map(document.getElementById("map"),{
                zoom: 10,
                center: location
            });
             marker = new google.maps.Marker({
                position: location,
                map: map
            });
       }





}
// console.log(weather.check())

document.getElementById("search-but").addEventListener("click",function() {
    weather.search()
})

document.getElementById("search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search()
    }
})





// function defaultCity(){
//     if (document.getElementById("search-bar").value == ""){

//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition(function (position) {
//                 let lat = position.coords.latitude
//                 let lon = position.coords.longitude 
//                 let locationInfo;
//                 fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
//                     .then(response => response.json())
//                     .then(data =>  weather.fetchWeather(data.city))  
                
//             })
          
//         }else{
//             console.log('geolocation is disabled')
//         }
//     }
// }
// console.log(cityData)


weather.defaultCity()

// weather.initMap()


const CHART = document.getElementById("lineChart");
let list = []
 let cityData; // data of the weather 
const currentYear = new Date().getFullYear();
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [(currentYear - 9).toString(), (currentYear - 8).toString(), (currentYear - 7).toString(), (currentYear - 6).toString(), (currentYear - 5).toString(), (currentYear - 4).toString(), (currentYear - 3).toString(), (currentYear - 2).toString(), (currentYear - 1).toString(), currentYear.toString()],
        datasets: [{
            label: '# of Votes',
            data: list,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    

})
 let weather = {
    
    fetchWeather: function(city) {
        console.log(city)
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=PRGYVCZ9WYDCWQ5DW54PUH6HX&contentType=json')
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(data => cityData = data)
        .then(() => this.displayWeather(cityData))   
        .then(() => this.initMap(cityData)) 
        .then((city) => {
            let listWeather = []
            let year = new Date().getFullYear().toString()
            let month = (new Date().getMonth() + 1).toString().length > 1 ? (new Date().getMonth() + 1).toString() : '0' + (new Date().getMonth() + 1).toString()
            let day = (new Date().getDate()).toString().length > 1 ? new Date().getDate().toString() : '0' + new Date().getDate().toString()
    // let date = year + '-' + month + '-' + day 
               fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                //    .then(res => console.log(res))
                    .then(res => listWeather.unshift(res.days[0].temp))

            
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 1}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                
                )
            
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 2}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 3}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 4}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 5}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 6}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 7}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 8}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityData.address}/${year - 9}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                // .then(() => console.log(listWeather.length))
            )
            .then(res => {
                // console.log(listWeather)
                lineChart.data.datasets[0].data = listWeather;
                lineChart.update()
                
                 
            })
        })
               

    },
    displayWeather: function(data) {
        let { address, days, latitude, longitude, currentConditions} = data;
        const {icon, temp, windspeed, humidity} = data.currentConditions;
            const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
            const d = new Date();
            let day = d.getDay()
            // let dataTwo;
            //     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
            //         .then(response => response.json())
            //         // .then(data => console.log(data))
            //         .then(data => dataTwo = data)
            //         .then(() => document.getElementById("location").innerHTML = `${dataTwo.locality}, ${dataTwo.principalSubdivision}`)
        document.getElementById("location").innerHTML = `${data.resolvedAddress}`
                    
        console.log(address, days, icon, temp, humidity, windspeed, latitude, longitude)
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


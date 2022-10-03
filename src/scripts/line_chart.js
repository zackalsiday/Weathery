const CHART = document.getElementById("lineChart");
// console.log(CHART)
function today(){
    
    let city;
  
    let year = new Date().getFullYear().toString()
    let month = (new Date().getMonth() + 1).toString().length > 1 ? (new Date().getMonth() + 1).toString() : '0' + (new Date().getMonth() + 1).toString()
    let day = (new Date().getDate()).toString().length > 1 ? new Date().getDate().toString() : '0' + new Date().getDate().toString()
    // let date = year + '-' + month + '-' + day 
     navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let listWeather = []
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
            .then(response => response.json())
            .then(data => city = data.city)
            .then(() => console.log(city))
            .then( 
                   () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                        .then(res => res.json())
                        .then( res => listWeather.unshift(res.currentConditions.temp))

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 1}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                .then(res => res.json())
                .then( res => listWeather.unshift(res.days[0].temp))
               

            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 2}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
              
            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 3}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                 
            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 4}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                  
            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 5}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                    
            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 6}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                   
            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 7}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                
            )
                .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 8}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                 
            )
            .then(
                () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year - 9}-${month}-${day}?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                    .then(res => res.json())
                    .then(res => listWeather.unshift(res.days[0].temp))
                    // .then(() => console.log(listWeather.length))
            )
          .then((res) => {return (listWeather)})

        })
   
   
}
let value = await today()
console.log(value)

const currentYear = new Date().getFullYear();
const lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [(currentYear - 9).toString(),(currentYear - 8).toString(),(currentYear - 7).toString(),(currentYear - 6).toString(),(currentYear - 5).toString(), (currentYear - 4).toString(), (currentYear - 3).toString(), (currentYear - 2).toString(), (currentYear - 1).toString(), currentYear.toString()],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
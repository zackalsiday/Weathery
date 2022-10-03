const CHART = document.getElementById("lineChart");
// console.log(CHART)
function today(){
    
    let city;
    let listWeather = []
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
            .then(response => response.json())
            .then(data => city = data.city)
            .then(() => console.log(city))
            .then( 
                   () => fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=PRGYVCZ9WYDCWQ5DW54PUH6HX`)
                        .then(res => res.json())
                        .then( res => listWeather.push(res.currentConditions.temp))
            )
    })
    console.log(listWeather)
}
today()

const currentYear = new Date().getFullYear();
const lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [(currentYear - 9).toString(),(currentYear - 8).toString(),(currentYear - 7).toString(),(currentYear - 6).toString(),(currentYear - 5).toString(), (currentYear - 4).toString(), (currentYear - 3).toString(), (currentYear - 2).toString(), (currentYear - 1).toString(), currentYear.toString()],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3,5,17,12,1],
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
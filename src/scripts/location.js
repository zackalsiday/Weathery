
var lat;
let lon;
let obj;
 navigator.geolocation.getCurrentPosition(function (position) {
     if ('geolocation' in navigator) {
           lat = position.coords.latitude
           lon = position.coords.longitude
       
  
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=2e1af372c3224765a2abf47ef4f84cad`)
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => window.obj = obj)
     }
})





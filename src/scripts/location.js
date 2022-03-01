
var lat;
var lon;

 navigator.geolocation.getCurrentPosition(function (position) {
     if ('geolocation' in navigator) {
           lat = position.coords.latitude
           lon = position.coords.longitude
       
   
  
       
     }
})







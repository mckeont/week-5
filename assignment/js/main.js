/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
var downloadData = $.ajax("http://");
 var parseData = function() {};
 var makeMarkers = function() {};
 var plotMarkers = function() {};
 // var downloadData = $.ajax("http://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json");
 // var parseData = function(bikedata)
 // {
 //   return JSON.parse(bikedata);
 // };
 // // making markers
 // var makeMarkers = function(mark)
 // //coordinates
 // {
 //   return _.map(mark, function(coord.LAT, coord.LONG];});};
 //     {
 //      return L.marker([bikedata.Lat, bikedata.Lng]);
 //     };
 // _.each(bikedata,latLong);
 // };
 // //plotting markers
 // var plotMarkers = function(latLong)
 // {
 //   latLong.addTo(map);
 // };

 var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-solar-installations.json");
 var parseData = function(bikeData)
 {
   // console.log(JSON.parse(bikeData));
   return JSON.parse(bikeData);
 };
 var makeMarkers = function(marker)
 {
   return _.map (marker, function(coordinate)
     {
       // console.log(L.marker([coordinate.LAT, coordinate.LONG_]));
       return L.marker([coordinate.LAT, coordinate.LONG_]);
     });
 };
 var plotMarkers = function(plot)
 {
   _.map(plot, function(markers)
     {
       return markers.addTo(map);
     });
 };

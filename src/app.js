thermostat = new Thermostat();

$(document).ready(function() {

  var updateTemp = function() {
    $("#temperature").show(function() {
      temperature.innerHTML = thermostat.temperature;
      thermostat.setColour();
      temperature.style.color = thermostat.colour;
    });
  };


$('#search_city').click(function() {
  var city = $('#city').val();
  $.getJSON(('http://api.openweathermap.org/data/2.5/weather?q=' + city ), function(data) {
    $('#weather_api').html(Math.round((data.main.temp)-273.15));
  });
});

// var city = $('#city').val();
// // var country = $('#country').val();
//
//
//   $("#weather_api").show(function() {
//     var city = $('#city').val();
//     $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric",function(result){
//     // $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=paris&units=metric",function(result){
//         weather_api.innerHTML = "weather in "+result.name+": "+result.weather[0].description+": "+result.main.temp+" &#8451"+" & wind speed: "+result.wind.speed;
//     });
//   });

  $("#city").show(function() {
    updateTemp();
  });

  $("#temperature").show(function() {
    updateTemp();
  });

  $("#up").click(function() {
    thermostat.up();
    updateTemp();
  });

  $("#down").click(function() {
    thermostat.down();
    updateTemp();
  });

  $("#reset").click(function() {
    thermostat.reset();
    updateTemp();
  });

  $("#powersavingmode").change(function() {
    if (thermostat.powerSavingMode === true) {
      thermostat.powerSaverOff();
    } else {
      thermostat.powerSaverOn();
    }
  });
  
  $("#up").mouseenter(function() {
    $(this).animate({
      height: "+=2px"
    });
  });

  $("#up").mouseleave(function() {
    $(this).animate({
      height: "-=2px"
    });
  });

  $("#down").mouseenter(function() {
    $(this).animate({
      height: "+=2px"
    });
  });

  $("#down").mouseleave(function() {
    $(this).animate({
      height: "-=2px"
    });
  });


  $("#up").mouseenter(function() {
    $(this).animate({
      width: "+=2px"
    });
  });

  $("#up").mouseleave(function() {
    $(this).animate({
      width: "-=2px"
    });
  });

  $("#down").mouseenter(function() {
    $(this).animate({
      width: "+=2px"
    });
  });

  $("#down").mouseleave(function() {
    $(this).animate({
      width: "-=2px"
    });
  });

});

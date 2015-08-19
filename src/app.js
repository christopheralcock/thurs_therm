thermostat = new Thermostat();

$(document).ready(function() {

  var updateTemp = function() {
    $("#temperature").show(function() {
      temperature.innerHTML = thermostat.temperature;
      thermostat.setColour();
      temperature.style.color = thermostat.colour;
    });
  };

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
      height: "+=20px"
    });
  });

  $("#up").mouseleave(function() {
    $(this).animate({
      height: "-=20px"
    });
  });

  $("#down").mouseenter(function() {
    $(this).animate({
      height: "+=20px"
    });
  });

  $("#down").mouseleave(function() {
    $(this).animate({
      height: "-=20px"
    });
  });


  $("#up").mouseenter(function() {
    $(this).animate({
      height: "+=20px"
    });
  });

  $("#up").mouseleave(function() {
    $(this).animate({
      height: "-=20px"
    });
  });

  $("#down").mouseenter(function() {
    $(this).animate({
      height: "+=20px"
    });
  });

  $("#down").mouseleave(function() {
    $(this).animate({
      height: "-=20px"
    });
  });

});

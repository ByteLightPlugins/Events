var getFormattedTime = function () {
  var ampm = "";
  var d = new Date();
  var hour = d.getHours();

  if (hour < 12) {
    ampm = "AM";
  }
  else {
    ampm = "PM";
  }

  if (hour == 0) {
    hour = 12;
  }
  else if (hour > 12) {
    hour -= 12;
  }

  hour = "" + hour;
  if (hour.length == 1) {
    hour = " " + hour;
  }

  var min = "" + d.getMinutes();
  if (min.length == 1) {
    min = "0" + min;
  }

  return "" + hour + ":" + min + " " + ampm;
}

$(function () {
  $('#post').click(function (e) {
    var content = JSON.stringify({name:$('#name-i').val(), time:getFormattedTime()});
    BL.createContent(content);
  });
});
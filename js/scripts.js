var beverage = $("#beverage").val();

var flavor = $("input:radio[name=flavor]:checked").val();

var dob = $("#born").val();

var favoriteColor = $("#color").val();



$(document).ready(function() {
  $("#beverage").submit(function(event) {
  var beverage = $("#beverage").val();
  alert(beverage);

    event.preventDefault();
  });
});

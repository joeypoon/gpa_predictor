$(document).ready(function() {
  $(".alert").hide();
});

$(".add").click(function() {
    $("form > div:first-child").next().clone(true).insertBefore("form > div:last-child");
    return false;
});

$(".remove").click(function() {
    $(this).parent().remove();
});

$("#calculate").click(function(event){

  event.preventDefault();

  var qualityPoints = function(credits, gpa) {
    return credits * gpa;
  }

  var currentGrade = parseFloat($("#gpa").val());
  var attemptedCredits = parseInt($("#credits").val(), 10);
  var currentQualityPoints = qualityPoints(attemptedCredits, currentGrade);

  var course = $(".class-fields");

  var newCredits = 0;
  var newQualityPoints = 0;

  $.each( course, function( key, value ) {
    var gpa = parseFloat($(value).find('.class-gpa').val());
    var credits = parseInt($(value).find('.class-credits').val(), 10);
    newCredits += credits;
    newQualityPoints += (gpa * credits);
  });

  var totalQualityPoints = currentQualityPoints + newQualityPoints;
  var totalCredits = attemptedCredits + newCredits;

  var newGrade = totalQualityPoints / totalCredits;

  if (isNaN(parseFloat(newGrade))) {
    $(".alert").html("Invalid: all fields must be completed");
    $(".alert").show();
  } else {
    $(".alert").html("GPA: " + newGrade);
    $(".alert").show();
  }

});

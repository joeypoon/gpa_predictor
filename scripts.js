$(".add").click(function() {
    $("form > div:first-child").next().clone(true).insertBefore("form > div:last-child");
    return false;
});

$(".remove").click(function() {
    $(this).parent().remove();
});

$("#calculate").click(function(event){

  event.preventDefault();

  var attempted_credits = $("#gpa").val();
  var gpa = $("#credits").val();

  var qualityPoints = function(credits, gpa) {
    return credits * gpa
  }

  // var grades = $(".class-gpa");
  // var credits = $(".class-credits");
  //
  // var allGrades = _.map(grades, function(grade){
  //   return parseInt(grade.value);
  // });
  //
  // var sumGrades = _.reduce(allGrades, function(memo, num){ return memo + num; }, 0);
  //
  // console.log(sumGrades);

  var course = $(".class-fields");

  $.each( course, function( key, value ) {
    var totalCredits = [];
    var gpa = $(value).find('.class-gpa').val();
    var credits = $(value).find('.class-credits').val();
    totalCredits.push(credits);

  });

  //
  // var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  // => 2

  // var courseQualityPoints = _.map(grades, function(grade){
  //   return parseInt(grade.value);
  // });

  // var grades = $(".class-gpa");

  // var arr = [].slice.call(grades);

  // console.log(grades);

  // arr.forEach(function(e) {
  //   var $element = $(e);
  //   console.log($element.val());
  // });

  // var allGrades = _.map(grades, function(grade){
  //   // TODO: findd the class-credits that corresponds to this grade
  //   // var points = $(grade).parent().find(".class-credits");
  //
  //   return {hours: grade.value, points: points.value};
  // });
  //
  // console.log(allGrades);
  //
  //
  // var totalHours = _.reduce(allGrades, function(total,grade){
  //   return total + grade.hours;
  // }, 0);
  //
  // var totalPoints = _.reduce(allGrades, function(total,grade){
  //   return total + grade.points;
  // }, 0);
  //
  // console.log("totalHours = " + totalHours);
  // console.log("totalPoints = " + totalPoints);
  //
  // // TODO: Calculate
  // var avg = (totalPoints * totalHours) / totalHours;
  //
  //
  // console.log(avg);


  // $.each(grades, function(i){
  //   var $element = $(grades[i]);
  //   console.log($element.val());
  // });


  //
  // console.log("grades: " + grades);
  // console.log("credits: " + credits);

});

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
};
// Nhạc
var nhac = $("#nhac")[0];
$("body")
	.mouseover(function() {
    nhac.play();
  });
var hover = $("#hover")[0]
  $(".box2")
	.click(function() {
    hover.play();
	});
  
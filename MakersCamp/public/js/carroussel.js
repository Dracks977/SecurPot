var socket = io();
var i = 0;

$( document ).ready(function() {
     socket.on('img', function(data) {
	 $("#carroussel")
	     .prepend("<div class='carroussel-element'><img src=data:image/jpeg;base64," + data.toString('base64') + "/></div>");
		
	 
	 if ($(".carroussel-element").size() == 21)
	     $(".carroussel-element:last-child").remove();

	 $('.carroussel-element').off("click").on("click", function() {
	     $("#test").empty();
	     $(this).clone().appendTo('#test')
	 })
     })  

     $('#test').click(function() {
	 $(this).empty()
     });
 })

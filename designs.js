$( "form" ).submit(function( event ) {
  event.preventDefault();
});

let color = "";
var xWidth = Number($('#input_width').val());
var yHeight = Number($('#input_height').val());
const table = $('#pixel_canvas');
const instructions = $('#instText');

 // Select color input
$('#colorPicker').on('change', function(){
	color = $(this).val();
});

// Select size input
$('#input_width').on('change', function(){
	xWidth = Number($(this).val());
});

$('#input_height').on('change', function(){
	yHeight = Number($(this).val());
});

$('#gameStart').on('click', function(){
	if (xWidth > 40 && yHeight > 40) {
		//alert("It is oversized. The maximum number you can enter is 40");
	}else {
		makeGrid();
		if (xWidth !== 1 && yHeight !== 1) {
			$(this).val('Reset');
		}
	}
});

$('#instructions').on('click', function(){
	instructions.toggle(function(){
		$('#instructions').css('transition', 'all 1s ease-in-out');
	});
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {
//Clear the table
table.children().remove();

	for (var y = 0; y < yHeight; y++){
		table.append("<tr></tr>");
		for (var x = 0; x < xWidth; x++){
			table.children().last().append("<td></td>");
			}
	}

	$('td').on('click', function(){
		$(this).css('background-color', color);
	});
	$('td').on('dblclick', function(){
		$(this).css('background-color', 'white');
	});
}

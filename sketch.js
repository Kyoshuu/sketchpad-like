$(document).ready(function() {
	generate(16);

	$('#reset').hover(
	function() {
		$(this).css("border-width", "2px");
	},
	function() {
		$(this).css("border-width", "1px");
	});

	$('#reset').click(function() {
		var size = prompt("Size of sketch: ");

		$('#grid').empty();
		
		generate(size);
	});
});

function generate(size) {
	for(var i = 1; i <= size * size; i++) {
		$('#grid').append('<div class="node"></div>');
		
		if(i%size == 0) {
			$('#grid').append('<div style="clear: both;"></div>');
		}
	}

	$('.node').hover(function() {
		$(this).css('background-color', 'black');
	});

	var nodeSize = (544 - size * 4) / size;

	$('.node').css("width", nodeSize + "px");
	$('.node').css("height", nodeSize + "px");
};

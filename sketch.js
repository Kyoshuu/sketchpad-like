var opacity = 0;
var mode = 0;

$(document).ready(function() {
	generate(16);
	drawBasic(false);

	$('#reset').hover(
	function() {
		$(this).css("border-width", "2px");
	},
	function() {
		$(this).css("border-width", "1px");
	});
});

function generate(size) {
	var $grid = $('#grid');
	for(var i = 1; i <= size * size; i++) {
		$grid.append('<div class="node"></div>');
		
		if(i%size == 0) {
			$grid.append('<div style="clear: both;"></div>');
		}
	}

	var nodeSize = (512 - size * 2) / size;

	$('.node').css("width", nodeSize + "px");
	$('.node').css("height", nodeSize + "px");
};

function resetOnClick() {
	var size = prompt("Size of sketch: ");

	$('#grid').empty();
	
	generate(size);

	switch(mode) {
		case 0: drawBasic(false);
		case 1: drawGradient(false);
		case 2: drawRandom(false);
	}
}

function drawBasic(res=true) {
	mode=0;
	if(res){
		resetOnClick();	
	}

	$('.node').unbind('mouseenter');
	$('.node').mouseenter(function() {
		$(this).css('background-color', 'black');
	});
}

function drawGradient(res=true) {
	mode=1;
	if(res){
		resetOnClick();	
	}

	opacity = 0;

	$('.node').unbind('mouseenter');
	$('.node').mouseenter(function() {
		opacity += 0.1;
		if(opacity > 1) {
			opacity = 1;
		}
		$(this).css('background-color', 'black');
		$(this).css('opacity', opacity);
	});
}

function drawRandom(res=true) {
	mode=2;
	if(res){
		resetOnClick();
	}

	$('.node').unbind('mouseenter');
	$('.node').mouseenter(function() {
		$(this).css('background-color', 'rgb(' + parseInt(Math.random() * 256) + ', ' + parseInt(Math.random() * 256) + ', ' + parseInt(Math.random() * 256) + ')');
	});
}
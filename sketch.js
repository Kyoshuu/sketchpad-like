$(document).ready(function() {
	var $content = $("#content");

	for(var i = 1; i <= 16 * 16; i++) {
		$content.append('<div class="node"></div>');
		
		if(i%16 == 0) {
			$content.append('<div style="clear: both;"></div>');
		}
	}
});

		$("#character-select > ul >li >img").click(function(){
			$(this).css('opacity','1');
			$('div').remove('character-Aragorn');
		});
		$('li').hover(  function() {
    		$(this).append($('<span> ***</span>'));
  			}, function() {
    		$(this).find('span:last').remove();
 	 	});
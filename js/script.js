$
(
	function()
	{
		$('#av').click
		(
			function()
			{
				$('#voiture').animate({left:"180px"}, 6000, 'linear');
			}
		)
		$('#st').click
		(
			function()
			{
				$('#voiture').stop(true, false);
			}
		)
		$('#ar').click
		(
			function()
			{
				$('#voiture').animate({left:"800px"}, 6000, 'linear');
			}
		)
 
		function colorier()
		{
			//var n = div.queue( "fx" );
			//$( "span" ).text( n.length );
			if ($('#voiture').css('left') < '250px')
				$('.led').css('background-color', 'red');
			else if ($('#voiture').css('left') < '320px')
				$('.led').css('background-color', 'green');
			else  if ($('#voiture').css('left') < '620px')
				$('.led').css('background-color', 'blue');
			else
				$('.led').css('background-color', 'black');
				
			setTimeout(colorier, 100);
		}
		
		colorier();
		
 		/*
		console.log($('#voiture').css('left'));
		if ($('#voiture').css('left') > '750px')
			$('.led').css('background-color', 'black');
		if ($('#voiture').css('left') < '500px')
			$('.led').css('background-color', 'red');
		*/
	}
);

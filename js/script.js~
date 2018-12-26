$
(
	function()
	{
		$('#av').click
		(
			function()
			{
				$('.led').css('background-color', 'black');
				$('#voiture').animate({left:"620px"}, 2000, 'linear');	/* -180 */
				$('#voiture').queue(function()
				{
					$('.led').css('background-color', 'blue');
					$(this).dequeue();
				});
				
				$('#voiture').animate({left:"320px"}, 4000, 'linear');	/* -300 */
				$('#voiture').queue(function()
				{
					$('.led').css('background-color', 'green');
					$(this).dequeue();
				});

				$('#voiture').animate({left:"250px"}, 1000, 'linear'); /* -70 */
				$('#voiture').queue(function()
				{
					$('.led').css('background-color', 'red');
					$(this).dequeue();
				});
				
				$('#voiture').animate({left:"180px"}, 1000, 'linear'); /* -70 */
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
				$('#voiture').animate({left:"250px"}, 1000, 'linear');
				$('#voiture').queue(function()
				{
					$('.led').css('background-color', 'green');
					$(this).dequeue();
				});
				
				$('#voiture').animate({left:"320px"}, 1000, 'linear');
				$('#voiture').queue(function()
				{
					$('.led').css('background-color', 'blue');
					$(this).dequeue();
				});

				$('#voiture').animate({left:"620px"}, 4000, 'linear');
				$('#voiture').queue(function()
				{
					$('.led').css('background-color', 'black');
					$(this).dequeue();
				});
				
				$('#voiture').animate({left:"800px"}, 2000, 'linear');
			}
		)
		/*
		console.log($('#voiture').css('left'));
		if ($('#voiture').css('left') > '750px')
			$('.led').css('background-color', 'black');
		if ($('#voiture').css('left') < '500px')
			$('.led').css('background-color', 'red');
		*/
	}
);

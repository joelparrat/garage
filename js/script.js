$
(
	function()
	{
		let NMBLED=24;
		let i;
		let n;
		let m;
		let s;
		let c;
		let obj = ['black', 0, 0, 'red', 1, 1, 'black', 3, 12, 'green', 4, 24, 'black', 2, 24, 'blue', 3, 12, 'black', 3, 12]; // couleur sens depart
		let ind = 0;
		let plsled;
		let maxled;
		
		$('.led').css('background-color', 'black');		// eteint tout
			
		// -------------------- test du bandeau r -> g -> b -------------------------
		
		c = obj[ind];
		s = obj[ind+1];
		n = obj[ind+2];
		affiche();
		
		// -------------------------- deplacement voiture ---------------------------
				
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

		// ------- colore le bandeau en fonction de la position de la voiture ---------
		
		function colorier()
		{
			if ($('#voiture').css('left') < '250px')
				$('.led').css('background-color', 'darkred');
			else if ($('#voiture').css('left') < '320px')
				$('.led').css('background-color', 'darkgreen');
			else  if ($('#voiture').css('left') < '620px')
				$('.led').css('background-color', 'darkblue');
			else
				$('.led').css('background-color', 'black');
				
			setTimeout(colorier, 100);
		}
 
		function affiche()
		{
			if ((n > 0) && (n < NMBLED+1))
			{
				$('#voyant .led:nth-child('+n+')').css('background-color', c);
				if (s >= 3)
				{
					m = NMBLED-n-1;
					$('#voyant .led:nth-child('+m+')').css('background-color', c);
				}
				
				if ((s%2) == 1)
					n++;
				else
					n--;
			}
			else
			{
				if (ind < 21)
				{
					ind+=3;
					
					c = obj[ind];
					s = obj[ind+1];
					n = obj[ind+2];
				}
				else
				{
					ind = 99;
					$('.led').css('background-color', 'black');		// eteint tout
				}
			}
			
			if (ind != 99)
				setTimeout(affiche, 100);
			else
				colorier();
		}
	}
);

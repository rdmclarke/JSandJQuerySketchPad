

	var main = function(n) {
		$('#container').html("");

		var count = prompt('Please enter a grid number from 25 to 75:');

		if (count >= 25 && count <= 75){

			/*var count = 16;*/

			for (var i=1; i<=count; i++){
				$('#container').prepend('<br>');
				for (var h=1; h<=count; h++){
					/*quotes within quotes need to double/single*/
					$('#container').prepend('<div class="grid"></div>');
				}
			}

			/*var resize = $('#container').css('width')/count;*/

			$('.grid').css('width', $('#container').width() / count - 2); 
			$('.grid').css('height', $('#container').height() / count - 2);
			$('.grid').css('background-color','green');
			



			$('.grid').mouseenter(function(){
				var rand = Math.random();
				var cellColor = '';

				if (rand <= 0.33){
					cellColor = 'red';
				}else if (rand > 0.33 && rand < 0.66){
					cellColor = 'yellow';
				}else{
					cellColor = 'orange';
				}

				switch(n){
					case 1:
						$(this).fadeTo(0, 0.1);
						break;
					case 2:
						$(this).css('background-color', cellColor);
						break;
					case 3:
						var opacity = $(this).css('opacity');
						if(opacity > 0){
							$(this).css('opacity', opacity - 0.2);
						}
						break;
				}
			});




		}else{
			alert('Please enter a number between the stated limits.')
		}
	}




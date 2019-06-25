$('#careerOption').click(function() 
	{
		console.log('Career Button Clicked');

	    $('#careerOption').css(
	    {
	        'background-color': 'black',
	        'color': 'white'
	    });

	    $('#projectsOption').css(
	    {
	        'background-color': 'white',
	        'color': 'black'
	    });
	}
);

$('#projectsOption').click(function() 
	{
		console.log('Projects Button Clicked');
		
	    $('#careerOption').css(
	    {
	        'background-color': 'white',
	        'color': 'black'
	    });

	    $('#projectsOption').css(
	    {
	        'background-color': 'black',
	        'color': 'white'
	    });
	}
);
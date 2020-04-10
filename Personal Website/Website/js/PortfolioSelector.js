function showInProgressPortfolio() {
	$('.completePortfolio').css('display', 'none');
	$('.gamesPortfolio').css('display', 'none');
	$('.inProgressPortfolio').css('display', 'flex');

	$('.portfolioSelector-inProgressButton').css(
		{
			"font-weight": "bold",
			"text-decoration": "none"
		});
	$('.portfolioSelector-completeButton').css(
		{
			"font-weight": "normal",
		});

	$('.portfolioSelector-gamesButton').css(
		{
			"font-weight": "normal",
		});
}

function showCompletePortfolio() {
	$('.inProgressPortfolio').css('display', 'none');
	$('.gamesPortfolio').css('display', 'none');
	$('.completePortfolio').css('display', 'flex');

	$('.portfolioSelector-completeButton').css(
		{
			"font-weight": "bold",
			"text-decoration": "none"
		}
	);
	$('.portfolioSelector-inProgressButton').css(
		{
			"font-weight": "normal",
		});

	$('.portfolioSelector-gamesButton').css(
		{
			"font-weight": "normal",
		});
}

function showGamesPortfolio() {
	$('.inProgressPortfolio').css('display', 'none');
	$('.completePortfolio').css('display', 'none');
	$('.gamesPortfolio').css('display', 'flex');

	$('.portfolioSelector-completeButton').css(
		{
			"font-weight": "normal",
		});

	$('.portfolioSelector-inProgressButton').css(
		{
			"font-weight": "normal",
		});

	$('.portfolioSelector-gamesButton').css(
		{
			"font-weight": "bold",
			"text-decoration": "none"
		});
}
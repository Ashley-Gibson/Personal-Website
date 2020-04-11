/* Manage Page Loading */
function hideLoader() {
	$('.loading').hide();
	$('.inProgressPortfolio').hide();
	$('.gamesPortfolio').hide();
	$('.page').show();
}

// Hide loading spinner
$(window).on('load', hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 30000);

$(document).ready(function () {
	$('.homeBody').removeClass("homeImageBlur");
	$('.homeBody').addClass("homeImageNoBlur");
});
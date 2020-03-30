// Manage Loading Spinner functionality
function hideLoader() 
{
    $('#loading').hide();
    $('#workPortfolio').hide();
    $('#page').show();
}

// Hide loading spinner
$(window).on('load', hideLoader);

function slideButtons()
{
    if ($('.creditsAnchor') !== null)
        $('.creditsAnchor').addClass('creditsAnchor-open');
}

// Slide Buttons
$(window).on('load', slideButtons);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 30000);

// Manage Portfolio Grid Show/Hide
function showWorkPortfolio()
{
    $('#educactionPortfolio').hide();
    $('#workPortfolio').show();

    $('#workSelectorButton').css(
        {
            "font-weight": "bold",
            "text-decoration":"none"
        });
    $('#educationSelectorButton').css(
        {			
            "font-weight": "normal",
            "text-decoration":"line-through"
        });
}

function showEducationPortfolio()
{
    $('#workPortfolio').hide();
    $('#educactionPortfolio').show();

    $('#educationSelectorButton').css(			
        {
            "font-weight": "bold",
            "text-decoration":"none"
        }
        );
    $('#workSelectorButton').css(
        {						
            "font-weight": "normal",
            "text-decoration":"line-through"
        });
}
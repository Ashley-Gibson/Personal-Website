// Manage Loading Spinner functionality
function hideLoader() 
{
    $('#loading').hide();
    $('#workPortfolio').hide();
    $('#page').show();

    initNavBar();
}

// Hide loading spinner
$(window).on('load', hideLoader);

function slideButtons()
{
    if ($('.creditsButton') !== null)
        $('.creditsButton').addClass('creditsButton-open');
    if ($('.stableButton') !== null)
        $('.stableButton').addClass('stableButton-open');
    if ($('.dashboardButton') !== null)
        $('.dashboardButton').addClass('dashboardButton-open');
}

// Slide Buttons
$(window).on('load', slideButtons);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 30000);

// Determine which Nav elements appear and style them appropriately
function initNavBar()
{
    // Hide Page Content
    $('#experienceContent').css({"display":"none"});
    $('#educationContent').css({"display":"none"});
    $('#photographyContent').css({"display":"none"});

    // Hide Education and Photography
    $('#nav4').css({"display":"none"});
    $('#nav5').css({"display":"none"});
    $('#nav6').css({"display":"none"});

    // Position Home Nav Left
    $('#nav1').css({"display":"inline-block","opacity":"1","font-weight":"normal","position":"fixed","left":"41%","font-size":"14px"});

    // Centralise Portfolio Nav       
    $('#nav2').css({"display":"inline-block","opacity":"1","font-weight":"bold","position":"fixed","left":"47%","font-size":"20px"});

    // Position Experience Nav Right
    $('#nav3').css({"display":"inline-block","opacity":"1","font-weight":"normal","position":"fixed","left":"55%","font-size":"14px"});

    // Position Home Nav Left
    $('#portfolioContent').css({"display":"inline-block","opacity":"1","position":"fixed", "left":"0%"});
}

// Manage Navigation Bar Carousel - NEEDS REVIEWING
function navigationBar_click(contentName)
{
    switch(contentName)
    {
        case "portfolio":
            showPortfolio();
        break;
        case "experience":
            showExperience();
        break;
        case "education":
            showEducation();
        break;
        case "photography":
            showPhotography();
        break;
    }
}

/* Show Content Blocks */

function showPortfolio()
{
    // Show/Hide relevant content
    $('#portfolioContent').css({"display":"block"});
    $('#experienceContent').css({"display":"none"});
    $('#educationContent').css({"display":"none"});
    $('#photographyContent').css({"display":"none"});

    // Hide Education, Photography and far right Home
    $('#nav4').css({"display":"none"});
    $('#nav5').css({"display":"none"});
    $('#nav6').css({"display":"none"});

    // Position Home Left
    $('#nav1').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%","font-size":"14px"});

    // Centralise Portfolio        
    $('#nav2').css({"display":"inline-block","font-weight":"bold", "margin-left":"10%", "margin-right":"10%","font-size":"20px"});

    // Position Experience Right
    $('#nav3').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%", "font-size":"14px"});
}

function showExperience()
{
    // Show/Hide relevant content
    $('#portfolioContent').css({"display":"none"});
    $('#experienceContent').css({"display":"block"});
    $('#educationContent').css({"display":"none"});
    $('#photographyContent').css({"display":"none"});

    // Hide Home, Photography and far right Home
    $('#nav1').css({"display":"none"});
    $('#nav5').css({"display":"none"});
    $('#nav6').css({"display":"none"});

    // Position Portfolio Left
    $('#nav2').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%", "font-size":"14px"});

    // Centralise Experience        
    $('#nav3').css({"display":"inline-block","font-weight":"bold", "margin-left":"10%", "margin-right":"10%","font-size":"20px"});

    // Position Education Right
    $('#nav4').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%", "font-size":"14px"});
}

function showEducation()
{
    // Show/Hide relevant content
    $('#portfolioContent').css({"display":"none"});
    $('#experienceContent').css({"display":"none"});
    $('#educationContent').css({"display":"block"});
    $('#photographyContent').css({"display":"none"});

    // Hide Home, Portfolio and far right Home
    $('#nav1').css({"display":"none"});
    $('#nav2').css({"display":"none"});
    $('#nav6').css({"display":"none"});

    // Position Experience Left
    $('#nav3').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%", "font-size":"14px"});

    // Centralise Education        
    $('#nav4').css({"display":"inline-block","font-weight":"bold", "margin-left":"10%", "margin-right":"10%","font-size":"20px"});

    // Position Photography Right
    $('#nav5').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%", "font-size":"14px"});
}

function showPhotography()
{
    // Show/Hide relevant content
    $('#portfolioContent').css({"display":"none"});
    $('#experienceContent').css({"display":"none"});
    $('#educationContent').css({"display":"none"});
    $('#photographyContent').css({"display":"block"});

    // Hide Home, Portfolio and Experience
    $('#nav1').css({"display":"none"});
    $('#nav2').css({"display":"none"});
    $('#nav3').css({"display":"none"});

    // Position Education Left
    $('#nav4').css({"display":"inline-block","font-weight":"normal","margin-left":"0%", "margin-right":"0%", "font-size":"14px"});

    // Centralise Photography        
    $('#nav5').css({"display":"inline-block","font-weight":"bold", "margin-left":"10%", "margin-right":"10%","font-size":"20px"});

    // Position far right Home Right
    $('#nav6').css({"display":"inline-block","font-weight":"normal", "margin-left":"0%", "margin-right":"0%", "font-size":"14px"});
}

// Left Navigation Arrow Click
function moveLeft()
{
    if(document.getElementById('portfolioContent').style.display !== "none")
    {
        window.open("http://www.ashley-gibson.co.uk", "_self");
    }
    else if(document.getElementById('experienceContent').style.display !== "none")
    {        
        animate("right", "nav2", "nav3", "nav4", "nav1", "experienceContent", "portfolioContent");
    }
    else if(document.getElementById('educationContent').style.display !== "none")
    {            
        animate("right", "nav3", "nav4", "nav5", "nav2", "educationContent", "experienceContent");
    }
    else if(document.getElementById('photographyContent').style.display !== "none")
    {
        animate("right", "nav4", "nav5", "nav6", "nav3", "photographyContent", "educationContent");       
    }
}

// Left Navigation Arrow Click
function moveRight()
{
    if(document.getElementById('portfolioContent').style.display !== "none")
    {
        animate("left", "nav1", "nav2", "nav3", "nav4", "portfolioContent", "experienceContent");
    }
    else if(document.getElementById('experienceContent').style.display !== "none")
    {   
        animate("left", "nav2", "nav3", "nav4", "nav5", "experienceContent", "educationContent");    
    }
    else if(document.getElementById('educationContent').style.display !== "none")
    {        
        animate("left", "nav3", "nav4", "nav5", "nav6", "educationContent", "photographyContent");
    }
    else if(document.getElementById('photographyContent').style.display !== "none")
    {
        window.open("http://www.ashley-gibson.co.uk", "_self");
    }
}

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

// Animation
function animate(direction, beforeNav, mainNav, afterNav, nextNav, pageContentDiv, pageContentNextDiv)
{
    // Get Elements to animate
    var beforeNavElement =  document.getElementById(beforeNav);
    var mainNavElement =    document.getElementById(mainNav);
    var afterNavElement =   document.getElementById(afterNav);
    var nextNavElement =    document.getElementById(nextNav);

    var pageContentDivElement = document.getElementById(pageContentDiv);
    var pageContentNextDivElement = document.getElementById(pageContentNextDiv);

    var navId;
    var pageContentId;

    // Get Original Positions
    var originalBeforeNavPosHorizontal =    beforeNavElement.style.left;
    var originalMainNavPosHorizontal =      mainNavElement.style.left;
    var originalAfterNavPosHorizontal =     afterNavElement.style.left;
    var originalNextNavPosHorizontal =      parseInt(afterNavElement.style.left) + 6;

    var originalPageContentDivPosHorizontal = pageContentDivElement.style.left;
    var originalNextPageContentDivPosHorizontal = pageContentNextDivElement.style.left;

    // Updated Element Positions
    var beforePosHorizontal = originalBeforeNavPosHorizontal;
    var mainPosHorizontal = originalMainNavPosHorizontal;
    var afterPosHorizontal = originalAfterNavPosHorizontal;
    var nextPosHorizontal = originalNextNavPosHorizontal;

    var pageContentPosHorizontal = originalPageContentDivPosHorizontal;
    var pageContentNextPosHorizontal = originalNextPageContentDivPosHorizontal;

    // Execute Animation Loop
    switch(direction)
    {
        case "left":
            navId = setInterval(function(){ manageNavAnimation(direction); }, 30);
            pageContentId = setInterval(function(){ managePageContentAnimation(direction); }, 30);
        break;
        case "right":
            navId = setInterval(function(){ manageNavAnimation(direction); }, 30);
            pageContentId = setInterval(function(){ managePageContentAnimation(direction); }, 30);
        break;
    }

    // Show and Initialise Next Nav Element
    nextNavElement.style.position = "fixed";
    nextNavElement.style.display = "inline-block";
    nextNavElement.style.left = nextPosHorizontal.toString() + "%";
    nextNavElement.style.opacity = "0";

    // Show and Initialise Next Page Content Element
    pageContentNextDivElement.style.position = "fixed";
    pageContentNextDivElement.style.display = "inline-block";
    pageContentNextDivElement.style.left = pageContentNextPosHorizontal.toString() + "%";
    pageContentNextDivElement.style.opacity = "0";

    // Animate Navigation Bar
    function manageNavAnimation(direction)
    {
        switch(direction)
        {
            case "left":
                if (mainPosHorizontal <= parseFloat(originalMainNavPosHorizontal) - 6)
                {
                    // Stop Animation
                    clearInterval(navId);

                    // Hide Before Nav Element
                    beforeNavElement.style.display = "none";
                } 
                else 
                { 
                    // Calculate Nav Positions
                    beforePosHorizontal = parseFloat(beforePosHorizontal) - 0.1;
                    mainPosHorizontal = parseFloat(mainPosHorizontal) - 0.1;
                    afterPosHorizontal = parseFloat(afterPosHorizontal) - 0.1;
                    nextPosHorizontal = parseFloat(nextPosHorizontal) - 0.1;
                    
                    // Update Nav Positions
                    beforeNavElement.style.left = beforePosHorizontal.toString() + "%";
                    mainNavElement.style.left = mainPosHorizontal.toString() + "%";
                    afterNavElement.style.left = afterPosHorizontal.toString() + "%";
                    nextNavElement.style.left = nextPosHorizontal.toString() + "%";

                    // Transition Transparency of Nav Text
                    beforeNavElement.style.opacity = (parseFloat(beforeNavElement.style.opacity) - 0.03).toString();
                    nextNavElement.style.opacity = (parseFloat(nextNavElement.style.opacity) + 0.03).toString();

                    // Transition Font Size of Nav Text
                    mainNavElement.style.fontSize = (parseFloat(mainNavElement.style.fontSize) - 0.03).toString();
                    mainNavElement.style.fontWeight = "normal";
                    
                    afterNavElement.style.fontSize = (parseFloat(afterNavElement.style.fontSize) + 0.03).toString();
                    afterNavElement.style.fontWeight = "bold";
                    
                }
                break;
            case "right":
            if (mainPosHorizontal >= parseFloat(originalMainNavPosHorizontal) + 6)
            {
                // Stop Animation
                clearInterval(navId);

                // Hide Before Nav Element
                beforeNavElement.style.display = "none";
            } 
            else 
            { 
                // Calculate Nav Positions
                beforePosHorizontal = parseFloat(beforePosHorizontal) + 0.1;
                mainPosHorizontal = parseFloat(mainPosHorizontal) + 0.1;
                afterPosHorizontal = parseFloat(afterPosHorizontal) + 0.1;
                nextPosHorizontal = parseFloat(nextPosHorizontal) + 0.1;
                
                // Update Nav Positions
                beforeNavElement.style.left = beforePosHorizontal.toString() + "%";
                mainNavElement.style.left = mainPosHorizontal.toString() + "%";
                afterNavElement.style.left = afterPosHorizontal.toString() + "%";
                nextNavElement.style.left = nextPosHorizontal.toString() + "%";

                // Transition Transparency of Nav Text
                beforeNavElement.style.opacity = (parseFloat(beforeNavElement.style.opacity) - 0.03).toString();
                nextNavElement.style.opacity = (parseFloat(nextNavElement.style.opacity) + 0.03).toString();

                // Transition Font Size of Nav Text
                mainNavElement.style.fontSize = (parseFloat(mainNavElement.style.fontSize) + 0.03).toString();
                mainNavElement.style.fontWeight = "bold";
                
                afterNavElement.style.fontSize = (parseFloat(afterNavElement.style.fontSize) - 0.03).toString();
                afterNavElement.style.fontWeight = "normal";
            }
                break;
        }
    }

    // Animate Page Content
    function managePageContentAnimation(direction)
    {
        switch(direction)
        {
            case "left":
                if (pageContentPosHorizontal <= parseFloat(originalPageContentDivPosHorizontal) - 20)
                {
                    // Stop Animation
                    clearInterval(pageContentId);

                    // Hide Before Nav Element
                    pageContentDivElement.style.display = "none";
                } 
                else 
                { 
                    // Calculate Nav Positions
                    pageContentPosHorizontal = parseFloat(pageContentPosHorizontal) - 0.5;
                    pageContentNextPosHorizontal = parseFloat(pageContentNextPosHorizontal) - 0.5;
                    
                    // Update Nav Positions
                    pageContentDivElement.style.left = pageContentPosHorizontal.toString() + "%";
                    pageContentNextDivElement.style.left = pageContentNextDivElement.toString() + "%";

                    // Transition Transparency of Content
                    pageContentDivElement.style.opacity = (parseFloat(pageContentDivElement.style.opacity) - 0.03).toString();
                    pageContentNextDivElement.style.opacity = (parseFloat(pageContentNextDivElement.style.opacity) + 0.03).toString();
                }
                break;
            case "right":
                if (pageContentPosHorizontal >= parseFloat(originalPageContentDivPosHorizontal) + 20)
                {
                    // Stop Animation
                    clearInterval(pageContentId);

                    // Hide Before Nav Element
                    pageContentDivElement.style.display = "none";
                } 
                else 
                { 
                    // Calculate Nav Positions
                    pageContentPosHorizontal = parseFloat(pageContentPosHorizontal) + 0.5;
                    pageContentNextPosHorizontal = parseFloat(pageContentNextPosHorizontal) + 0.5;
                    
                    // Update Nav Positions
                    pageContentDivElement.style.left = pageContentPosHorizontal.toString() + "%";
                    pageContentNextDivElement.style.left = pageContentNextDivElement.toString() + "%";

                    // Transition Transparency of Content
                    pageContentDivElement.style.opacity = (parseFloat(pageContentDivElement.style.opacity) - 0.03).toString();
                    pageContentNextDivElement.style.opacity = (parseFloat(pageContentNextDivElement.style.opacity) + 0.03).toString();
                }
                break;
        }
    }
}
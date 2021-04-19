function showMobileNav() {
    $('.mobileNav').css('display', 'table');
    $('.close').css('display', 'block');
    $('html').css('overflow', 'hidden');
    $('body').css('overflow', 'hidden');
}

function hideMobileNav() {
    $('.mobileNav').css('display', 'none');
    $('.close').css('display', 'none');
    $('html').css('overflow', 'unset');
    $('body').css('overflow', 'unset');
}
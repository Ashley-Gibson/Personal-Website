function isVisible(element) {
    let contentBox = document.getElementsByClassName('experienceTable')[0].getBoundingClientRect();
    let elementBox = element.getBoundingClientRect();
    const distanceFromBottom = 80;

    if (elementBox.top <= (contentBox.bottom - distanceFromBottom) && elementBox.top >= contentBox.top)
        return true;
    else
        return false;
}

function scanContent() {
    let elementList = document.querySelectorAll('.experienceTable-item');
    elementList.forEach(function (element) {
        if (isVisible(element)) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }
        else
        {
            element.classList.remove('visible');
            element.classList.add('hidden');
        }
    });
}

$(document).ready(function () {  
    document.getElementsByClassName("experienceTable")[0].onscroll = scanContent;

    setTimeout(scanContent, 60);
});

function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}
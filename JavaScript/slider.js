var slides = document.querySelectorAll('.lenta .slider');
var prevBtn = document.querySelector('.left_clik_slide');
var nextBtn = document.querySelector('.right_clik_slide');
var dotsBox = document.querySelector('.dots');
var i = 0
var load = 0
var timer;
function dotsKoj() {
    for (var sliedeDot = 0; sliedeDot < slides.length; sliedeDot++) {
        var klorak = document.createElement(`button`)
        klorak.classList = `dot`
        dotsBox.append(klorak)
        klorak.setAttribute(`slider`, sliedeDot)
        klorak.onclick = function () {
            for (var j = 0; j < slides.length; j++) {
                slides[j].classList.remove('active');
            }
            var dotKnop = document.querySelectorAll('.dot');
            for (var j = 0; j < dotKnop.length; j++) {
                dotKnop[j].classList.remove('active');
            }
            i = parseInt(this.getAttribute('slider'));
            slides[i].classList.add('active');
            this.classList.add('active');

            reset();
        };
    }
}
function loade(index = false) {
    if (!index) {
        index = i
    }
    if (load == 0) {
        document.documentElement.scrollTop = 0
        load++
    }
    var dotKnop = document.querySelectorAll(`.dot`)
    if (i > 0) {
        slides[i - 1].classList.remove(`active`)
        if(dotKnop) {
            dotKnop[i - 1].classList.remove(`active`)
        }
    }
    if (i < slides.length) {
        slides[i].classList.add(`active`)
        if(dotKnop) {
            dotKnop[i].classList.add(`active`)
        }
        i++
    } else {
        i = 0
        loade()
    }
    reset()
}

function left() {
    for (var j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');
    }
    var dotKnop = document.querySelectorAll('.dot');
    for (var j = 0; j < dotKnop.length; j++) {
        dotKnop[j].classList.remove('active');
    }

    i--;
    if (i < 0) {
        i = slides.length - 1;
    }

    slides[i].classList.add('active');
    if (dotKnop[i]) {
        dotKnop[i].classList.add('active');
    }

    reset();
}

function rights() {
    for (var j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');
    }
    var dotKnop = document.querySelectorAll('.dot');
    for (var j = 0; j < dotKnop.length; j++) {
        dotKnop[j].classList.remove('active');
    }

    i++;
    if (i >= slides.length) {
        i = 0;
    }

    slides[i].classList.add('active');
    if (dotKnop[i]) {
        dotKnop[i].classList.add('active')
    };

    reset();
}
function reset() {
    clearInterval(timer)
    timer = setInterval(loade, 10000)
}
dotsKoj()
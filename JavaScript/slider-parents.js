var dot_box = document.querySelector('.dot_box');
var us = document.querySelectorAll('.us');
var mardu_box = document.querySelector('.mardu_box');
var sli = document.querySelector('.sli');
var card = document.querySelector('.card');

var scroll = 0;
var scklor = 0;
var cre = 0;
var ekran_razm = window.innerWidth;

if (ekran_razm > 720) {
    cre = 1;
} else {
    cre = 0;
}

var tempe;

function dotkojak_us() {
    for (var usd = 0; usd < us.length; usd++) {
        var klorak_usd = document.createElement('button');
        klorak_usd.classList.add('dot-parent');
        klorak_usd.onclick = function () {
            console.log('hello');
            var klor2 = document.querySelectorAll('.dot-parent');
            for (var rem = 0; rem < klor2.length; rem++) {
                klor2[rem].classList.remove('active');
            }
            this.classList.add('active');
            reset_slide()
            slide()
        };

        dot_box.append(klorak_usd);
    }
    
    var klor = document.querySelectorAll('.dot-parent');
    if (klor[cre]) {
        klor[cre].classList.add('active');
    }
    cre++;
}

dotkojak_us();

var klorAK2 = document.querySelectorAll('.dot-parent');

function slide() {
    var okno = mardu_box.getBoundingClientRect().width;
    var polnaya = sli.scrollWidth;
    var maxScroll = polnaya - okno;
    
    var card_razm = card.getBoundingClientRect().width;
    var klor_razmer = klorAK2[0].getBoundingClientRect().width;
    var gapKlor = parseInt(getComputedStyle(dot_box).gap) || 0;
    var gapElem = parseInt(getComputedStyle(sli).gap) || 0;
    
    var sliedePx = Math.ceil(card_razm + gapElem);
    var scrollKlor = Math.round(klor_razmer + gapKlor);

    if (scroll <= maxScroll - 1) {
        scroll += sliedePx;
        scklor += scrollKlor;
        
        sli.style.transition = '1s';
        sli.style.transform = `translateX(-${scroll}px)`;
        
        if (klorAK2[cre]) {
            klorAK2[cre].classList.add('active');
        }
        if (klorAK2[cre - 1]) {
            klorAK2[cre - 1].classList.remove('active');
        }
        
        dot_box.style.transition = '1s';
        dot_box.style.transform = `translateX(-${scklor}px)`;
        
        cre++;
    } else {
        scroll = 0;
        sli.style.transition = '1s';
        sli.style.transform = 'translateX(0px)';
        
        scklor = 0;
        if (ekran_razm > 720) {
            cre = 1;
        } else {
            cre = 0;
        }
        
        for (var sd = 0; sd < klorAK2.length; sd++) {
            klorAK2[sd].classList.remove('active');
        }
        
        if (klorAK2[cre]) {
            klorAK2[cre].classList.add('active');
        }
        
        dot_box.style.transition = '1s';
        dot_box.style.transform = 'translateX(0px)';
        
        cre++;
    }
}

function reset_slide() {
    clearInterval(tempe);
    tempe = setInterval(slide, 5000);
}

reset_slide();
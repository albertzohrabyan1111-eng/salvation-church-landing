var dots_box = document.querySelector(`.dots_box`)
var dots_parent = document.querySelector(`.dots-parent`)
var dot_box = document.querySelector(`.dot_box`)
var us = document.querySelectorAll(`.us`)
var mardu_box = document.querySelector(`.mardu_box`)
var sli = document.querySelector(`.sli`)
var scroll = 0
var scklor = 0
var cre = 1
var tempe;
function dotkojak_us() {
     for (var usd = 0; usd < us.length; usd++) {
          var klorak_usd = document.createElement(`button`)
          klorak_usd.classList.add(`dot-parent`)
          dot_box.append(klorak_usd)
     }
     var klor = document.querySelectorAll(`.dot-parent`)
     klor[cre].classList.add(`active`)
     cre++
}
dotkojak_us()
var klorAK2 = document.querySelectorAll(`.dot-parent`)

function slide() {
     var mardu_box_razm = mardu_box.getBoundingClientRect().width
     var sliedePx = Math.ceil(mardu_box_razm / 3)
     var box_razmer = dot_box.getBoundingClientRect().width
     var klor_razmer = klorAK2[0].getBoundingClientRect().width
     var gapKlor = parseInt(getComputedStyle(dot_box).gap)
     var scrollKlor = Math.round(klor_razmer + gapKlor)
     if (scroll <= mardu_box_razm) {
          scroll += sliedePx
          scklor += scrollKlor
          sli.style = `
          transition: 1s;
          transform: translateX(-${scroll}px);
          `
          klorAK2[cre].classList.add(`active`)
          klorAK2[cre - 1].classList.remove(`active`)
          dot_box.style = `
          transition: 1s;
          transform: translateX(-${scklor}px);
          `
          cre++
          
     } else if (scroll > mardu_box_razm) {
          scroll = 0
          sli.style = `
          transition: 1s;
          transform: translateX(0px);
          `
          scklor = 0
          cre = 1
          for (var sd = 0; sd < klorAK2.length; sd++) {
               klorAK2[sd].classList.remove(`active`)
          }
          klorAK2[cre].classList.add(`active`)
          dot_box.style = `
          transition: 1s;
          transform: translateX(0px);
          `
          cre++
     }
}


function reset_slide() {
     clearInterval(tempe)
     tempe = setInterval(slide, 5000)
}

reset_slide()
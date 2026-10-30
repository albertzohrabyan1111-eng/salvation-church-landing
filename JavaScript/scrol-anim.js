var box = document.querySelectorAll(".anim-cl");
function onScrollAnim() {
     for (var a = 0; a < box.length; a++) {
          var y = box[a].getBoundingClientRect().y;
          var height = box[a].getBoundingClientRect().height;
          if (y <= height) {
               box[a].classList.add(`box-anim`)
               var al = box[a].getAttribute(`data-vsyo-ok`)
               if (al == `box7`) {
                    var elem1 = box[a].querySelector(`.anim7-1`)
                    var elem2 = box[a].querySelector(`.anim7-2`)
                    var elem3 = box[a].querySelector(`.anim7-3`)
                    elem1.classList.add(`an1`)
                    elem2.classList.add(`an2`)
                    elem3.classList.add(`an3`)
               }
          } else {
               var classElem = box[a].classList
               for (var d = 0; d < classElem.length; d++) {
                    if (classElem[classElem.length - 1] == `box-anim`) {
                         box[a].classList.remove(`box-anim`)
                    }
                    var al1 = box[a].getAttribute(`data-vsyo-ok`)
                    if (al1 == `box7`) {
                         var elem1 = box[a].querySelector(`.anim7-1`)
                         var elem2 = box[a].querySelector(`.anim7-2`)
                         var elem3 = box[a].querySelector(`.anim7-3`)
                         elem1.classList.remove(`an1`)
                         elem2.classList.remove(`an2`)
                         elem3.classList.remove(`an3`)
                    }
               }

          }
     }

     var box4Element = document.querySelector(`.box4`);
     var y4 = box4Element.getBoundingClientRect().y;
     var height = box4Element.getBoundingClientRect().height;
     var blok4_2 = box4Element.querySelector(`.blok4_2`);
     var blok4_3 = box4Element.querySelector(`.blok4_3`);
     var blok4_4 = box4Element.querySelector(`.blok4_4`);
     var blok4_5 = box4Element.querySelector(`.blok4_5`);
     var shot_m = box4Element.querySelector(`.members-shot`);
     var shot_p = box4Element.querySelector(`.pastors-shot`);
     var shot_d = box4Element.querySelector(`.donation-shot`);
     var shot_c = box4Element.querySelector(`.churchies-shot`);
     if (y4 <= height * 2) {
          if (blok4_2) blok4_2.classList.add(`anim1`);
          if (blok4_3) blok4_3.classList.add(`anim2`);
          if (blok4_4) blok4_4.classList.add(`anim3`);
          if (blok4_5) blok4_5.classList.add(`anim4`);
          startCounters();
     }
     else {
          counterStarted = false;
          if (blok4_2) blok4_2.classList.remove(`anim1`);
          if (blok4_3) blok4_3.classList.remove(`anim2`);
          if (blok4_4) blok4_4.classList.remove(`anim3`);
          if (blok4_5) blok4_5.classList.remove(`anim4`);
          if (shot_m) shot_m.innerHTML = `0`;
          if (shot_p) shot_p.innerHTML = `0`;
          if (shot_d) shot_d.innerHTML = `0`;
          if (shot_c) shot_c.innerHTML = `0`;
     }

}
setTimeout(scroll, 1);
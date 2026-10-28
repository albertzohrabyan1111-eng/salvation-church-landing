var counterStarted = false;
function startCounters() {
     if (counterStarted) {
          return
     };
     counterStarted = true;
     var shot_m = document.querySelector(`.members-shot`)
     var targ_m = 1005000
     var limit_m = targ_m / 500
     var arj_m = 0
     var shot_p = document.querySelector(`.pastors-shot`)
     var targ_p = 65000
     var limit_p = targ_p / 500
     var arj_p = 0
     var shot_d = document.querySelector(`.donation-shot`)
     var targ_d = 500000
     var limit_d = targ_d / 500
     var arj_d = 0
     var shot_c = document.querySelector(`.churchies-shot`)
     var targ_c = 50
     var limit_c = targ_c / 500
     var arj_c = 0
     function shot() {
          if (arj_m < targ_m) {
               arj_m += limit_m
               shot_m.innerHTML = Math.round(arj_m)


          }
          if (arj_p < targ_p) {
               arj_p += limit_p
               shot_p.innerHTML = Math.round(arj_p)
          }
          if (arj_d < targ_d) {
               arj_d += limit_d
               shot_d.innerHTML = Math.round(arj_d)

          }
          if (arj_c < targ_c) {
               arj_c += limit_c
               shot_c.innerHTML = Math.round(arj_c)

          }
          if (arj_m >= targ_m && arj_p >= targ_p && arj_d >= targ_d & arj_c >= targ_c) {
               clearInterval(inter)
          }
     }

     var inter = setInterval(shot, 1)
}


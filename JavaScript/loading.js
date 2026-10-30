var loading = document.querySelectorAll(`.lo`)
function noloade() {
     for (var no = 0; no < loading.length; no++) {
          loading[no].remove()
     }
     document.body.style.overflow = 'scroll';

}
setTimeout(noloade, 2000)
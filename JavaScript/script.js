var panel = document.querySelector(`.panel`)
var lenta = document.querySelector(`.lenta`)
var content_box = document.querySelector(`.content_box`)
var cont_head_box = document.querySelectorAll(`.cont_head_box`)
var box1 = document.querySelector(`.box1`)
var box1Height = box1.getBoundingClientRect().height
var panelHeight = panel.getBoundingClientRect().height
var contBoxRazm = box1Height - panelHeight
var contBoxMargin = panelHeight
for (var a = 0; a < cont_head_box.length; a++) {
     cont_head_box[a].style.height = `${contBoxRazm}px`
     cont_head_box[a].style.marginTop = `${contBoxMargin}px`
}

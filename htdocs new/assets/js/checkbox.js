function toggleCheckBox (cb) {
    if (!cb.on) {
    cb.on = true
    cb.html.style.backgroundImage = "url( '/images/checkboxon.svg' )"
    } else {
    cb.on = false
    cb.html.style.backgroundImage = "url( '/images/checkboxoff.svg' )"
    }
}

function CheckBox (el) {
    this.on = false
    this.html = el
}


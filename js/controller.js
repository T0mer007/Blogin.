'use strict'


function onOpenMenu() {
    document.querySelector('body').classList.toggle('open-menu')
}

function onToggleModal(){
    document.querySelector('.modal').classList.toggle('visible')
}

function onJornalMenu(){
    document.querySelector('.journal-modal').classList.toggle('drop-down')
}
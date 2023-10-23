(function(){
    const openButton = document.querySelector(`.nav__menu`);
    const menu = document.querySelector(`.nav__link`);
    const closeMenu = document.querySelector(`.nav__close`);

    openButton.addEventListener(`click`, ()=>{
        menu.classList.add(`nav__link--show`);
    });
    closeMenu.addEventListener(`click`, ()=>{
        menu.classList.remove(`nav__link--show`);
    })

    //menu.toggleAttribute() agergaria y scaria si fuera 1 solo boton
})();
$( document ).ready(function() {
    var toggleMenuButton = $("#toggle-menu-button");
    var toggleMenu = $("#toggle-menu");
    var sideMenuOverlay = $("#side-menu-overlay");
    toggleMenuButton.click(function(){
        toggleMenu.addClass("active animated fadeInRight");
        sideMenuOverlay.addClass("active");
    });
    
    sideMenuOverlay.click(function(){
        toggleMenu.removeClass("active");
        sideMenuOverlay.removeClass("active");
    });
});
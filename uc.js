var 
    logo = document.getElementById("uc_logo"),
    posLogo = function(){        
        var 
            top = window.outerHeight*.5 - logo.offsetHeight*.5,
            left = window.outerWidth*.5 - logo.offsetWidth*.5;

        logo.style.top =  top + "px";
        logo.style.left = left + "px";
        logo.style.opacity = "1";
        console.log(top)
    }
;


window.onload = function(){
      posLogo();  
}

window.onresize = function(){
    posLogo();
}
/**
 * Created by Bishaka on 28/11/2016.
 */
(function(){

    var t2 = {};

    t2.renderParticleAnimation = function(){
        $('#particleAnimation').particleground({
            dotColor: '#F0F0F0',
            lineColor: '#F0F0F0'
        });
    };

    t2.setup_go_on_listener = function(){
        var go_on = document.querySelector("#go-on"),
            landing = document.querySelector("#landing"),
            scroll = function(){
                window.scrollBy({
                    top: landing.offsetHeight, // could be negative value
                    left: 0,
                    behavior: 'smooth'
                });
            };

        go_on.onclick = function(){
            scroll();
        };

    };

    t2.setupListeners = function(){
        t2.setup_go_on_listener();
    };

    t2.boot = function(){
        t2.renderParticleAnimation();
        t2.setupListeners();
    };

    $(document).ready(function(){
        t2.boot();
    })
}());
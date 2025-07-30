/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */

/*
    Template Name   :  appsun v 1.1.0 
    Template URI    : http://appsun-mobile.herokuapp.com/
    Description     : Appsun Help Any one You Need Build App Phone 
    Author          : Mohamed Alaa Abas
    Author URI      : https://themeforest.net/user/m_alaa/portfolio
    Author Facebook : https://www.facebook.com/SoftTheme-413907182303490/
    Author Email    : mohamedalaaabas93@gmail.com .
**/
'use strict';
$(window).on("load", function () {
    // Class Of Body 
    $(".loading").fadeOut();
    $('body').removeClass('scroll-hide');
    // Element Body For Page .
    $(window).scrollTop(0);
    new WOW().init();
});//End Loading
$(function () {
    var html = $('html'),
        width             = $(window).width(),
        navbarToggle      = $(".navbar-toggle"),
        navbarNav         = $('.navbar-nav'),
        nav               = $('#nav'),
        idNavBar          = $('#navbar'),
        CurrentScroll     = 0, // To Chick Scroll Down         
        contactGradients  = $('.contact-gradients');
        
    html.smoothScroll(1500);// Js SmoothScroll .
    
    /**========================
     **   Parallax Section
     **======================**/
    // Section Home Page      
    contactGradients.parallax({
        imageSrc: 'https://lh3.googleusercontent.com/LCy_60MDiUN9wZZLTw9ltR-vjEKkiGpC9Df_y12QSsYQ6CjEaRdvqtHvaDLFIcwe1oRRmBgRDBV8bMfsj3p1eMl8WvyV7hboUsJJjsiwQpQLnSsSYsXOFiQU6hhelZIQtMgsoYEY0hSrGYAkkrci67hPtIAwf-a9_YmgYyvEHjrz2RivKUZl-oCxUASUajLOrsiDpmmF5QtPipPzxfIPddIC8BIMyAPbai6WzLc-tMHlSjrrCEOmxzMMNjHC5lHpFen2oP9b4kD9sSps-U5leeOljDym_6WzKKCKnF-Rqh4Sp8IlPLTIZX8DeDPxPhnKGQSoGzdctVh84eoVKo9JxPNKWmS_IAx6Rsnxp0RVcUV3fM6qHKYkK38upf0qFZyzi-OgxOX9BRFQZgO4DmOsp8CiEp4OYxvmq7g6EqkKIEIBoLwO8INHHJVIYoTCCkikUTfek5yTf2KOLTTwQuWbn-6kqmiQWZbFDdRdSlb-NOJKTOBVXoBxM2-0eZssV8F4fYAq6XuDSS-5upnt3mZojnU3aTxIcTp8b7ZqxjHc7dDXzoBTNUYHljC8zgWcqXRbPmoV8dfVEAzm_IMn8YEK11pXbCeTQsUnnkDK2DQ=w367-h190-no'
    });
    /**========================
     **   Parallax Section
     **======================**/

    // Start Width Mobile Nav 
    if (width < 768) {
        idNavBar.addClass('color-mobile-nav'); // Add Class Color-mobile-nav For Mobile To change Color .
    } else {
        idNavBar.removeClass('color-mobile-nav'); // Remove Class Color-mobile-nav For Mobile To change Color Or Set Default . 
    }
    $(window).on('resize', function () {
        var width = $(window).width(); // Cached width window .
        if (width < 763) {
            idNavBar.addClass('color-mobile-nav'); // Add Class Color-mobile-nav For Mobile To change Color .
        } else {
            idNavBar.removeClass('color-mobile-nav'); // Remove Class Color-mobile-nav For Mobile To change Color Or Set Default . 
        }
    });
        
    
    /**========================
     **    Start Scroll
     **======================**/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(), // Cached width window .
            NextScroll = $(this).scrollTop();
        if (scroll > 250) {
            nav.addClass('active'); // Color Navbar When Scroll . 
        } else {
            nav.removeClass('active'); // Reset Navbar Color Default .
        }
        // Check When Open nav Not Click any link And Scroll 
        if (navbarToggle.attr('aria-expanded') === "true") {
            navbarToggle.trigger("click"); // Close It 
        }
        // nav Hide When Scroll Down.        
        if (NextScroll > CurrentScroll) {
            nav.removeClass('scroll-up');
            nav.addClass('scroll-dwon');
        } else {
            nav.removeClass('scroll-dwon');
            nav.addClass('scroll-up');
        }
        CurrentScroll = NextScroll;
    });
    /**========================
     **    End Scroll
     **======================**/
    
    //Class active & hidden Nav when Click
    navbarNav.children().on("click", function () {
        if (navbarToggle.css("display") !== "none") {
            navbarToggle.trigger("click"); // To Heddin List Link For Nav When Click Any One 
        }
    });
});
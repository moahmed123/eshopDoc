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
    $(".loading").fadeOut().remove();
    $('body').removeClass('scroll-hide');
    // Element Body For Page .
    $(window).scrollTop(0);
    new WOW().init();
});//End Loading
$(function () {
    var html = $('html'),
        home              = $('.homeBlog'),
        width             = $(window).width(),
        navbarToggle      = $(".navbar-toggle"),
        navbarNav         = $('.navbar-nav'),
        nav               = $('#nav'),
        idNavBar          = $('#navbar'),
        clickIconComment  = $('.blog-content .comment-user .icons-comment ul li.comment-icon-click'),
        clickIconheart    = $('.blog-content .comment-user .icons-comment ul li.heart-icon-click a i'),
        clickIconShare    = $('.blog-content .comment-user .icons-comment ul li.share-icon-click'),
        iconSlider        = $('.blog-content .icon-slider'), // Bloger Icon To Show Slider 
        mobileClick       = $('.blog-content .mobile-click'), // Slider For Blog 
        coverslider       = $('#coverslider'),
        IconClose         = $('#iconclick'),
        CurrentScroll     = 0, // To Chick Scroll Down 
        allHidebodyclick  = $('.blog-content .comment-user .icons-comment ul li.share-icon-click, .blog-content .comment-user .icons-comment ul li .box-share, .blog-content .mobile-click, .blog-content .icon-slider'),
        contactGradients  = $('.contact-gradients');
    
    
    html.smoothScroll(1500);// Js SmoothScroll .
    
    /**========================
     **   Parallax Section
     **======================**/
    // Section Home Page    
    home.parallax({
        imageSrc: '../images/ploger/bg_titlebar1.jpg'
    });
    contactGradients.parallax({
        imageSrc: '../images/404.jpg'
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
     ** Start All Icon Click 
     **     Page Bloger 
     **======================**/
    // comment
    clickIconComment.on('click', function () {
        $(this).parent().parent().parent().parent().parent().find('.div-form-comment').toggleClass('hidden'); // To Show Form Comment .
    });
    //heart 
    clickIconheart.on('click', function () {
        $(this).toggleClass('fa-heart-o fa-heart'); // To Toggle Heart 
    });
    // share 
    clickIconShare.on('click', function () {
        clickIconShare.find('.box-share').removeClass('show opacity-share');// To Hide All Box Share .
        $(this).find('.box-share').toggleClass('show').delay(100).queue(function (next) { // Show Box Your User Click It .
            $(this).toggleClass('opacity-share');
            next();
        });
    });
    // To Show Div Content sidebar 
    iconSlider.on('click', function () {
        mobileClick.toggleClass('show-blog-dev');
        coverslider.addClass('cover');
    });
    IconClose.on('click', function () {
        mobileClick.removeClass('show-blog-dev');
        coverslider.delay(600).queue(function (nex) {
            $(this).removeClass('cover');
            nex();
        });
    });
    
    // close When Click Any thing .
    $('body').on('click', function (event) {
        if (!$(event.target).closest(allHidebodyclick).length) {
            $('.blog-content .comment-user .icons-comment ul li .box-share').removeClass('show opacity-share'); // Box Content Icon For Share Social Media 
            mobileClick.removeClass('show-blog-dev');
            coverslider.removeClass('cover');
        }
    });
    /* Slide Bloger to show slider */
    /**========================
     ** End All Icon Click 
     **     Page Bloger 
     **======================**/
    
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
        if (navbarToggle.attr('aria-expanded') == "true") {
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
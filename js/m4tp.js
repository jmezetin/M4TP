
var app = angular.module("m4tp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/about", {
        templateUrl : "views/public/about.html"
    })
    .when("/public", {
        templateUrl : "views/public/home.html"
    })
    .when("/services", {
        templateUrl : "views/public/services.html"
    })
    .when("/science", {
        templateUrl : "views/public/science_home.html"
    })
    .when("/createAction", {
        templateUrl : "views/research/createActions.html"
    })  
    .when("/submitResearch", {
        templateUrl : "views/research/submitResearch.html"
    })  
    .when("/research", {
        templateUrl : "views/research/home.html"
    })    
    .when("/faqs", {
        templateUrl : "views/faqs.html"
    });
});

/*
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

*/
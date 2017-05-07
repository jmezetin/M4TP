
var app = angular.module("m4tp", ["ngRoute", "ui.bootstrap"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller : "mapDemoCtrl"
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
    .when("/maps", {
        templateUrl : "views/public/mapDemo1.html",
        controller : "mapDemoCtrl"

    })
	  .when("/water", {
        templateUrl : "views/services/water_quality_va.html",
        controller : "mapDemoCtrl"

    })
        .when("/water-oh", {
        templateUrl : "views/services/water_quality_oh.html",
        controller : "mapDemoCtrl"

    })

        .when("/water-va", {
        templateUrl : "views/services/water_quality_va.html",
        controller : "mapDemoCtrl"

    })

	.when("/users", {
        templateUrl : "views/public/users.html",
        controller : "mapDemoCtrl"

    })
    .otherwise({
        template : "views/home.html"
    });
});

app.controller("mapDemoCtrl", function ($scope) {
    $scope.msg = "I love London";

$scope.pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "Natural Capital",
			"fontSize": 24,
			"font": "open sans"
		},
		"subtitle": {
			"text": "A list of Ecosystem Services",
			"color": "#999999",
			"fontSize": 12,
			"font": "open sans"
		},
		"location": "top-left",
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 590,
		"pieOuterRadius": "99%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Biodiversity",
				"value": 20,
				"color": "#0066cc"
			},
			{
				"label": "Water Quality",
				"value": 20,
				"color": "#003366"
			},
			{
				"label": "Air",
				"value": 20,
				"color": "#336600"
			},
			{
				"label": "Cultural Services",
				"value": 20,
				"color": "#669966"
			},
			{
				"label": "Pollination",
				"value": 20,
				"color": "#990000"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 32
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#ffffff",
			"fontSize": 18
		},
		"percentage": {
			"color": "#ffffff",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"fontSize": 24
		},
		"lines": {
			"enabled": true,
			"style": "straight"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	},
	"callbacks": {}
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
// google maps
	var locations = [
		['company location'],
		['user location']
	];

	function initialize(latitude, longitude) {
		$('#map-canvas').empty();
		var myLatLng = new google.maps.LatLng(latitude,longitude);
		var bounds = new google.maps.LatLngBounds();
	  var mapCanvas = document.getElementById('map-canvas');
	  var mapOptions = {
	    center: myLatLng,
	    zoom: 12,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			// icon: 'http://oi62.tinypic.com/2mhu3rr.jpg'
		});

		google.maps.event.addDomListener(window, 'load', initialize);
		var infowindow = new google.maps.InfoWindow();

		var marker, i;

		for(i=0; i < locations.length; i++){
			var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
			bounds.extend(position);
			marker = new google.maps.Marker({
				position: position,
				map: map,
				title: locations[i][0]
			});
			// this should center and zoom the area between the company and the user's location but it is giving an infinite loop error
			// map.fitBounds(bounds);
			// map.panToBounds(bounds);
			google.maps.event.addListener(marker, 'click', (function(marker,i){
				return function(){
					infowindow.setContent(locations[i][0]);
					infowindow.open(map, marker);
				}
			})(marker,i));
		}
}



function updateLocationDetails(data){
	var now = new Date();

	$("#location_query").html(data.query);
	$("#location_country").html(data.country);
	$("#location_regionName").html(data.regionName);
	$("#location_city").html(data.city);
	$("#location_timezone").html(data.timezone);
	$("#location_lat").html(data.lat);
	$("#location_lon").html(data.lon);

	initialize(data.lat, data.lon);
	locations[1][1] = data.lat;
	locations[1][2] = data.lon;

	$("table").removeClass("empty");
	$(".help").click(function(e){
		var fieldName = $(e.currentTarget).closest('tr').find('.field_name').text();
		alert("This is your " + fieldName + " from ISP " + data.isp + " at " + now);
	});
}

function getMyLocation() {
	$.ajax({
		type : 'GET',
		url : 'http://ip-api.com/json/',
		success : function(response){
			updateLocationDetails(response);
		}
	});
}

function resetLocationDetails() {
	updateLocationDetails({
		query: "0.0.0.0",
		country: "",
		regionName: "",
		city: "",
		timezone: "",
		lat: "",
		lon: ""
	});
	$("table").addClass("empty");
	locations[1][1] = ""
	locations[1][2] = ""
}

function initializePage(){
	window.indexTemplate = $('#index').html();
	window.locationTemplate = $('#locationInfo').html();

	window.indexTemplate = Handlebars.compile(window.indexTemplate);
	window.locationTemplate = Handlebars.compile(window.locationTemplate);

	$("#mainContent").html(window.indexTemplate());
	$("#geoLocationContainer").html(window.locationTemplate({
		id: 0,
		query: "0.0.0.0",
		country: "",
		regionName: "",
		city: "",
		timezone: "",
		lat: "",
		lon: ""
	}));
}

// backbone model
var Company = Backbone.Model.extend({
	initialize: function(){
		// console.log('backbone model is working');
	},
	defaults: {
		ip: '',
		country_code: '',
		country_name: '',
		region_code: '',
		region_name: '',
		city: '',
		zip_code: '',
		time_zone: '',
		latitude: '',
		longitude: '',
		metro_code: ''
	},
	urlRoot: '/'
});
var searchCompany = new Company();


// backbone
	//view
var CompanyView = Backbone.View.extend({
	tagName: "div",
	className: "company",
	render: function(){
		console.log('this is the view')
		// return this;
	},
	// events: {
	// 	'click #search-button' : 'getCompanyMap',
	// 	'click img': 'testing'
	// },
	getCompanyMap: function(e){
		$('#search-button').on('click', function(e){
			e.preventDefault();
			var formData = $('#search-text-area').val();
			Backbone.ajax({
				url: 'https://freegeoip.net/json/' + formData,
				type: 'GET',
				dataType: 'json'
			})
			.done(function(data) {
				searchCompany.set('ip', data.ip);
				searchCompany.set('city', data.city);
				searchCompany.set('zip_code', data.zip_code);
				searchCompany.set('longitude', data.longitude);
				searchCompany.set('latitude', data.latitude);
				initialize(data.latitude, data.longitude);
				locations[0][1] = data.latitude;
				locations[0][2] = data.longitude;
			})
			.fail(function() {
				console.log("error");
			});
		})
	}

})

var companyView = new CompanyView({
	model: searchCompany
});





$(document).ready(function(){
	initializePage();
	companyView.render();
	companyView.getCompanyMap();
});

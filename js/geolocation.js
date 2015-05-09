function updateLocationDetails(data){
	var now = new Date();

	$("#location_query").html(data.query);
	$("#location_country").html(data.country);
	$("#location_regionName").html(data.regionName);
	$("#location_city").html(data.city);
	$("#location_timezone").html(data.timezone);
	$("#location_lat").html(data.lat);
	$("#location_lon").html(data.lon);

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






function getCompanyLocation(){
	$('#search-button').on('click', function(e){
		e.preventDefault();
		console.log('search prevent default works');
		var formData = $('#search-text-area').val();
		console.log(formData);
		$.ajax({
			url: 'https://freegeoip.net/json/' + formData,
			type: 'GET',
			dataType: 'json'
		})
		.done(function(data) {
			console.log("success");
			console.log(data);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

	})
}

$(document).ready(function(){
	initializePage();
	getCompanyLocation();
});

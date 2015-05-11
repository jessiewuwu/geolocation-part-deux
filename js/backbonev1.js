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





// ajax
function getCompanyLocation(){
  $('#search-button').on('click', function(e){
    e.preventDefault();
    // console.log('search prevent default works');
    var formData = $('#search-text-area').val();
    // console.log(formData);
    $.ajax({
      url: 'https://freegeoip.net/json/' + formData,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      var Company = Backbone.Model.extend({
        initialize: function(){
          console.log('backbone model is working');
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
        }
      });
      var searchCompany = new Company(data);
      initialize(searchCompany);
    })
    .fail(function() {
      console.log("error");
    });

  })
}

// google maps
function initialize(data) {
  // console.log(data)
  $('#map-canvas').empty();
  var myLatLng = new google.maps.LatLng(data.attributes.latitude, data.attributes.longitude);
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: myLatLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'http://oi62.tinypic.com/2qi5vg6.jpg'
  });
  google.maps.event.addDomListener(window, 'load', initialize);
}


// backbone
  //view
var CompanyView = Backbone.View.extend({
  tagName: "div",
  className: "result",
  render: function(){
    // $(this.el).html(this.model.get('url'));
    this.$el.append('<img src="http://www.lovethispic.com/uploaded_images/120060-Animated-Kitty-Drawing.gif">');
    console.log('this is the view')
    return this;
  }
})

var companyView = new CompanyView({
  model: company
});
companyView.render();




// searchCompany.set('url', 'www.devbootcamp.com');
// searchCompany.save();
// console.log(searchCompany);



$(document).ready(function(){
  initializePage();
  getCompanyLocation();
});

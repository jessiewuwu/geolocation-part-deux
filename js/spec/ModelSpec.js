
// describe("A suite is just a function", function() {
//   var a;

//   it("and so is a spec", function() {
//     a = true;

//     expect(a).toBe(true);
//   });
// });
describe("Model Specs", function(){
  describe("Backbone Model is set up", function(){
    var myCompany;
    beforeEach(function(){
      var myCompany = new Company();
    });
    it("should return 'ip' attribute as empty strings"), function(){
      expect(myCompany.defaults.ip).tobeDefined();
      expect(myCompany.defaults.ip).toEqual("");
    }
    it("should return 'latitude' attribute as empty strings"), function(){
      expect(myCompany.defaults.latitude).tobeDefined();
      expect(myCompany.defaults.latitude).toEqual("");
    }
  });
    it("should return latitude of Google's location from API"), function(){
      var formData = $('#search-text-area').val("www.google.com");
      myCompanyView.getCompanyMap();
      expect(myCompanyView.get('latitude')).toEqual(37.419);
    }
})

describe("Ajax API calls", function(){
  var googleMap, request;
  var onSuccess, onFailure;
  beforeEach(function(){
    jasmine.Ajax.install();
    onSuccess = jasmine.createSpy('onSuccess');
    onFailure = jasmine.createSpy('onFailure');

    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: myLatLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    googleMap = new google.maps.Map(mapCanvas, mapOptions);
    google.maps.event.addDomListener(window, 'load', initialize, {
      onSuccess: onSuccess,
      onFailure: onFailure
    });

    request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe('https://freegeoip.net/json/google.com');
    exepect(request.method).toBe('GET');
    expect(request.data()).toEqual({"ip":"216.58.219.206","country_code":"US","country_name":"United States","region_code":"CA","region_name":"California","city":"Mountain View","zip_code":"94043","time_zone":"America/Los_Angeles","latitude":37.419,"longitude":-122.058,"metro_code":807});
    })
  })
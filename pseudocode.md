## Schedule
Saturday - functionality
- set up Bootstrap
- add functioning search form with GeoIP API working
- implement Google Maps API
- review the original code
* use Backbone and Mustache for the Model, View
* validations with reg ex for website domains

Sunday - design + meeting requirements
- add My Location on click
  - right now it replaces the map, doesn't add My Location to map
- come up with a wireframe
- Implement Snazzy Map
- Responsive Design with media queries
- use SASS
- Testing: 80%+ on the features
- create the README.md



## SEARCH FORM
- Add an area for the search form
- Add a search form and prevent default for the submit button
- On click, take the value inside of the form and use the API
-


## Company Location + My Location
# have an array to hold both locations:
  # var locations = [['company location', lat, long], ['user location', lat, long]]
# If Locate button is clicked
  # Company Location Map shows up
  # shove the lat and long into array[0]
    # when Locate button is clicked, shove the array of lat and long into the array[0][1] and array[0][2]
# If My Location button is clicked
  # User's Location Map shows up
    # shove the long and long into array[1]
       # when My Location button is clicked, shove that array of lat and log into the array[1][1] and array[1][2]
# If Locate button --> My Location button are clicked
  # Both pins show up in the center of the range on the map
# when Reset button is clicked, the User pin disappears
  # delete the values inside array[1]: ['user location', lat, long] to ['user location']



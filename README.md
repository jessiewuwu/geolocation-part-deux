
# Geolocation - Part I #

### User Stories ###
* A user can locate their location and any website's location on a map
* A user can use this app on their phone, tablet, and desktop

### Process ###
* Use jQuery to grab the content in the website site address field on-click. 
* Use an IP API that grabs the User's IP address to determine their location
* Use an IP API that takes the website address input and gets its longitude and latitude
* Use Google Maps API to get the User's and website's locations based on longitudes and latitudes
* Add location pinpoints on the map


### Functional / Acceptance Criteria ###
* The new form input field should only accept website domains starting with "www."  or with the host name, e.g., "www.nytimes.com", "nytimes.com" or "g1.com.br" or "www.g1.com.br".
* When the user hits the Locate button, an asynchronous call should be made to http://freegeoip.net/json/:host, where :host corresponds to the user input.
* If this async call is successful, a second panel must be rendered, below the form, displaying a map showing the website's physical location from the latitude and longitude coordinates of the JSON response.
* When the user hits the existing My location button, his position must also be displayed on the map, **alone or besides a website location** if the user used that feature before.
* When the user hits the Reset location button, the user location must be cleared off from the map (but the website's location should still be displayed if any).
* You need to add consistent user input and output validations for every possible scenario.

# Geolocation - Part II #

### Story Phrase ###
* As a curious and sometimes forgetful web surfer, I want to add a simple history page to my GeoLocation web application, so that I can see all the URLs searched by me on the current session.
* I sometimes use a desktop, sometimes a tablet and sometimes a cell phone, so I need a responsive web page.

### Business Narrative / Scenario ###
* You need to augment Geolocation by providing the history of all the domains typed in by the user, with the most critical info (URL, IP, Country, Latitude, Longitude and Date).

### Functional / Acceptance Criteria ###
* You can choose any approach for the history panel, such as a new page, an overlay, a sidebar...
* Each domain in this history should be a link, which when clicked will ultimately display its location again on the map along with its details.


# Avenue Code UI Challenge - Part I #

### Story Phrase ###
* As a curious web surfer, I want to be able to locate both me and any website on a map.
* I sometimes use a desktop, sometimes a tablet and sometimes a cell phone, so I need a responsive web page.

### Business Narrative / Scenario ###
* GeoLocation is a working web application which aims to retrieve details about the user's location.
* You need to augment GeoLocation with a new form that will allow the user to find out the physical location of websites, by displaying its hosting position on a map.
* This new form will consist in a text field for the user to input the website domain, and also a "Locate" button.
* You have to keep the current features working.

### Functional / Acceptance Criteria ###
* The new form input field should only accept website domains starting with "www."  or with the host name, e.g., "www.nytimes.com", "nytimes.com" or "g1.com.br" or "www.g1.com.br".
* When the user hits the Locate button, an asynchronous call should be made to http://freegeoip.net/json/:host, where :host corresponds to the user input.
* If this async call is successful, a second panel must be rendered, below the form, displaying a map showing the website's physical location from the latitude and longitude coordinates of the JSON response.
* When the user hits the existing My location button, his position must also be displayed on the map, **alone or besides a website location** if the user used that feature before.
* When the user hits the Reset location button, the user location must be cleared off from the map (but the website's location should still be displayed if any).
* You need to add consistent user input and output validations for every possible scenario.


### Non-Functional / Acceptance Criteria ###
* We urge that you employ a web app framework such as Backbone.js, AngularJS, Ember.js, Knockout.js, React, Meteor.
* You must leverage reusability with the existing code. You might have to refactor some of it, specially when you are adopting a web framework. Make sure to keep the existing functionality up and also to fix any bugs you might run into.
* It is expected that you cover at least 80%+ of your code with JS testing. You can pick a framework of your preference like Jasmine, Chai, Mocha, QUnit.
* We also recommend that you use a presentation framework such as Twitter Bootstrap or Zurb Foundation.

### Technical Details ###
You should receive a JSON response from http://freegeoip.net/json/:host similar to:

```
{
   "ip":"170.149.172.130",
   "country_code":"US",
   "country_name":"United States",
   "region_code":"WA",
   "region_name":"Washington",
   "city":"Seattle",
   "zipcode":"",
   "latitude":47.6062,
   "longitude":-122.3321,
   "metro_code":"819",
   "area_code":"206"
}
```

Here are a few suggestions of tools to develop your responsive app:

* Backbone.js - http://backbonejs.org/
* AngularJS - http://angularjs.org/
* KnockoutJS - http://knockoutjs.com/
* Ember.js - http://emberjs.com/
* React - http://facebook.github.io/react/
* Meteor - https://www.meteor.com/
* JQuery - http://jquery.com/
* Twitter Bootstrap - https://twitter.github.com/bootstrap/
* Zurb Foundation - http://foundation.zurb.com/
* RequireJS - http://requirejs.org/
* Underscore - http://underscorejs.org/
* Handlebars - http://handlebarsjs.com/
* Jasmine - http://jasmine.github.io/
* Chai - http://chaijs.com/
* Mocha - http://visionmedia.github.io/mocha/
* QUnit - http://qunitjs.com/
* SASS - http://sass-lang.com/
* LESS - http://lesscss.org/

### Delivery Instructions ###

1. You must provide his BitBucket username. A free BitBucket account can be created at http://bitbucket.org
1. The recruiter will give you read permission to a repository named **ui-challenge**, at https://bitbucket.org/ac-recruitment/ui-challenge
1. You must fork this repository into a private repository on your own account and push your code in there.
1. Once finished, you must give the user **ac-recruitment** read permission on your repository so that you can be evaluated. Then, please contact back your recruiter and he will get an engineer to evaluate your test.
1. After you are evaluated, the recruiter will remove your read permission from the original repository.
1. Its very important that these steps are followed accordingly, as your git and overall version control skill will also be evaluated.

### Format ###

* This assessment must be delivered within 2 days.
* You must provide a README.txt (plain text) or a README.md (Markdown) file at the root of your repository, explaining:
    * How to compile and run the application.
    * How to run the suite of automated tests (unit tests, BDD tests, etc...).
    * Which JS libraries you've decided to use for this challenge.
    * Mention anything that was asked but not delivered and why, and any additional comments.
* Unclear or incomplete README instructions may subtract from your overall evaluation.
* Any questions, please send an email to **recruitment.engineering@avenuecode.com**

### Evaluation Criteria ###

1. Functional and non-functional acceptance criteria delivery.
1. Code quality: structure, modularization, reuse.
1. Code legibility and elegancy.
1. Frameworks usage.
1. Test coverage.

We have both functional and non-functional acceptance criterias, so we suggest that you pay attention to both. Furthermore, the quality of the application (number of bugs found), may also add or subtractg points from the candidate.


# Avenue Code UI Challenge - Part II #

### Story Phrase ###
* As a curious and sometimes forgetful web surfer, I want to add a simple history page to my GeoLocation web application, so that I can see all the URLs searched by me on the current session.
* I sometimes use a desktop, sometimes a tablet and sometimes a cell phone, so I need a responsive web page.

### Business Narrative / Scenario ###
* You need to augment Geolocation by providing the history of all the domains typed in by the user, with the most critical info (URL, IP, Country, Latitude, Longitude and Date).

### Functional / Acceptance Criteria ###
* You can choose any approach for the history panel, such as a new page, an overlay, a sidebar...
* Each domain in this history should be a link, which when clicked will ultimately display its location again on the map along with its details.

### Non-Functional / Acceptance Criteria ###
* You can keep track of the information the way you think is best: JS framework, JS array, LocalStorage/SessionStorage, NoSQL database, backend...
* You have to cover all the new code with JS testing. You can pick a framework of your preference like Jasmine, Chai, Mocha, QUnit.
* If you don't have test coverage on all the code delivered on Part I, you MUST cover that code as well now.
* Don't break existing functionality.
* Feel free to add any extra library to your app.

### Delivery Instructions ###
1. Fork/branch your code on BitBucket.
1. You will be personally evaluated as soon as you finish the test.
1. After you are done, you must push all your code and give the user **ac-recruitment** read permission on your repository. That is just for any additional evaluation the recruiter might want to do.

### Evaluation Criteria ###
1. Functional and non-functional acceptance criteria delivery
1. Code quality: structure, modularization, reuse
1. Code legibility and elegancy
1. Frameworks usage
1. Test coverage
1. Number of bugs

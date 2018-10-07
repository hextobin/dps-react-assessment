3:30 pm, 5 October start

worked on getting individual requests for beers and breweries working through postman-done-now I know how they need to be formatted

-about to start mapping out component structure
  -beer page has beer card component

-most beers didn't have images so I created used an avatar for those
  -for the breweries, I'm just grabbing a bunch of breweries and then filtering the ones out that don't have images

-going to use similar component structure for breweries

-all beers and breweries have images now

-can now link to beer page with correct uri formatting for the endpoint api

-looks like some beer pages aren't loading-seems to be those with a '.' in their address; this could easily be fixed by using redux. It would just be two initial api calls: one for beers, and one for breweries. Right now I'm making requests every time I want any page. I'll add redux later if I have time.

-created external links to brewery pages
# TODOs:
* Revert tsconfig.json es5 to es2015, for production?
* Analyze proper handling of observable responses
* Implement actual filtering by decade

# Notes:

## Changes
* The design calls for the use of WhitneyHTF-SemiBold to be used on the decade buttons, but this font is not available for free. OpenSans looked similar, and was used elsewhere, so I replaced it with that.
* There are several minor spacing tweaks.

## Concerns
* The mock for the decade filters uses an `'s` but I'm pretty sure that's grammatically incorrect, and a simple `s` is correct
* The decade filter buttons would probably be more accessible, and bookmarkable, as styled hyperlinks, but I didn't have the time to learn Angular's routing, nor know enough about the "big picture" to determine if this was a worthwhile action. Another option would be to convert them into styled radio buttons
* The decade filter buttons would benefit from some sort of label, though visually this is probably easier to infer
* The "active" decade filter button color is very hard to visually distinguish from the default focus color in some browsers
* The images are, to my surprise, not a uniform size
* People often expect images to be clickable/links
* The current rating color and "View on IMDB" color do not have enough contrast w/ the background to be WCAG 2.0 compliant
* The selected decade buttons color contrast is WCAG 2.0 AA compliant, but not AAA compliant
* H2 was used for each film, but there's currently no H1

# Front-End Coding Challenge

## Task

Create a simple interface for viewing the latest Batman movies as a vertical list of ten movies which can also be filtered by decade.

A UI mockup can be found in the included `moviemock.sketch` file (or `moviemock.pdf` if you don't have Sketch).
Only one movie is shown in the mockup, but use that as a template for the other 9.

## Requirements
* Build using the latest version of AngularJS or Angular, whichever is most comfortable to you.
* Use SASS to write your css and compile it down.
* Write your JavaScript using either vanilla js or using TypeScript and compile it down.
* Build and include at least one Angular component.
* Make sure your code is supported by Chrome, FF, and IE11.
* Publish your completed project to a github repo provide us with a link.

## APIs

Sign up for a free api key to use the Movie service here:
http://www.omdbapi.com/apikey.aspx

Using the first 10 results of this api search for batman movies: SO Type == 'movie'
http://www.omdbapi.com/?s=Batman

Take those results and look up details for each movie returned using this api pattern:
http://www.omdbapi.com/?i=tt0372784 (where i = the imdb id found above)

Hint: Images will be blocked from hotlinking. Manually download all of those images to the project first, then reference them locally (parse the url string from the response).

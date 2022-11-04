# Twitter Showcase

<br>

_An application for searching Twitter built with React and Node_

<br>

Try it [here](https://papaya-jalebi-21db43.netlify.app/)

<br>

![Twitter Showcase Search Demo](https://github.com/j-otterbox/twitter-showcase/blob/main/twitter-showcase-search-demo.gif "Twitter Showcase search function in use")
![Twitter Showcase Random Demo](https://github.com/j-otterbox/twitter-showcase/blob/main/twitter-showcase-random-demo.gif "Twitter Showcase random function in use")

## Summary

This is a project that I built for SDMM that allows users to search Twitter by making requests to the Twitter API with user inputs. Users can search by entering Twitter handles preceded by the @ symbol or by entering one or more search terms. Users can also view random tweets from some of the most followed accounts on Twitter. 

This was a very challenging project. Twitter's API documentation is quite extensive which required experimenting with queries in Postman until I had exactly what I wanted, I then built out my web server to make requests to Twitter and listen for the parameters from the client. Then, I had to build out the client. I built out all the components and routes, and while I did get lots of help from React Bootstrap, I still had write a decent amount of my own CSS. 

There were many tweaks and adjustments as the project took shape. The most difficult part was turning the original data in the Twitter API response into a more usable form. For example, media in Twitter's API is stored separately from the tweet in which it's embedded but the tweet has the IDs of the media entities. I was able to solve this problem with some ES6 features like the spread operator to create logical groupings that keep all relevant data together and much easier to pass to a Tweet component in the client.

Some features from past projects were also implemented here as well, on the random page for instance. Since the list of users to get random tweets from is static and its likely that they aren't tweeting every second of every day, the data for this page's functionality is cached and only updated when it expires to reduce the amount of requests made.

Overall, this was a challenging project, but it was also very fun. A big part of what makes development interesting is testing your abilities and solving new problems.

## Author

- **Jason Otter** - _Full-Stack Software Developer_ - [Website](https://jason-otter.netlify.app/) | [LinkedIn](https://www.linkedin.com/in/jason-otter/)


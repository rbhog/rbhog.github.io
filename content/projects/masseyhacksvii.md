---
title: "MasseyHacks VII - Park Alert"
url: "/masseyhacks-vii/"
summary: A web app to find parking spots while avoiding parking fines.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary
- Correlated DC Census GeoJSON data with parking violations.
- Designed algorithm to display parking spots within range of specified location, avoiding high ticket areas.


### Background
I competed in MasseyHacks VII with 3 of my friends and this time, we were inspired by [an article I found](https://pudding.cool/2018/12/3d-cities-story/) on The Pudding, which used a concept called "scrollytelling" to convey information. As part of this, a map moves as you scroll, which gives a sense of interaction when reading blurbs. With this in mind, our project was a scrollytelling app to correlate demographics with parking data along with a tool to find parking in areas with lower ticket rates.

### Implementation
We got the datasets for parking meters, parking violations, and demographics using Open Data DC, which is publicly available data from DC. We then generated GeoJSON files that were used with Mapbox in our React frontend. We also used Chakra UI for the components besides the map on the frontend. In order to get the location given the address, we used Google Maps geocoding which returned us a latitude and longitude to then use in our algorithm.

For a demo and more information you can check out our [Devpost](https://devpost.com/software/park-alert).
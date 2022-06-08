---
title: "Los Altos Hacks V - from city import pandemic"
url: "/los-altos-v/"
summary: A tool for local governments to correlate demographics with COVID case rate for vaccine allocation.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary

- Designed 3D web application to correlate COVID statistics with demographics data in Mapbox and Turf.js.
- Parsed public data from Washington DC and calculated Pearson’s r for correlation strength.
- Won 1st Place Overall

### Background

I competed in Los Altos Hacks V with three of my friends and we decided to make a web app that would correlate COVID statistics with demographic data that we found for DC. Our goal was to have this serve as a tool for local governments to help with vaccination resource allocation.

### Implementation

Our site was made using React and the sliders and drawers were made using Chakra UI. Mapbox was used to display the map on the site, using the data that we calculated from Open Data DC. We used datasets on the demographics of DC, regions that the city was divided into, along with data on the spread of COVID in DC. We used the data for each neighborhood in a ward to calculate [Pearson's r](https://www.investopedia.com/terms/i/inverse-correlation.asp), or correlation between COVID case rate and income. With this data, we could format indicators on the map to help others visualize the data.

For a demo and more information you can check out our [Devpost](https://devpost.com/software/eastcoastbois).
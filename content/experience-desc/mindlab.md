---
title: "UMD MIND Lab Internship"
url: "/mind-lab/"
summary: A web app to navigate campus buildings and classrooms and filter phone location data.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary
- Developed user interface in JavaScript for tracing spread of COVID-19 using Mapbox and ArcGIS.
- Experimented with algorithms for removing noise from GPS data using Turf.js and road fitting APIs.

### Research

During the summer of 2020, I interned with the MIND Lab at the University of Maryland. Our project was to develop a COVID contact tracing app that would allow users to share their cellphone location data, and then use this data to find what individuals they could have come in contact with based on what rooms they had been in. Because of this, my work fell into two parts: a web app that would allow researchers to see information about each room on campus and another web app that would allow researchers to see where users had been in the course of the day.

Given that this was my first time using JavaScript, the internship served as a learning experience for how to make efficient applications.

UMD has a map server that is available to researchers which provides access to the location data for every room in every building on campus. So, using Axios and Bluebird, I developed a script that would allow us to download the data from the server and save it as a GeoJSON that would enable us to map it in our own web app.

With a way to collect data, using Mapbox, I created a basic map that would plot the GeoJSON file and added dropdown menus to filter the data by building and floor number. The final result was a map that would pan to a specified floor for any building and allow users to get information on rooms on the given floor.

The second aspect of the internship was related to a web app that another intern was working on that would show how a user moved through the course of a day. We were given raw location data from a phone, but this data had lots of noise, rendering it impractical to plot the data as is. So, I experimented with various map fitting APIs to remove noise from the data and then plotted the data on a map. Using the distance between points, we estimated the user's speed and chose a profile (walking, driving, etc.) to get the proper road snapping for a given point.


### Lessons Learned

Over the course of the internship, many of the bottlenecks I ran into were the result of trying to render large amounts of data on the client side. This led to laggy performance and meant that there was lots of overhead before a user could actually interact with the data. My solution at the time was to take snapshots of the map server manually, but this was not scalable. Since, I have learned about databases and used them in our [HackIllinois project](/hack-illinois-2022/).
---
title: "HackTJ 8.0 - Crash Central"
url: "/hacktj-8/"
summary: An interactive web app to display dangerous accident hotspots from crash data.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary
- Designed a web application to display filtered heatmaps using Mapbox to visualize DC traffic accident data.
- Retrieved data from public databases and formatted it into GeoJSON.
- Won Best Overall Hack

### Background
HackTJ 8.0 was the first hackathon I had done since my freshman year of high school. Through my internship with the [MIND Lab at UMD](http://mindlab.cs.umd.edu/), I had learned about Mapbox and wanted to implement it for a hackathon project. So, we decided to make an application for users to see accident hotspots and therefore avoid them when planning routes.

### Implementation
We acquired data from OpenData DC on all crashes in the past 20 years. We then filtered out and sorted the data for just the last 4 years using JavaScript. We also made a separate file that would hold the clusters for given years so that we could display them separately. Then, a React app was made which would display the Mapbox map along with filter options using Chakra UI. Once we finalized the UI and backend, we used AWS to host our website on the domain we got from Domain.com.

For a demo and more information you can check out our [Devpost](https://devpost.com/software/dc-traffic).
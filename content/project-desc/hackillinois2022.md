---
title: "Hack Illinois 2022 - infected & detected"
url: "/hack-illinois-2022/"
summary: A machine learning model to detect diseased plants and a real-time web app to find diseased crops.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary
- Designed real-time interactive map to alert farmers of crop disease outbreaks in field using Mapbox.
- Trained TensorFlow Lite model to detect diseases in cassava plant for use on Google Edge TPU.
- Won Best Community & Sustainability Track Project

### Background

I competed in Hack Illinois 2022 with 5 of my friends and this time, we decided to attempt a project that was much larger scale than any I had done before. The hack consisted of a machine learning model that would detect diseases in cassava along with an interactive map that would allow farmers to see where the disease was detected. We were heavily inspired by John Deere's [Seek and Spray](https://www.youtube.com/watch?v=NL8O4sEfd4E) and wanted to extend its detection capabilities.

### Implementation

Our project consists of a machine learning model deployed on the edge along with a web interface that farmers can use to get analytics on their diseased crops. The machine learning model is built using TensorFlow Lite, runs on a Raspberry Pi that is accelerated using a Coral Edge TPU accelerator board, and detects whether a given plant in the frame is healthy or diseased or if it is a weed that needs removal. This application also provides the user with access to an online video stream that displays current predictions for the plants in the frame along with a confidence level for each.

Each data point from the machine learning model is tagged with a location along with whether it is healthy, diseased, or a weed and an associated GPS coordinate. Using a Flask API to seed the data from the MongoDB database, we developed a Mapbox interface along with an image gallery that provides insights and visuals into detected problematic plants. In the Mapbox map, a farmer can select individual data points representing diseased plants and determine further action. The Mapbox map continuously polls for data every second from the Flask API and updates the map automatically without the user needing to reload the page. When changing dates on the map, the next cluster of data points is zoomed into automatically as well.

To filter the data and reduce the plotted points on the graph, we created an algorithm to tell if we were looking at the same plant from a different frame by using historical data and the current inference. When a new plant does get detected, its information is saved to the database and the Waveshare E-Ink display is updated with the name of the disease and the confidence of the prediction.

For a demo and more information you can check out our [Devpost](https://devpost.com/software/infected-and-detected).
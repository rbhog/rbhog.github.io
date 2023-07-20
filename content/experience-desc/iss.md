---
title: "Illinois Space Society Spaceshot Avionics"
url: "/iss/"
summary: Developing simulations and control aglorithms for the Spaceshot rocket.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary
- Implemented custom 3 DOF Kalman Filter on Teensy 4.1 in C++ for state estimation during flight to control airbrake mechanism.
- Designed 3 DOF Kalman Filters fusing barometer, accelerometer, and gyroscope data to estimate displacement and orientation.
- Created 6 DOF rocket physics simulation and emulated flight sensor suite in Python for testing control algorithms.
- Designed and implemented scheduler for experimental finite state machines on rocket in ChibiOS to compare effectiveness in flight.

### Spaceport America Cup

The Spaceport America Cup is the world's largest intercollegiate rocketry competition where teams design and build a rocket to launch and get as close to a target apogee as possible.
Our team competed in the 30,000 ft. COTS Solid Rocket Motor category, where we designed a rocket to launch to 30,000 ft. using a commercial solid rocket motor and an active drag mechanism to control the rocket's
apogee. Our rocket had a successful launch, reaching an apogee of 27,309 feet and leading us to win runner's up at the event for our category.

### GNC and Software

Joining the team, I had some background to control systems through mentoring my high school robotics teams along with taking a control systems course at my school. Despite this, joining the GNC team was a big leap for me since in those previous environments, I had never
dealt with the process of designing control algorithms from scratch. My first tasks on the team involved changing our current Kalman Filter for estimating apogee to not be affected by sensor drift. Our original approach to this was to have a rolling
window of barometer data and set our original state to the average of this window. With this and other changes in hand, we were prepared for our October test flight to 15,000 feet.

Our October launch was mostly a success with a successful recovery, however we had overshot our target apogee of 15,000 feet, leading us to believe that our active control mechanism was not working as intended. Looking at the data, we realized that the airbrake actuation
data was not being logged, leading us to find other ways to validate our control mechanism. As a part of this, I worked towards developing a system that would allow us to replay previous flight data on our flight hardware. This system later evolved into our current hardware-in-loop simulation where we stream sensor data to our flight hardware over serial and observe the response of our control algorithms and telemetry systems.

My next major project was expanding our 1DOF Kalman Filter to a 3DOF Kalman Filter to estimate the rocket's displacement and later another to estimate the rocket's orientation. To develop these systems, we would need to develop a new simulation that enabled rapid prototyping for our control systems. As a result, we developed a 6DOF simulation in Python that emulated the rocket's physics and sensor suite. In this, I was responsible for simulating the rocket's motor, moment of inertia, and eventually writing the actual Kalman Filters.

My future plans for GNC are to focus on onboarding. The way we introduced Kalman Filters seemed arbitrary and by focusing on smaller projects such as an alpha-beta-gamma filter or figuring out why a Madgewick filter might not suit our needs would pose a Kalman Filter as a natural progression of development rather than an arbitrary solution to a problem.

You can check out the flight code I worked on [here](https://github.com/ISSUIUC/TARS-Software/tree/master) and the simulations [here](https://github.com/ISSUIUC/TARS-Controls/tree/main/Simulation/6DOF_RK4).
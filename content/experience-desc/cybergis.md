---
title: "University of Illinois CyberGIS Center"
url: "/cybergis/"
summary: Developed JupyterLab extensions for kernel management and navigation.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary
- Developed Ansible playbooks for Docker image version control and virtual machine management.
- Developed JupyterLab extension to manage kernel installation using TypeScript.

### Research

The first part of my job was to write Ansible scripts to automate pulling Docker containers from Docker Hub. At the time, a person would have to manually type in a command on each machine to pull or update containers, making it difficult to manage and update images. The Ansible scripts allowed us to automate this process and only have to run a command on one machine.

THe second part of my job was to write a JupyterLab extension that would check if a kernel was installed when a user was using a notebook. This took up most of my efforts since it was difficult to find a reasonable way of checking the installed kernels. Some of the solutions I experimented with was running bash commands within JavaScript, but I was unable to find a solution that worked. I can't say much beyond this since most of the work is for proprietary software belonging to the lab.
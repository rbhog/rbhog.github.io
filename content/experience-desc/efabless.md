---
title: "Efabless.com Internship"
url: "/efabless/"
summary: Optimized the Magic VLSI Layout Tool and quantified performance gains.
ShowToc: false
ShowShareButtons: false
ShowReadingTime: false
ShowBreadCrumbs: false
---

### Summary

- Optimized the performance of Magic, an Electronic Design Automation tool for VLSI design.
- Implemented efficient data structures and hashing algorithms and quantified performance with Linux perf.

### Research

Over the summer of 2020, I worked under the guidance of [Tim Edwards](http://opencircuitdesign.com/~tim/) on optimizing the performance of a VLSI layout tool called Magic. This was my first exerpience in open-source contributions and I learned a lot about how to get up to speed and maintain a large-scale project.

The Magic VLSI (Very-Large Scale Integration) Layout Tool is an open-source software that was originally intended for
smaller chip designs. However, as chips evolve, the tool must be adapted to meet higher load requirements. Magic currently stores
labels for a given chip design in the form of a linked list, meaning that searching for a label is an O(n) operation. To optimize
performance, a binned collection and hash table was implemented to replace the linked list storage for labels. Changes to the
tools in Magic were tested on the striVe chip and the performance of the given tool was tested using the perf tool in Linux.
Using the perf results, a flame graph was generated to then measure the relative number of samples for a given function. The
effectiveness of the implemented optimizations was based on the decrease in time spent on functions when using a larger chip
design. Replacing the linked list for the binned collection for label storage by location correlated with a general decrease in total
time spent on the functions. Although the baseline for label storage by name could not be analyzed, there was still a theoretical
increase in efficiency due to the O(1) complexity of the hash table.

After implementing various optimizations and generating the flame graphs to quantify the performance, the results indicated a general decrease in the time spent on the functions tested during the sampling period. After the internship, I created a research paper, poster, and slides in Latex to submit for competitions and present in my school. Although using Latex for all the documents was originally part of a personal competition I had with my friend, I was pleasantly surprised by how professional the documents came out looking.

### Links
- [Paper](/efabless_paper.pdf)
- [Poster](/efabless_poster.pdf)
- [Slides](/efabless_slides.pdf)
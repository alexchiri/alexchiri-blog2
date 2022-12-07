---
title: Everything as-code
description: 
date: 2022-11-30
tags:
  - softwaredevelopment
  - automation
layout: layouts/post.njk
imgUrl: ./src/assets/images/33AAAF43-D6EF-4357-B4CD-0EE74B07ADA7.png
imgAlt: A stage with spotlights
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

I am a big fan of doing software development work as-code. It’s a no-brainer when talking about writing software, because that has been done using some sort of code predominantly, although visual no-code tools are becoming more and more popular for software development as well. But code can and should be used for many other things connected to software development.

## Why is writing code better than clicking around in a GUI?

1. **Transparency**. Code is text and text can be read by anyone in the team and it is easy to share with others. 
2. **Traceability**. Code can easily be committed to a Git repo and changes can be tracked. Anyone who wants to get a sense of what has been done when can do that by looking at the repo history.
3. **Reproducibility**. Code is being used to produce something else from it. You write the same code, you should get the same thing from it. This means that if code produces issues, you should be able to reproduce the issues and the environment that caused the issues using the same code. At the same time, code producing stable deliverables can be re-used over and over again to create those.
4. **Automatable**. Deliverables can be created from code in an automatic way. Which means more time can be invested in the parts of work that cannot be automated.
5. **Scaleability**. Given all the previous reasons, using code for most software development tasks makes the work more scalable. More work can be done with the same amount of people.

## What should code be used for?

Everything! Well, almost everything. Everything that it is feasible to use code for, considering the benefits of code listed above. 

Here’s a list of ideas for what we could use code for:

1. Writing software
2. Our [development environments](https://alexchiri.blog/posts/2022-06-20-development-environments-as-code/)
3. The pipelines that process and ship the code to production
4. Creating the infrastructure our software is running on
5. Any other major thing I missed mentioning

The list is endless, but I stopped on just the major areas software developers spend their time on. Each of these can be split in multiple more specialized areas. And each of these areas can grow into platforms of their own.

There are some disadvantages in doing everything as-code, but I guess the biggest is that the time investment that it needs. For some things, this might simply not be worth it. One-off tasks that you do once and forget are probably not worth it. It depends on the advantages and disadvantages. As anything which requires a bigger investment in the beginning, it might seem better to “just do it!” in whatever simple way you can in the moment. But then the present is not everything, the future will come knocking at our door soon.

P.S. Some years ago, I recorded a longer video version of this post and pushed it to YouTube. If you feel inclined to watch it, [please do so here](https://youtu.be/QEAE2n4i72I).
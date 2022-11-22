---
title: The infra pipeline is not ✅ until the infra is ready
description: 
date: 2022-11-16
tags:
  - pipelines
  - platformengineering
layout: layouts/post.njk
imgUrl: ./src/assets/images/DEA95210-084C-4CFB-97E5-C5094CD57AB5.png
imgAlt: ''
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

This is one of those things that most people agree with in theory, but it somehow escapes the implementation.

I have been working for some time now in teams building infrastructure platforms and one common issue I see often is not including checks on the newly created infrastructure in the pipeline that creates it. By infrastructure I mean Kubernetes clusters, virtual machines, serverless, you name it! 

In the name of keeping the pipeline duration short, these checks are not included. By not including them, the ✅ of the pipeline means the tooling had finished executing successfully and not that the infrastructure is ready, even though it’s common to consider it ready. 

In my view, having the pipeline finishing successfully without knowing that its artefact is ready to use makes no sense. It’s like manufacturing a product and releasing it without checking it for defects. It will lead to increased returns that are expensive and damage the brands credibility.

In infra world, the same thing happens. When the pipeline finishes, the users of the infra will expect it to be working, when it fact, it might be starting up or be broken. If the result doesn’t match the expectations of the users, then they will reach out to the infra team for support. 

As a bonus, if creation pipelines includes checks or tests, it could be triggered automatically in branches or PRs, to increase the confidence in the changes made there to the platform, before they are merged into the `main` branch.
---
title: The tragedy of the common platforms
description: 
date: 2022-10-30
tags:
  - devops
  - platforms
layout: layouts/post.njk
imgUrl: ./src/assets/images/DC756D3B-9E18-4228-8415-D1F1977BA58A.jpeg
imgAlt: ''
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

There is one known trap that most internal software platforms are bound to fall into. 

## The trap 🪤

Most platforms I have encountered so far started as a kind of a proof-of-concept. There was a clear need for their purpose and some team or individuals started one as an experiment. The experiment takes-off quickly and becomes permanent with many teams starting to depend on it. The platform gets its own team or teams and it gets used by more and more teams. This is the most common story I encountered and I would say quite a successful 🍾 one. But there is something that almost never gets prioritised until it is very late in these successful platforms: redistribution of costs towards the teams using the platforms or at least making them aware of the magnitude of the resources they are consuming while using the platform.

In systems thinking this is a common pattern that is well-known. It is called "the tragedy of the commons": 

> When there is a commonly shared resource, every user benefits directly from its use, but shares the costs of its abuse with everyone else. Therefore, there is very weak feedback from the condition of the resource to the decisions of the resource users. The consequence is overuse of the resource, eroding it until it becomes unavailable to anyone. - *Thinking in Systems* by Donella Meadows

I've seen this in action several times and it is almost painful to experience it, especially as part of the platform team maintaining the platform. Users of the platform are not aware of the costs they are driving. Not having clear guidelines on how the platform should be used makes things even worse. It is very easy and natural for the platform to be used in wasteful way.

There comes a critical point where the platform becomes quite expensive 💸 to run while many teams are depending on it. The platform team is pushed to drive the costs down fast, but without proper cost tracking per user group done by then, this becomes a painful exercise that hurts everyone.

## The solution💡

> Educate and exhort the users, so they understand the consequences of abusing the resource. And also restore or strengthen the missing feedback link, either by privatizing the resource so each user feels the direct consequences of its abuse or (since many resources cannot be privatized) by regulating the access of all users to the resource. - *Thinking in Systems* by Donella Meadows

Some companies go as far as redirecting costs to each team using the platform, so the cost of each of the platforms a team is using is deducted from the team budget. But it's not necessary to go that far. It should be enough to make teams aware of their costs of using the platform and put it in perspective 📊. *How does it compare with other teams or maybe with a typical team with their needs?*

*The goal* 🎯 is not to make the teams to stop using the platform. Quite the opposite actually. But we all know that we tend to be less careful with things we don't own or that we don't pay for. 

*The goal* 🎯 is to make teams use the platform more effectively. This requires:
1. good cost tracking mechanisms from the beginning, 
2. simple way to make teams aware of their costs and 
3. guidance and simple mechanisms for the teams to optimise the way they use the platform.
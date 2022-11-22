---
title: Platform engineers are experts in the services of their platform
description: 
date: 2022-11-22
tags:
  - platformengineering
layout: layouts/post.njk
imgUrl: ./src/assets/images/60068E06-413F-4192-9BBC-283B44E97DA8.png
imgAlt: Platform engineering. The new devops text and rocket
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

Platforms usually appear organically. It goes somewhat like this:

## Inception

There is a need in several engineering teams and somebody puts the foundation of a platform that meets some of those needs. Most likely someone from the teams needing the platform. Most likely that someone also knows the concerns of this platform well. 

In this stage, the platform is more of an experiment, but it might already be useful to few brave teams. The purpose of the platform at this point is also rather narrow and the expertise levels on the platform matters are high in the platform team.

## Success = opportunities + danger

If the platform manages to survive the first few critical months, then there will be more investments done in the platform and its team: more people, more structure. But also more responsibilities. And this is where is starts getting tricky. 

There is a tendency to think that if a platform is successful at one matter, it will be for other related matters. What do I mean by that? Imagine a platform team that provides a CI/CD build platform. This might be run on Kubernetes on-prem or in cloud. It’s basically some containers serving https, some runners and some databases, right? Well, from this point of view, why couldn’t this platform run also Redis clusters for engineering teams? They already have the Kubernetes clusters, they can run anything on them. 

While all these statements are true, the perspective these statements come from is flawed. Just because a platform might have the compute for running more services, doesn’t mean they should. Let me explain why.

## Who owns what?

A platform is enabling other engineering teams with certain capabilities. This is done to reduce the complexity of certain tasks a product team needs to take care of for their slice of product. This can be deployment, monitoring, build or one of many others. The product team still owns the build pipelines of its slice, for example, and does so by using the platform. The platform team owns the CI/CD builds platform and offers support on how the platform is used, but are not responsible if its users are misusing the platform. If there is an incident because CI/CD pipelines not working for one of the product slices, the platform team should not be called unless something is wrong with the platform.

With the platform team owning everything that is not related to a product slice in the platform, it means that whatever tooling the platform consists of should be a matter of expertise for the members of the platform team. Said otherwise, every single member of the platform team should be an expert on whatever service or technology is part of the platform offering. The reason is obvious:

How can you manage and improve something you don’t understand deeply? How can you advise others how to use something, if you don’t know how that something works and you have no experience using it? Because these are the responsibilities of the platform team.

## Bottom line

Everything that gets to be added as part of a platform should not be scrutinized just by thinking if the platform can run it (and it contributes to the platform team's mission). It is equally important if the platform team can own what is desired to be included in the platform. If the answer is no, then either educate the team or pass it over to someone who already can.
---
title: A platform is a platform is a platform
description: 
date: 2022-11-28
tags:
  - platformengineering
layout: layouts/post.njk
imgUrl: ./src/assets/images/8E1D33C7-4FF5-4B6E-8E81-72D647E0D162.png
imgAlt: A stage with spotlights
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

I have realized that even though I have been writing lately quite a lot about platforms and platform teams, I didn’t write anything to describe my view on what a platform is.

I heard the first time about the term “platform team” some time after I started actually working in one. I read on a blog about this new book that was describing 4 team topologies that all companies doing modern software development should strive to adopt. One of these 4 team topologies was the platform team. The book is called “Team Topologies” by Matthew Skelton and Manuel Pais and I didn’t read it until this year (2022). Which was good because what I read resonated better with my experience over the years with platform teams. It is a great book and I think that anyone involved in software development should read it.

## Reduce cognitive load

In my previous posts, I more or less defined platforms as pieces of software that abstract common pieces of concern across teams. In the book, there is one sentence describing “platform teams” from a different perspective:

> The platform team provides internal services to reduce the cognitive load that would be required from stream-aligned teams to develop these underlying services. - *Team Topologies* by Matthew Skelton and Manuel Pais

We could say that this is one of the purposes of platform teams: to reduce cognitive load of stream-aligned teams (one of the other 3 team topologies described in the book). But not in such a way that it reduces the ownership of stream-aligned teams of their product slice.

I think that Team Topologies does a way better job than I could do to describe platform teams, so if you are interested into this topic, I suggest you get the book and dive in! You will not regret it.

## Bringing it all together

Given the quick definitions above of platforms and platform teams, I want to use some of my other posts to add more details to this picture:

1. Platforms [are also products](https://alexchiri.blog/posts/2022-10-28-internal-platforms-are-products-too/) and should be treated as such.
2. Not providing feedback to the users of a platform on what is their impact of their usage to the platform can turn into a [tragedy](https://alexchiri.blog//posts/2022-10-30-the-tragedy-of-the-common-platforms/).
3. Platform team members [have to be experts](https://alexchiri.blog//posts/2022-11-22-platform-experts/) in the problem matter their platform is solving. Otherwise the platform becomes unsustainable.
4. Without [an active community](https://alexchiri.blog/posts/2022-11-23-platform-community/) around the platform and the platform team, it is likely the platform becomes irrelevant and hard to develop and maintain.
5. [Timing](https://alexchiri.blog//posts/2022-11-24-platform-the-right-time/) around creating a platform is important, but better later than too early.
6. Platform teams are [making DevOps possible](https://alexchiri.blog//posts/2022-11-18-platform-engineering-the-new-devops/).
7. Platform engineers might not impact the external product of the company, but [they should be knowledgeable](https://alexchiri.blog//posts/2022-11-03-they-are-platform-engineerings-products-too/) about it.
8. Even though I mentioned mostly infrastructure platforms in my posts so far, a platform can also be one that generalizes how, for example, authentication or general UI is being done in the products slices. No post on this so far, but I though it is good to mention.

Does this mean this is all I had to say about platforms and platform teams? Not even close! But I wanted to have one-stop-shop post bringing everything together. I will update the list above as I add more posts.

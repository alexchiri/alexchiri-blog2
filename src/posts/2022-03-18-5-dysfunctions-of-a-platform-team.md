---
title: 5 Dysfunctions of a (Kubernetes) Platform Team
description: Common bad patterns in a platform team
date: 2022-03-17
tags:
  - devops
  - platforms
layout: layouts/post.njk
imgUrl: ./src/assets/images/office-pretend.JPG
imgAlt: ''
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

I’ve been working in platform teams for the last few years and I noticed some patterns or maybe better called dysfunctions. Although I could easily come up with more than 5, I couldn’t resist to paraphrase Patrick Lencioni’s book title, [The 5 Dysfunctions of a Team](https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Lencioni-ebook/dp/B006960LQW/). Also, in my case, all teams I’ve worked in were building a platform based on Kubernetes, but I think all these patterns are applicable to any kind of platform team.

Note: by platform team I mean a team that is building some kind of internal platform that is being used by other teams of the same company. In most cases, the platform is standardizing and abstracting some common piece of concern for multiple teams in the organization.

1. ## Fire, fire, too much fire!!! 🔥

Many platform teams are ending up in constant fire-fighting mode. I see this as being a result of bad prioritization of what should the team be focusing on.

It is common to prioritize the shiny new features over consolidating previous work. That’s because new features are immediately visible to the platform users, while consolidation might not be right away. But lack of consolidation will in time make the platform unmanageable.

Another cause of too much fire-fighting is the inability of saying no to feature requests that make little sense to the platform as a whole. For example, someone requests to have a Redis instance on your platform just because you have this cool platform that could run anything. Just because the platform can host a Redis instance, doesn’t mean it should. Once you include something in the platform, the team needs to manage it. They need to have proper knowledge and infrastructure in order to do that. Say yes too many times to requests like these for things that the team cannot properly own and you’ll be soon in trouble.

2. ## Planned vs unplanned. Who’s gonna win?

A platform team generally has 2 types of work coming in: planned work, consisting of improvements, fixes and new features to the platform, and unplanned work, which includes support work and incident handling. These 2 streams of work need to be handled differently and without some discipline, it is very easy to become overwhelmed by the unplanned work (if the platform has production users).

A platform needs to constantly balance both. You need to develop new features and you need to support your users and react to incidents, all the time.

First represents work that you have chosen to do in order to get the platform forward. Second is work that shows up unexpectedly and you need to do in order to keep your current users happy. First is more suitable for working in iterations (but not only) with fixed goals in advance. Second is suitable for Kanban where you fix the available capacity and handle the constant flow of work with the capacity you have set, while doing continuous reprioritization as new work comes in. With the first type of work, you can set some kind of timeline where certain features can be expected to be completed. The second is a constant marathon that the team keeps on running as long as the platform exists. 

In some cases, unplanned work can generate items for the planned work. For example, if you notice a lot of support issues repeating over time, maybe it's better to automate them somehow or fix an underlying issue that is causing them, as part of planned work.

Having fixed (less than your team size) capacity on unplanned work ensures that you have remaining capacity for planned work. There might be times when the team needs to temporarily increase the number of people working on support to handle some bigger and urgent issues, but most of the time unplanned work should be bound to its allocated capacity.

Find a good cadence and capacity for the unplanned work and you are set for success. Let it run loose and constantly take over the whole team and you are doomed.

Note: it might be tempting to split planned and unplanned work into different teams. Don’t! The unplanned work team (Ops?) will not be able to solve many issues without the help of the planned work team. The planned work team (Dev?) will develop the platform in a silo, away from its users and the issues they might have with the platform.

3. ## Users need to use our platform, because they have no choice

Forcing a platform on other teams is a lost battle from the beginning. Forming a platform should happen because it can abstract and fulfill essential needs of other teams in the company, freeing some of their time to be spent on other things. It should not be done because of political or any other reasons that are not connected to supporting the needs of other teams in the organization.

It’s incredible how quick companies are to force their employees to use a junk internal plaform with poor support. This would never fly with their external costumers (unless you are one of the giant tech companies who have a lot of leverage in the market).

Internal platforms should be made very attractive, so they are the obvious choice. This further means that the features should be spot-on with the needs of the teams using the platform AND the platform team should have a service-minded attitude towards their users. A platform team who is actively engaging with its users and builds a community around its platform will have a much bigger positive impact on the organization with less effort.

4. ## Let’s abstract everything!!! 😈

An understandable pattern when forming a platform is to have a goal to abstract everything from the reach of its users. The invoked reason it to let the other teams focus on their business and not care about deployment or pipelines or whatever purpose the platform might have. That is a noble intent, but I think it is a mistake to do so in most cases.

While there is room for many things to be abstracted and standardized when building a platform, it should leave its users in full control so they can be independent in managing their product, from commit to operations and monitoring in production. That is a difficult balance to find, but I think it makes a difference what is the intention of the platform. And then it is actually quite simple to know if the balance is off (although it might a bit late): when an incident happens in the product or service that is built on top of the platform, does it require input from someone from the platform team? If the platform team needs to answer to most of the incidents of their users products, then the balance is wrong.

5. ## Platform instances are our pets and we want them to live forever

Not my favorite metaphor with pets and cattle, but it is what it is. Bottom line is that we should invest in infrastructure-as-code and automation so we can easily recreate our platform instances. These can be Kubernetes clusters or bare virtual machines, it doesn’t matter. Being able to quickly recreate the platform instances whenever is needed has many advantages, just to mention 2 of them:

- in case of an incident, the platform team can create new instances that would help restore the activity of the platform, while keeping the faulty instances for investigations. No more open-heart live fixes, while users shout that your service is down. You can take care of the emergency situation first and resume activity and investigate the issues later at leisure.
- simpler upgrade strategies: when you need to upgrade some essential piece of infrastructure of the platform just create new instances with the new versions, run tests, validate. If all is good, swap, destroy and move on!


And those are it, my 5 dysfunctions of a platform team! To the brave ones of you who made it until here, I salute you! 👋 What do you think? Do you recognize any of these?


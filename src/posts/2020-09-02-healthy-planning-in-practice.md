---
title: Healthy planning - in practice
date: 2020-09-02
tags:
  - productivity
  - planning
  - roamresearch
layout: layouts/post.njk
imgUrl: ./src/assets/images/planning-practice.png
---

![](/img/planning-practice.png)

I [previously](https://alexchiri.blog/posts/2020-07-19-healthy-planning-the-theory/) talked about the theory of a way to capture, configure and control how we spend our time, as defined by Cal Newport in his writings and podcast. In this post, I will show how I implemented it for my personal time and work-outside-of-work time using [Roam Research](http://roamresearch.com/).

There is a lot of content describing how Roam works, so I won’t get into it much here, I do recommend to browse some of that content before continuing with the next parts of this post (see [video 1](https://www.youtube.com/watch?v=WkEMSGpD5zA) or [video 2](https://www.youtube.com/watch?v=A_7_8AAkV7M), for example).

## What do I need?
Let me start off by enumerating the features I thought are needed for implementing CNAPA. I need:

- Some sort of inbox where I can quickly and simply capture all the ideas and obligations that come my way 24/7

- A way to group these by role and status

- A way to visualize them per group and status (preferably ordered somehow)

 - Some mechanism to define time blocks in my schedule and schedule items per block

## Capture - the inbox
To fulfill the first step of CNAPA, I need some sort of mechanism to capture any kind of obligation, idea, thought that I would need to process later, a place where I can quickly dump anything that goes through my mind which is not useful to what I am doing at that specific moment in time. It needs to be simple to use and available to me at any time during the day.

Roam has a feature called Daily Notes, a new page is created for you for each day and these are displayed when you go to the homepage of your Roam database. I think this is one of the most used features of Roam, many people put a lot of content directly in these daily pages. This content can be tagged so it can be referenced from other pages and you get the benefit of having a date associated to whatever content you put there.

![](/img/capture-inbox.gif)

Long story short, I use the Daily Notes as my Inbox. Whenever there is something I want to write down for later, I open my phone or my computer, go to Roam and put it down in the page of that day. I might tag or I might not, but if it’s something I need to act on sometime in the future, I will mark it as a TODO.

## Configure - group, visualize, clarify
### Group in categories
For the purpose of this article, I chose to exemplify this process using three categories of items, or roles as Cal calls them:

- Reading - what do I plan to read in the future
- Writing - all kind of tasks related to my writing
- Home - whatever chores I need to solve around the house

Normally, one might have several more of these, but to keep things simple, I stopped at three.

If I’m not in a hurry, I would already tag the items with one (or more) of these categories when I capture them. Otherwise, I look at all my unresolved TODO items once a week and I assign them to the right category. It is very simple to do this with Roam: I go to my TODO page and I filter out all items that are queries (more on this in a bit) and all that are tagged with Reading, Writing and Home. All the items that remain should be the ones I need to assign a category to.

![](/img/configure-group.gif)

### Group by status
Next, I need to further classify the items and give them a status or a bucket. This helps on setting a priority for each item, which in turn makes it easy to decide which item should I pick up next from each category.

Again, just for the purpose of this exercise, I will use the following statuses:

- Important - for items that are important to complete
- Urgent - for items that need to be completed very soon
- Waiting to hear back - items where I cannot do anything until I hear back from someone else
- Nice to have - not important, not urgent

This is by no means an exhaustive list, Cal mentioned having a “Needs clarification” status and a “Backburner” status, but it really depends on your own needs. I suggest starting with a few and add/remove as needed.

For both categories and statuses, I use tags in Roam (a tag is just like a page, it’s just displayed differently).

![](/img/configure-group-status.gif)

### Visualize
At this stage, I find it useful to be able to have a look at all my open items grouped by category and status. The best way I found to do this in Roam is using tables and queries.

In Roam, you can create tables using [a special command](https://roamresearch.com/#/app/help/page/pCJW4jhe-) and the rows and columns come from blocks indented under the table block. Queries are a way to filter through all the blocks you have in your database and display the results in a block. You can write queries using [a special syntax](https://www.youtube.com/watch?v=LJZBGJOzhUY) in Roam.

I combine these two and I have a page where I created a table for each category and each table has one column for each status. Each table has only one row and in each cell, I put the results of the query for a specific category and status. This allows me to easily visualize in one page all the items I have for each category and status. I can also update them on the spot in the table, without having to go to where the actual item is.

![](/img/visualize.gif)

### Clarify
Finally, in this step, I take a look at the items I have and see if there are older items that can be removed, or ones that can be combined, maybe some can be updated with extra details I found out in the meantime. This usually doesn’t take long if I do it weekly and it’s more of a quality of life activity, rather than an essential thing to do in this process. It brings benefits if you do it regularly, as you clean the weeds from your mental garden of tasks, but it can be skipped every once in a while, if you’re pressed by time.

## Control - plan, block, schedule
### Plan
Now that we know all that is on our plate, we need to plan some of that for the next period. It’s good to have a look at one week, or a month or more in advance, on a high level, the further you go in the future, the rougher the plan is. To make this easy, I usually share my personal calendar with my work calendar, this is rather [simple to do with Google accounts](https://support.google.com/calendar/answer/37082?hl=en). Then, I can see how my personal and work calendar looks like combined, in one view. With this view, I can visualize what empty spots are there in my calendar in my following week or weeks.

Next, I look at what are the most important and urgent things I want to achieve on a given period of time (I usually do this for a week ahead) and decide how many blocks of time I want do dedicate to what category of items.

### Block
The idea with blocks is to create the opportunity to work on specific categories of things and not leave it to chance or if “I feel like it”. I define these blocks in advance, based on what I plan to achieve.

With the calendar view in front of me, I create blocks in my calendar, where there are empty spots, and I name them according to the category of items they are dedicated for.

![](/img/block.png)

### Schedule
With the blocks in place, I can start associating items to blocks. If I plan multiple blocks of the same type in the same week, I usually schedule just for the first one because many times the items take more than the length of one block, so the item spills over to the next block from the same category.

I also use Roam to associate TODO items with blocks. I have a small Python script that I run every time I do Configure and Control (weekly) and this script generates a small template with the number of the week and a block for each day under. I generate this every week and I paste it in a page I created in Roam called Schedule.

![](/img/schedule.gif)

Under each day, I create a bullet for each block type I created for that day in the calendar. To schedule an item in a time block, I copy a reference to the TODO item in Roam and I paste it under the block I want to schedule it. This creates a reference and not a copy to the TODO item, so if I change it, it gets updated everywhere and I can navigate easily to the original item. Besides that, I tag the item with \#Scheduled, so I know that item is already scheduled.

![](/img/schedule2.gif)

Because every day in the Schedule page is a Roam page link, it will show in the Daily Notes page for that day. When I visit my Roam homepage, I will be able to easily see what blocks I have scheduled and what items for each. I still need the calendar to see at what time the blocks are scheduled, and then I have Roam to tell me what I scheduled.

![](/img/schedule3.png)

When I complete a TODO item, I just mark it as DONE in the Daily Notes view and it gets automatically set to DONE everywhere. It will also disappear from my visualization of all items in all categories and statuses since the queries are searching only for open TODOs.

![](/img/schedule4.gif)

Configure, combined with some steps from Control, is something I do regularly once a week. Initially, I was doing this every Sunday, but I found it works better for me to take this time on a new week on Monday morning. Especially since I became better at it and it took less time.

## Conclusions
It looks complicated, but I assure you, it is easier than it seems. Once you go through the process a few times, it becomes second nature. It takes more time in the beginning, especially while you figure things out.

It’s also a process that works well for me, but I didn’t come up with it at once. I started with just defining the TODOs and then I thought of the Schedule page and the Planning Overview and did a few adjustments here and there all the time. Initially, I used a physical whiteboard for the blocks and I would put post-its on it. In fact, I’m pretty sure that the process I will have in 6 months from now will be slightly different than the one I described here in this post. The key is to start somewhere, think of what should the process help you do, find how to do it in whatever tool(s) you are comfortable with and keep on iterating on it.

The 2-way links and block references in Roam make it quite easy to implement this process in it. But with some more manual steps, this shouldn’t be difficult to do in any tool. Since some might find useful to apply this in a professional context and Roam is not that common in companies (so far), I will try to implement it with tools more widely used. But that is the content of a future post.

I hope you found this useful and I look forward for your thoughts and feedback! Is this something you would use in your daily work? Do you already do something similar today? Or if the whole process seems too heavy for you, what is one thing you could apply right away?

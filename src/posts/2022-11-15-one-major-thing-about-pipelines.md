---
title: One major thing that bothers me about CI/CD pipelines
description: 
date: 2022-11-15
tags:
  - testing
  - pipelines
layout: layouts/post.njk
imgUrl: ./src/assets/images/BCDA3591-9541-4CDF-9B93-C904A1FA7ACD.png
imgAlt: ''
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

There is one major thing bothering me about CI/CD pipelines: it is hard to test them. I don’t know one good example of pipelines that are properly tested. This post is not about giving a (or the best) way on how to test pipelines, because frankly I don’t know one myself. I will try though to throw some ideas out there.

## Do we even need to test the pipelines?

Before discussing about testing pipelines, a reasonable question is if we even need to test them?

My simple answer is yes! Why? Because they are code. Code that influences how our application code is built, tested and deployed. Any bug in the pipeline code will have an impact on the deliverable that ends up being used by our users. 

The application code might be perfect, but our users might still be experiencing issues because of bugs in the pipelines code. Which is a nasty kind of bug, if you ask me, because is not part of the application code.

On top of this, we know that the application code is not perfect. Pipelines play an even more important role of facilitating various tests and checks being run on the application code. Pipelines enhance our trust in the application code we write. If pipelines run green, then we know we have done the best we could to ship good code. But what makes sure that the pipelines do what they are supposed to do?

## We do need tests for pipelines. 

I hope that the arguments above for testing pipelines make sense and that you are convinced of the benefits of doing so. We might not need to test all pipelines, in the same way we might not want to achieve 100% code coverage. After a certain point, the effort does not make sense.

Most pipelines I have written or saw are a mix of YAML or other descriptive format (let’s call these *pipeline definitions*) and scripts. Scripts should be easy to test, but what about the pipeline definitions?

## Pipeline definitions

Pipelines definitions are files that define what the pipeline should do. They have many names and they come in different formats, although most of the solutions seem to have a preference for YAML.

As projects grow, there is a tendency for the pipelines to explode in size and more and more decisions to be done in the pipeline definitions. More than that, some pipeline solutions allow to re-use pipelines (or parts of pipelines) in other pipelines, so you don’t duplicate parts which are doing the same thing. Like one would do with regular code. 

Unfortunately pipeline definitions are not quite like regular code. Main aspect here is readability. Re-using pipelines as mentioned above makes the complexity of the pipelines and debugging them explode. While it might seem like a cool solution from a geeky engineering way, figuring out what happens where and how in these composed pipelines can turn into a nightmare. 

Finally, each pipeline and its components could be seen as a function with inputs and outputs. With the important detail that many pipelines have many secondary effects as outputs, so they don’t return something, but they do something instead. Testing them is hard. 

## Thoughts

As I mentioned in the beginning, I don’t know a good solution for this. Searching around the internet for the most popular pipeline tools, doesn’t give much satisfactory results. Here are some of my thoughts:

1. **Keep as much of the pipeline code as scripts**. Scripts are easier to test, as long as they are written in a good way. Create tests for these scripts and run them in a simple separate pipeline, whenever their code changes.
2. **Split pipelines when complexity grows**. Instead of having a big pipeline that does different things based on inputs, split it in smaller ones. This makes it easier to follow through what each pipeline does, especially when it is not working as intended.
3. **Write unit tests for the pipeline**. [Some technologies](https://github.com/jenkinsci/JenkinsPipelineUnit) have tools to test the actual pipeline definitions. You can have simple pipelines executing these pipeline tests.
4. **Execute pipelines locally**. [Some technologies](https://github.com/nektos/act) have tools to run the pipelines locally. This is especially handy when debugging why pipelines don’t work as intended. Being able to run the pipelines locally makes the feedback loop faster, by removing the need to wait on runners to start and run.
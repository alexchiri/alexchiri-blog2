---
title: Local development environments as code
description: 
date: 2022-06-20
tags:
  - docker
  - wsl
  - vscode
layout: layouts/post.njk
imgUrl: ./src/assets/images/Depositphotos_141380706_L.jpg
imgAlt: ''
imgSize: '100vw'
pictureClass: grid-column-center
imgClass: img-full
imgBorderColor: '#a689ab'
---

For some years now, I have stopped installing much development tooling directly on my computer. Everything runs in containers or VMs running on my computer. This is not a new concept, but several tools which are now ubiquitous enabled even better workflows for this. Even though these tools are very common nowadays, I haven’t seen many people using them this way. I think that’s a shame, because this brings considerable productivity, collaboration and effectiveness benefits. Let me tell you why and how.

## Why?

1. *Easy to get started.* Imagine a team where any new team member could get their development environments setup in minutes.
2. *Easy to work with multiple tooling versions.* It’s not very uncommon to have to work with multiple versions of the same tool at the same time. This could be because you might want to try upgrading to a new version, or simply because different systems require different versions. Many tools offer their own way to manage multiple versions, but they are different for each tool.
3. *Reproducible environments.* “It works on Bill’s machine, but not on mine” is a tough thing to hear. But if every team member uses development environments created with the same source code, then this situation would be a thing of the past.
4. *Flexible and customizable environments.* These environments can be customised to each persons preference (but obviously, if they get personalized in such a way that brings considerable differences, then the benefit above could be lost).

## How?

### tl;dr; - high level idea of the how

1. Write Dockerfiles that build on each other to contain all the tooling required for your various projects and needs.
2. Run your projects inside these containers using Visual Studio Code and Remote Containers extension.
3. Alternatively, for Windows users, import the user-space of these containers as VMs in WSL2, for a better integration with the host. The VS Code Remote WSL extension offers a similar experience with the Remote Containers extension, but for a WSL VM.

### Step 1: Write some Dockerfiles

![](/assets/images/project-dev-palace.png)

I started gathering a collection of Dockerfiles in a [public repo](https://github.com/alexchiri/project-dev-palace-all) which I use for when I work on various things.

It all starts with the `basic` [image](https://github.com/alexchiri/project-dev-palace-all/blob/main/basic/Dockerfile) which installs tools like `zsh` and `curl` and adds some basic configuration. It also creates a Linux user and configures my git details based on arguments passed at build time. All the other images have the layers of this image in their composition. Any tools or configuration that I want to have available in all the other images, I add them to this image.

### Step 2: Configure your development environments

This whole setup relies heavily on [Visual Studio Code](https://code.visualstudio.com/) and its [Remote Container extension](https://code.visualstudio.com/docs/remote/containers) which allows to open a folder and mount it in a container of our choice. More than that, from that moment on, Visual Studio Code behaves like it would be also running inside the container, so for example, if you would open a terminal inside vscode, the shell session would run inside the container.

After installing the extension, vscode has some pre-defined containers we can choose for our development environment, but I chose to define one myself.

Let's say I would like to work some more in [a Rust project](https://github.com/alexchiri/dragon) I started some time ago.

![](/assets/images/rust-dev-container.png)

I can open the project in vscode and in order to get started developing in a container, I need to create a special folder called `.devcontainer` and a `devcontainer.json`  file inside it. There are [plenty of options](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) that can be configured in this file, but for now I am only interested in configuring:

* the `image` which points to a local image I built from my `rust`  Dockerfile,
* the `remoteUser` because I want to run as user `alex`  inside the container, for which I installed tools and configured them as I like to have them,
* `mounts` to mount my `.ssh` folder from the host, in case I want to connect to a remote server and have my SSH keys available,
* and `extensions` to be able to configure a couple of useful extensions that I want to have them installed in the container.

These can be checked into the project repo and every time vscode will see such a folder and file inside a project, it will offer me to try to open it in a container as configured. This time, I will do it myself: `F1` and search for `Rebuild and Reopen in Container` option. Once the container is started and vscode started inside it, I can see written `Dev Container` in the bottom-left corner. More than that, if I open a new Terminal, I can see that the session in it runs as user `alex` and it has my preffered prompt and color theme, just as configured in the `basic` [Dockerfile](https://github.com/alexchiri/project-dev-palace-all/blob/main/basic/Dockerfile).

![](/assets/images/rust-dev-container-2.png)

And I am good to go.

When I need to work with Kubernetes clusters, I create an empty folder where I just create the `.devcontainer` folder and the json file in it to run the `k8s` [container](https://github.com/alexchiri/project-dev-palace-all/blob/main/k8s/Dockerfile) and use the Terminal from vscode. It might seem weird to use vscode as a terminal in this case, but it works quite well.

If I need to adjust anything in my development environment, I just modify the Dockerfile, build it and reopen the project in a new container. *Clean, simple, fast and shareable with my team colleagues.*

### Step 3: (Optional) Import the docker user-space as a VM in WSL2 - Windows only

For Windows 10 and 11 users and lovers of Windows Subsystem for Linux, this can be taken even further.

First, we need to [enable WSL](https://docs.microsoft.com/en-us/windows/wsl/install) and install the [vscode WSL extension](https://code.visualstudio.com/docs/remote/wsl).

Next, we need to build the image from Dockerfile (already done in previous step), create a container from it and export its user-space as `.tar`:

```
docker container export -o rust.tar $(docker create rust:1)
```

Then this can be imported as a full blown Linux VM inside WSL2:

```
wsl --import rust C:\Projects\VMs\rust .\rust.tar
```

Finally, we can now go back to vscode and hit our `F1` shortcut and search for `Remote-WSL: Reopen in WSL`  option. Soon enough, we would be running vscode inside the VM, just like we would run inside a container, but the VM is better integrated with the host.

## Conclusion

It might seem hard to let go of the habit of installing and customizing our local development environments directly on our computers, that is an art of itself. But if we can get over reaching that perfection, I think this approach has many benefits (as mentioned in the beginning) without giving up much speed and flexibility. And the fact we would be able to share these environments quickly with others and collaborate on writing them is a big bonus in a team setup.


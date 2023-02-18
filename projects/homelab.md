---
title: 'My Homelab'
metaTitle: 'My Homelab'
metaDesc: 'In this article I will show you my homelab and how I use it.'
# website: 'https://lab.wglc.at'
---

## The first server
At the age of 16 I've started to buy a old generation server on eBay to test it at my home - it all started with an HP DL160 G6. 

I've bought it for ~110€ and it was a great deal to begin. I've installed Proxmox on the server and started to play around with it. I've set up a few VMs and started to learn about networking and how to configure them correctly.

![Server 1](../server1.png)

## The second server
After a few months I've decided to buy a second server - this time a HP DL380p. I've bought it for ~400€ and it was a great deal as well.
Unfortunately I've had some issues with the server - it was the raid controller which wasn't working fine - I've had to replace it with a new one.

After the replacement the server was working fine and finally I've started to fill it up with SSDs to use it as a fast storage server.

## The third server
A few weeks later I have recognized that I need more power - so I guess it was time to buy a new node for my home network - this time
I've bought a Dell R720 with 2x E5-2680 CPUs and 144GB of RAM for ~600€ and upgraded it with 8x 3TB HDDs.

I have switched all my vm's from the old HP DL160 G6 to the new Dell R720 and started to use it as my main server.
The old HP DL160 G6 was now my backup server and for testing purposes.

## The network problem
When I started with my self-hosting journey I've had
1. Slow internet connection
2. Slow internal network
3. Old switches

this was a big problem for me because at this time I've started to use my homelab for more than just testing and learning. I've started to use it for my public services like my website, my email server, my file server, plex and so on.

Also the old swtiches were a big problem because they were only 1Gbps and VERY power hungry.

### The solution
To resolve all of these problems I have decided to start with my 10Gbps project.
And yeah - it was a big project - it costed me a lot of time and money but it was worth it.

I've started with the internet connection - I've switched my ISP to a new one which offers higher speeds and a better connection.
As backup I've also bought a 5G router from a different ISP which I can use if the main internet connection is down.

After that I have started to plan my network - my goal was to have a minimum of 10Gbps between all my servers, switches and some clients.

Let's start with the switches:
1. MIKROTIK CRS354 24x RJ45, 4x 10 SFP+, 2x QSFP+ ports (Network rack)
2. MIKROTIK CRS326-24S-2Q+RM 24x SFP+, 2x QSFP+ ports (Server rack)
3. MIKROTIK CRS326-24G-2S+RM 24x RJ45, 2x SFP+ ports (Server rack)

To use the full potential of the switches I've bought a total length of 500m OM5 fiber cable and 14x 10Gbps SFP+ transceivers, to connect all my switches, servers and clients together.

As main connection I've connected QSFP to QSFP port of my MIKROTIK CRS354 and MIKROTIK CRS326-24S-2Q+RM switches together.
Now over this connection I have a overall speed of 40Gbps between the both switches.

![Network Rack](../networkRack.png)

After that I've connected all my servers to the MIKROTIK CRS326-24S-2Q+RM switch with dual 10Gbps SFP+ connections (LACP) to have a total speed of 20Gbps between the server and the switch.

Sadly I've had massive problems with the configuration of the switches - I've had to reset them multiple times and start from scratch because I've made some mistakes in the configuration - but finally I've got it working (with Vlans).

![Server Switches](../homeLab3.jpg)

## More servers
After I've got my network working I've started to buy more servers to expand my homelab.
I have bought following servers:
1. HP DL360 G8
2. GigaByte R281-N40

![Servers](../homelabCover.png)

## But why do I need all of this?
I've started my self-hosting journey to learn more about networking and servers in general.
With the time I've recognized that I can use my homelab for more than just testing and learning - I've started to use it for my public services like my website, password manager, media server and so on.

And let's be honest - it's just cool to have a lot of servers and a fast network at his own home. :D


## TLDR
I built a Homelab to satisfy two main motivations: to learn and to continually challenge myself. It all started with an old HP server that I bought on eBay when I was 16. From there, I added more servers and virtual machines, gradually developing my skills in networking and server configurations. 

As I began to use my Homelab for more than just testing and learning, I encountered problems with slow internet and network speeds, as well as outdated switches. 
To solve these issues, I embarked on a big project to upgrade my network to 10Gbps speeds, investing both time and money to achieve my goal. With a faster network in place, I added even more servers to my Homelab to tackle new and exciting challenges.
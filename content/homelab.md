---
title: 'My Homelab Journey'
metaTitle: 'My Homelab Journey: Building a High-Speed Network'
metaDesc: 'Discover how I built my homelab, from acquiring my first server to constructing a high-speed network for learning and hosting public services.'
# website: 'https://lab.wglc.at'
---

## The Beginning: My First Server
At the age of 16, I bought an older generation server on eBay to experiment with at home - an HP DL160 G6. I purchased it for around 110€, which was an excellent deal to start with. 
I installed Proxmox on the server and began to explore its capabilities. 

By setting up a few VMs, I learned about networking and how to configure them correctly.

![Server 1](../server1.png)

## Expanding: The Second Server
A few months later, I decided to buy a second server - an HP DL380p. It cost me around 400€, and it was a great deal as well. Unfortunately, I encountered some issues with the server - specifically, a malfunctioning RAID controller. I had to replace it with a new one.

After the replacement, the server worked perfectly. I then filled it up with SSDs to use it as a fast storage server.

## Further Growth: The Third Server
Realizing I needed more power, I purchased a Dell R720 with 2x E5-2680 CPUs and 144GB of RAM for around 600€. 
I upgraded it with 8x 3TB HDDs. I migrated all my VMs from the old HP DL160 G6 to the new Dell R720 and used it as my primary server. 

The HP DL160 G6 became my backup server and was used for testing purposes.

## Overcoming Network Challenges
At the beginning of my self-hosting journey, I faced several challenges:
1. Slow internet connection
2. Slow internal network
3. Outdated switches

These issues became significant as I started using my homelab for more than just testing and learning. I hosted public services such as my website, email server, file server, and Plex media server.

Additionally, the old switches were a major problem because they were limited to 1Gbps and consumed a lot of power.

### The Solution: 10Gbps Project
To address these problems, I decided to undertake a 10Gbps network upgrade project. Although it was time-consuming and costly, it was ultimately worth the investment.


First, I switched my ISP to one that offered higher speeds and a better connection. As a backup, I purchased a 5G router from a different ISP to use if my primary internet connection went down.

Next, I planned my network with the goal of achieving a minimum of 10Gbps between all my servers, switches, and some clients. I acquired the following switches:

1. MIKROTIK CRS354 24x RJ45, 4x 10 SFP+, 2x QSFP+ ports (Network rack)
2. MIKROTIK CRS326-24S-2Q+RM 24x SFP+, 2x QSFP+ ports (Server rack)
3. MIKROTIK CRS326-24G-2S+RM 24x RJ45, 2x SFP+ ports (Server rack)

To maximize the potential of these switches, I bought 500 meters of OM5 fiber cable and 14x 10Gbps SFP+ transceivers to connect all my switches, servers, and clients.

As the main connection, I linked the QSFP ports of my MIKROTIK CRS354 and MIKROTIK CRS326-24S-2Q+RM switches, resulting in a 40Gbps connection between the two switches.

![Network Rack](../networkRack.png)

After that, I connected all my servers to the MIKROTIK CRS326-24S-2Q+RM switch using dual 10Gbps SFP+ connections (LACP) to achieve a total speed of 20Gbps between the server and the switch.

Unfortunately, I encountered significant problems while configuring the switches. I had to reset them multiple times and start from scratch due to configuration errors. Eventually, I got everything working with VLANs.

![Server Switches](../homeLab3.jpg)

## Expanding Even Further: More Servers
With my network up and running, I began to expand my homelab even more by purchasing additional servers:
1. HP DL360 G8
2. GigaByte R281-N40

![Servers](../homelabCover.png)

## The Purpose of My Homelab
I embarked on my self-hosting journey to learn more about networking and servers in general. Over time, I realized that I could use my homelab for more than just testing and learning. I began using it for public services like my website, password manager, media server, and more.

And let's be honest - having numerous servers and a high-speed network at home is simply cool. :D


## TLDR
I built a Homelab to satisfy two main motivations: to learn and to continually challenge myself. It all started with an old HP server that I bought on eBay when I was 16. From there, I added more servers and virtual machines, gradually developing my skills in networking and server configurations.

As I began to use my Homelab for more than just testing and learning, I encountered problems with slow internet and network speeds, as well as outdated switches. To solve these issues, I embarked on a big project to upgrade my network to 10Gbps speeds, investing both time and money to achieve my goal. With a faster network in place, I added even more servers to my Homelab to tackle new and exciting challenges.
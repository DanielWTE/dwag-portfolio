---
title: 'Solun Services'
metaTitle: 'Solun Services'
metaDesc: 'This article is about the creation and the idea behind solun.'
website: 'https://msg.solun.pm'
---

## What is Solun?
My idea was to create a service like "privnote.com" but without all the cookies and unnecessary extra-features.

The feature list:
1. No authentication (Everyone can use it)
2. Self destruct (The note should be deleted after reading)
3. Giga simple (Write your note, send the link to your colleague)
4. Secure (The note will be encrypted and decrypted)

I've also planned to create the same service just for email addresses and file storing.

## How I did it
For Solun Message I have used following tools:
1. PHP
2. JavaScript (JQuery, AJAX)
3. MySQL

## How does it work?
The user enters a message, the message will be encrypted and stored in the database. The user will get a link to the message. 
The link contains a random generated ID. 
The colleague can open the link and the message will be decrypted, displayed and deleted from the database.

![Solun Processing](../solunGif.gif)
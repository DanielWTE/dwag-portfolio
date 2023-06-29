---
title: 'Scraper'
metaTitle: 'Scraper'
metaDesc: 'This article is about the creation of my scrapers.'
# website: 'https://anipic.co/'
github: 'https://github.com/DanielWTE/ebay-kleinanzeigen-api'
---

## What is a scraper?
A scraper is a program that extracts data from a website.

## What have I built?
I've built a scraper API which extracts data from various popular online marketplaces (This one is for Ebay).

A feature list:
1. 25 random listings (the Url)
2. All data of a listing (Images, Title, ID, Price, Description, Views, etc.)
3. Updated Values (Re-Check like the 2nd point, but only the updated values)

this works with a Python Flask Application and the latest chrome driver and selenium.

## Get random listings CURL Example

With this CURL request we send a GET request to the API server and get back 25 random listings in JSON format.

```bash
curl -X GET "http://10.254.1.119/getInserateUrls" -H "accept: application/json"
```

"Expected" output:

```txt
{"urls": ["https://www.ebay-kleinanzeigen.de/s-anzeige/xyz", ...]}
```

![Scraper Gif 1](../scraper1Gif.gif)

## Get all data of a listing CURL Example

With this CURL request we send a GET request with the listing URL to the API server and get back all data of it in JSON format.

```bash
curl -X GET "http://10.254.1.119/getInseratDetails" -H "accept: application/json" -H "url: https://www.ebay-kleinanzeigen.de/s-anzeige/xyz"
```

"Expected" output:

```txt
{"title": "xyz", "price": "1500.00", "images": ["https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/81/xyz"], "tags": ["Kleinanzeigen Berlin", "Elektronik", "Handy & Telefon"], "views": "0", "description": "xyz", "uploadDate": "18.02.2023", "adId": "058195681"}
```

![Scraper Gif 2](../scraper2Gif.gif)

## Get updated values of a listing CURL Example

With this CURL request we send a GET request with the listing URL to the API server and get back all updated values of it in JSON format.

```bash
curl -X GET "http://10.254.1.119/getViews" -H "accept: application/json" -H "url: https://www.ebay-kleinanzeigen.de/s-anzeige/xyz"
```

"Expected" output:

```txt
{"views": "xyz000"}
```

![Scraper Gif 3](../scraper3Gif.gif)

## And when you want to escalate it to the next level?

You can use the API to build a website where you can search for listings and filter them by price, views, upload date, etc.

And what did I do? I've built a website where you can search for listings and filter them.

I've made a few php scripts to get listings, the details and the updated values of a listing to store them in a mongodb database.

I know it's crappy but it works (for now)

![Scraper Gif 4](../scraper4Gif.gif)

## How I've do it
I've used following tools:
1. Python (Flask, Selenium, Requests, etc.)
2. MongoDB (Database)
3. Docker (Containerization of the API)
4. Nginx (Webserver)
5. PHP (Frontend, Backend, Scripts etc.)
6. JavaScript (JQuery, AJAX)
7. A lot of computing power (Opening chrome tabs is pretty resource intensive)

The API is running in a docker container, you can self-host it really easily.
Just one command and you can call it a day.

Educational purposes. :)
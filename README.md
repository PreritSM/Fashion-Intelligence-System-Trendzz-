# Fashion-Intelligence-System (Trendzz - for the Gen Z)
## What it is and what it does?
Trendzz is an web app which uses computer vision model to extract the current trends from social media (currently for Twitter) and categories them into searchable keywords for any Ecommerce website ie. the attributes of trending apparels are provided to the user so that they can buy the exact or most similar apparels from the ecommerce websites.

The tool also supports search parameters like search radius, trending metrics, time frames etc, so that the user can find trends in their surroundings and will not be fed by trends from distant lands or time frames they are not interested in.

## How it does?
The tool uses Twint python library which is an advanced Twitter scraping tool written in Python that allows for scraping Tweets from Twitter profiles without using Twitter's API. The images and data extracted is then fed to preliminary tester for brands and obvious attributes from tweet data like hashtags and links.

The images then extracted are fed into two models :-

1. AWS Rekognition:- Rekognition Image is a deep learning-powered image recognition service that detects objects, scenes, and facial attributes. ( here, is used to predict apparel types like t-shirts, tops, tanks, etc.)

2. AIR-Clothing-MA:- The AIR-Clothing-MA(Multi Attributes) is a kind of multi-attributes classifier for clothing and its multi attributes. ( here, is used to predict the color and pattern type of the apparel) 

The attributes collected are stored in a CSV file for accessibility and the columns are the results of both the models and the result of the preliminary tests.

![Trendzz system flow](https://user-images.githubusercontent.com/56505861/190875542-e30367e3-3fe3-4ed8-a00e-ec8163337bc3.png)

### **Installation and Configuration details will be shared shortly, few environment variables needs to be edited before making it completely available for use.**


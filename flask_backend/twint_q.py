import twint
import pandas as pd
from datetime import datetime
from datetime import timedelta
from geopy.geocoders import Nominatim

# Configure

def query(search,min_likes,limit,months,city='karaundi',radius=1500):
    c = twint.Config()

    #word processing
    c.Lowercase = True

    c.Images = True

    c.Lang = "en"

    c.Show_hashtags = True


    
    today = datetime.today()
    since = today-timedelta(days=30*months)
    since = since.strftime("%Y-%m-%d")
    c.Since = since

    c.Stats = True

    c.Popular_tweets = True

    c.Min_likes = min_likes

    #search lot of terms
    c.Search = search

    #limit
    c.Limit = limit

    #location
    locator = Nominatim(user_agent="myGeocoder")
    location = locator.geocode(city)
    location = str(location.latitude)+','+str(location.longitude)+','+str(radius)+'km'
    c.Geo = location

    c.Pandas = True

    twint.run.Search(c)

    Tweets_df = twint.storage.panda.Tweets_df

    Tweets_df.to_csv('saved.csv')
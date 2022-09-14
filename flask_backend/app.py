from flask import Blueprint, render_template, url_for, request, redirect,Flask,jsonify
import requests
import twint_q
import rekog
import pandas as pd
from dotenv import load_dotenv, find_dotenv
import os
import counter
from flask_cors import CORS


load_dotenv(find_dotenv())


available_pattern=["", "no", "checker", "dotted", "floral", "striped", "custom"]
gender=["man","woman"]
available_color=["", "white", "black", "gray", "pink", "red", "green", "blue", "brown", "navy", "beige","yellow", "purple", "orange", "mixed"]
app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['JSON_SORT_KEYS'] = False



def get_new():
    available_names = []
    with open('Names.txt','r') as file:
        for line in file:
            for word in line.split():
                available_names.append(word)
    available_brands = []
    with open('brands.txt','r') as file:
        for line in file:
                available_brands.append(line.replace('\n','').replace('\t',''))
    print(available_brands)
    twint_q.query("fashion OR model OR dress OR styles OR currentlywearing OR outfit OR fashionpost OR todaysoutfit",50,20,3)
    saved = pd.read_csv('saved.csv')
    temp=[]
    for ind,row in saved.iterrows():
        hashtags=row['hashtags'].strip('][').replace('\'','').replace('\"','').split(',')
        tweet_link=row['link']
        for img in row['photos'].strip('][').replace('\'','').replace('\"','').split(','):
            color_list=requests.get(os.environ.get("COLAB_LINK")+'?img='+img.replace(' ',''))
            color_list = list(filter(lambda c:c in available_color or c in available_pattern or c in gender,color_list.json()))
            label_list = rekog.label(img.replace(' ',''))
            label_list = list(filter(lambda c:c in available_names,label_list))
            brand_list = []
            for word in row['tweet']:
                if word.replace('#','') in available_brands:
                    brand_list.append(word)
            temp.append([img,tweet_link,hashtags,color_list,label_list,brand_list])
    
    df=pd.DataFrame(temp,columns=['img_link','tweet_link','hashtags','air-ma-results','aws-results','brands'])
    df.to_csv('final.csv')

@app.route('/',methods=['POST'])
def landing():
    # get_new()
    data = counter.count()
    return jsonify(data)


import pandas as pd


available_color=["", "white", "black", "gray", "pink", "red", "green", "blue", "brown", "navy", "beige","yellow", "purple", "orange", "mixed"]

available_pattern=["", "no", "checker", "dotted", "floral", "striped", "custom"]

def color_count():
    freq={}
    df=pd.read_csv("final.csv");
    for ind,row in df.iterrows():
        for item in row['air-ma-results'].strip('][').replace('\'','').replace('\"','').replace(' ','').split(','):
            if item not in available_color:
                continue
            if (item in freq):
                freq[item]['c'] += 1
                freq[item]['items'].append(row['img_link'])
            else:
                freq[item] = {'c':1,'items':[]}
                freq[item]['items'].append(row['img_link'])
    lst=[]
    for key,value in freq.items():
        lst.append({"value":key,"c":value['c'],"items":value['items']})
    return lst


def pattern_count():
    freq={}
    df=pd.read_csv("final.csv");
    for ind,row in df.iterrows():
        for item in row['air-ma-results'].strip('][').replace('\'','').replace('\"','').replace(' ','').split(','):
            if item not in available_pattern:
                continue
            if (item in freq):
                freq[item]['c'] += 1
                freq[item]['items'].append(row['img_link'])
            else:
                freq[item] = {'c':1,'items':[]}
                freq[item]['items'].append(row['img_link'])
    lst=[]
    for key,value in freq.items():
        lst.append({"value":key,"c":value['c'],"items":value['items']})
    return lst

def rekog_count():
    available_names = []
    with open('Names.txt','r') as file:
        for line in file:
            for word in line.split():
                available_names.append(word)
    freq={}
    df=pd.read_csv("final.csv");
    for ind,row in df.iterrows():
        for item in row['aws-results'].strip('][').replace('\'','').replace('\"','').replace(' ','').split(','):
            if item not in available_names:
                continue
            if (item in freq):
                freq[item]['c'] += 1
                freq[item]['items'].append(row['img_link'])
            else:
                freq[item] = {'c':1,'items':[]}
                freq[item]['items'].append(row['img_link'])
    lst=[]
    for key,value in freq.items():
        lst.append({"value":key,"c":value['c'],"items":value['items']})
    return lst
    

def count():
    color=color_count()
    pattern=pattern_count()
    rekog=rekog_count()

    color = sorted(color,key=lambda x: x['c'],reverse=True)
    pattern = sorted(pattern,key=lambda x: x['c'],reverse=True)
    rekog = sorted(rekog,key=lambda x: x['c'],reverse=True)
    count = {'color':color,'pattern':pattern,'rekog':rekog}
    return count

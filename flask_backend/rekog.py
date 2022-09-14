import boto3
import image_helper
import os


ACCESS_ID = os.environ.get('ACCESS_ID')
ACCESS_KEY = os.environ.get('ACCESS_KEY')



def label(imgurl):
    client = boto3.client('rekognition',region_name='us-east-1',
         aws_access_key_id=ACCESS_ID,
         aws_secret_access_key= ACCESS_KEY)
    imgbytes = image_helper.get_image_from_url(imgurl)
    rekresp = client.detect_labels(Image={'Bytes': imgbytes},MinConfidence=50)
    ret=[]
    for lab in rekresp['Labels']:
        ret.append(lab['Name'])
    return ret

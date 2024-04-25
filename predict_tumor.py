from flask import Flask, request, jsonify
from flask_cors import CORS
from tumor_detection import predictTumor
from tumor_detection import predict_pneumonia_model
import json
import urllib.parse
import requests
app = Flask(__name__)
CORS(app)

@app.route('/api/predict_tumor', methods=['POST'])
def predict_tumor(): 
    data = request.get_json() 
    image_path = data.get('image')
    print(image_path) 
    
    result = predictTumor(image_path)
    result_list = result.tolist() 
    return jsonify({'result': result_list})


@app.route('/api/predict_pneumonia', methods=['POST'])
def predict_pneumonia(): 
    data = request.get_json() 
    image_path = data.get('image')
    print(image_path) 
    
    result = predictTumor(image_path)
    result_list = result.tolist() 
    return jsonify({'result': result_list})
 
if __name__ == '__main__':
    app.run(debug=True)

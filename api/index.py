import os
from flask import Flask,request,jsonify
import pandas as pd
from sklearn.linear_model import LinearRegression
from resend import Resend
app=Flask(__name__)
@app.route('/api/predict',methods=['POST'])
def predict():
  df=pd.DataFrame(request.json['history'])
  model=LinearRegression().fit(df[['month']],df['amount'])
  return jsonify({'prediction':float(model.predict([[df['month'].max()+1]])[0])})
@app.route('/api/alert',methods=['POST'])
def alert():
  Resend(api_key=os.environ['RESEND_API_KEY']).emails.send({
    'from':'FinanceMaster <alerts@financemaster.app>',
    'to':request.json['email'],
    'subject':'⚠️ Spending Alert',
    'html':f"Namaste 🙏 You used 80% of ₹{request.json['limit']}"})
  return jsonify({'status':'sent'})
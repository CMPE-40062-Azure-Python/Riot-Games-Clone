# app.py (Flask application)
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/who-are-we')
def who_are_we():
    return render_template('who-are-we.html')

if __name__ == '__main__':
    app.run(debug=True)

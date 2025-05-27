#python3 -m venv .venv to deactivate virtual environment

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/flip-card')
def flip_card():
    name = request.args.get('name', 'Guest')
    return render_template('flip-card.html', username=name)

if __name__ == '__main__':
    # For Replit compatibility: use host='0.0.0.0', port=8080
    app.run(host='0.0.0.0', port=8080, debug=True)

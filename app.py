from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the MusicHub Homepage!"

# Favicon route
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico')

if __name__ == '__main__':
    app.run(debug=True, port=5001)

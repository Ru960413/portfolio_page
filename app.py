from flask import Flask, render_template


app = Flask(__name__, static_folder='static/')



@app.route("/")
def index():
    return render_template("en_index.html")



@app.route("/zh")
def zh_index():
    return render_template("zh_index.html")
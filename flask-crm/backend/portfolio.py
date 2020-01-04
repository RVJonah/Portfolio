from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_talisman import Talisman
from sqlalchemy.orm import sessionmaker
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
from tempfile import mkdtemp
from backend.database import initiate_orm, secret_key, get_blogs
from backend.helper_functions import convert_sqlalchemy_object_to_json, send_email, check_token

app = Flask(__name__)
CORS(app)
Talisman(app)

app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['SECRET_KEY'] = secret_key

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

orm = initiate_orm()
Session = sessionmaker(bind=orm['engine'])
db = Session()
blogs = orm['tables']['blogs']

@app.route('/blogs', methods=['GET', 'POST'])
def blogsRoute():
      if check_token(request.headers):
          number_of_blogs = int(request.args.get("numberOfBlogs"))
          blogs_list = get_blogs(db, blogs, number_of_blogs, 5)
          blogs_list = convert_sqlalchemy_object_to_json(blogs_list)
          return blogs_list, 200
      return('error: Authentication Error')

@app.route('/comments', methods=['POST'])
def commentsRoute():
    if request.method == 'POST':
        if check_token(request.headers):
            send_email(request.json)
            return jsonify(True)
        return jsonify('Error: Authentication failed'),401
    return jsonify('Error: Invalid request method')

@app.route('/favicon.ico')
def favicon():
    return


if __name__ == '__main__':
     app.run()

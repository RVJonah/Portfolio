# Portfolio

My personal portfolio. This website is my personal portfolio containing some of the projects I have built and a blog following my progress to become a web developer. It is currently hosted at https://davidbarkerportfolio.herokuapp.com/

This is built of two parts. The blog server: install the requirements from the requirements.txt via pip install -r requirements.txt. next set up a virtual environment via : python3 -m venv env on Mac or Linux or: py -m venv env on windows

Once this is complete you will then need to set the following environment variables: 
SECRET_KEY = any string 
DATABASE_URI = the URI for your database 
EMAIL_ADDRESS = your email address 
EMAIL_APP_PASSWORD = your app password to allow you the app to use to email service 
BLOG_SITE_TOKEN = a token used to confirm the identity of the site sending the request.

Once this is complete start the server by typing flask run

The Angular FrontEnd: In order to get the frontend working you will need npm installed via Node.js which can be downloaded here: https://nodejs.org/en/

You will need to create a add the blog token (blogSiteToken) you chose for you blog server to the src/assets/tokens/token.ts file.

Once downloaded and installed run npm install to install the necessary dependencies. After this is completed you can use ng serve to start the Angular server.

This should allow you to test a local version of my portfolio.
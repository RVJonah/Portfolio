import os

def check_token(headers):
    if 'token' in headers and headers['token'] == os.environ['BLOG_SITE_TOKEN']:
        return True
    return False

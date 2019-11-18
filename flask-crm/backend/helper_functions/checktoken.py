from backend.database.passwords import blog_site_token

def check_token(headers):
    if 'token' in headers and headers['token'] == blog_site_token:
        return True
    return False

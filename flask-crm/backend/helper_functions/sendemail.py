import smtplib
from backend.database.passwords import email_address, email_app_password, my_email
def send_email(request):
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.ehlo()
    s.starttls()
    s.login(email_address, email_app_password )
    message = "\r\n".join([
        "Subject: Comment from your website",
        "Hi David,",
        "%s has sent you the following message" % request['name'],
        request['message'],
        "If you like to respond to their comment their email is %s" % request['email'],
        "Hope it was something positive!",
        " ",
        "Your Website"])
    s.sendmail("BlogSite", my_email, message)
    s.quit()

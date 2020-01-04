import os
import smtplib
def send_email(request):
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.ehlo()
    s.starttls()
    s.login(os.environ['EMAIL_ADDRESS'], os.environ['EMAIL_APP_PASSWORD'])
    message = "\r\n".join([
        "Subject: Comment from your website",
        "Hi David,",
        "{} has sent you the following message".format(request['name']),
        request['message'],
        "If you like to respond to their comment their email is {}".format(request['email']),
        "Hope it was something positive!",
        " ",
        "Your Website"])
    s.sendmail("BlogSite", os.environ['MY_EMAIL_ADDRESS'], message)
    s.quit()

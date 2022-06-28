from email.mime import text
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys
sesid = sys.argv[1]
#ALAMAT EMAIL PENGIRIM
Pengirim = "shieldidkanvret@gmail.com"
#ALAMAT EMAIL PENERIMA
Penerima = "android@support.whatsapp.com"

msg = MIMEMultipart()
msg['From'] = Pengirim
msg['To'] = Penerima
msg['Subject'] = "Unbanned"

body = f"Hi WhatsApp My phone number has been blocked by an image exploit loophole in order to violate the laws of the famous WhatsApp app and I don't know that Please help me recover my account and unblock it as soon as possible because I work on the account within the conditions and laws and I ask you to unblock my account and thank you and your support ... This is my blocked number (+{sesid})"
msg.attach(MIMEText(body, 'plain'))
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(Pengirim, "uwmwfgglbrrcmchw")
text = msg.as_string()
server.sendmail(Pengirim, Penerima, text)
server.quit()
print ("[»] *Succes Mengirim Email By SHIELD.ID*")
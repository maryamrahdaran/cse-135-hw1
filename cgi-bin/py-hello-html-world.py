#import os
#import datetime
#import socket

#print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")
print("<html><head><title>Hello CGI World</title></head>\
<body><h1 align=center>Hello HTML World</h1>\
<hr/>\n")

#current_time = datetime.datetime.now
#hostname = socket.gethostname()
#ip_address = ip_address = socket.gethostbyname(hostname)
print("Hello World<br/>\n")
#print("Your current IP address is: %s<br/>".format(ip_address))
print("</body></html>")

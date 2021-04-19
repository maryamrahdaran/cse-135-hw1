#!/usr/bin/python

import os
import datetime
import socket

print("Cache-Control: no-cache\n")
print("Content-type: text/html\n\n")
print("<html><head><title>Hello CGI World</title></head>\
<body><h1 align=center>Hello HTML World</h1>\
<hr/>\n")

current_time = datetime.datetime.now
hostname = socket.gethostname()
ip_address = ip_address = socket.gethostbyname(hostname)
print("Hello World<br/>\n")
print("This program was generated at: {}\n<br/>".format(current_time))
print("Your current IP address is: %s<br/>".format(ip_address))

print("</body></html>")

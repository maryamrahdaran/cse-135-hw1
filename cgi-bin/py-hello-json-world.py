#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")
print("Content-type: application/json\r\n\r\n")

time = datetime.datetime.now()
hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

print("<html><head><title>Hello CGI World</title></head><body>")
print("<h1 align=center>Hello HTML World</h1><hr/>")
print("Hello World<br/>\n")
print("This program was generated at: {}<br/>".format(time))
print("Your current IP address is: {}<br/>".format(os.environ['REMOTE_ADDR']))
print("</body></html>")

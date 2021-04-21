#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")


print("<html><head><title>Hello CGI World</title></head><body>")
print("<h1 align=center>Environment Variables</h1><hr/>")
print("Environment Variables<br/>\n")
print(os.environ)
print("</body></html>")

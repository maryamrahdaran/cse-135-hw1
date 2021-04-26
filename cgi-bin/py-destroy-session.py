#!/usr/bin/python3
import cgi
import os
import sys

print("Cache-Control: no-cache")
print("Set-Cookie: destroyed")
print("Content-type: text/html\r\n\r\n")


print("<html>")
print("<head><title>Python Session Destroyed</title></head>")
print("<body>")
print("<h1>Python Session Destroyed</h1>")


print("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a>")
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
print("<br />")
print("<a href=\"/py-form.html\">python Form</a>")

print("</body>")
print("</html>")

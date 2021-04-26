#!/usr/bin/python3
import cgi
import os
import sys

print("Cache-Control: no-cache")
print("Set-Cookie: destroyed")
print("Content-type: text/html\r\n\r\n")


printf("<html>")
printf("<head><title>Python Session Destroyed</title></head>")
printf("<body>")
printf("<h1>Python Session Destroyed</h1>")


printf("<a href=\"/cgi-bin/py-sessions-1.py\">Back to Page 1</a>")
printf("<br />")
printf("<a href=\"/cgi-bin/py-sessions-2.py\">Back to Page 2</a>")
printf("<br />")
printf("<a href=\"/py-form.html\">python Form</a>")

print("</body>")
print("</html>")

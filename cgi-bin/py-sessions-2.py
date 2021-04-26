#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")


print("<html>")
print("<head><title>Python Sessions</title></head>\n")
print("<body>")
print("<h1>Python Sessions Page 2</h1>")
print("<table>")

if os.environ.get("HTTP_COOKIE") is not None and os.environ.get("HTTP_COOKIE") != "username=destroyed":
    print("<tr><td>Cookie:</td><td>{}</td></tr>\n".format(os.environ.get("HTTP_COOKIE")))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")

# Links for other pages
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a>")
print("<br />")
print("<a href=\"/py-form.html\">Python Form</a>")
print("<br /><br />")

print("</body>")
print("</html>")

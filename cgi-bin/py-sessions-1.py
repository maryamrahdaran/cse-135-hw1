#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")

# Get Name from Environment
name = sys.stdin.read()

# Set the cookie using a header
if len(name) > 0:
    print("Set-Cookie: {}\n\n".format(name))

    # Body - HTML
print("<html>")
print("<head><title>Python Sessions</title></head>\n")
print("<body>")
print("<h1>Python Sessions Page 1</h1>")
print("<table>")
if os.environ.get("HTTP_COOKIE") != null:
    print("<tr><td>Cookie:</td><td>%s</td></tr>\n",
          os.environ.get("HTTP_COOKIE"))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")
print("</body>")
print("</html>")

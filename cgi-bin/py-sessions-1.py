#!/usr/bin/python3
import cgi
import os
import sys

print("Cache-Control: no-cache")

# Get Name from Environment
name = sys.stdin.read()
if len(name) > 0:
    print("Set-Cookie: {}".format(name))

print("Content-type: text/html\r\n\r\n")


# Set the cookie using a header

# Body - HTML
print("<html>")
print("<head><title>Python Sessions</title></head>\n")
print("<body>")
print("<h1>Python Sessions Page 1</h1>")
print("<table>")
if os.environ.get("HTTP_COOKIE") != null:
    print("<tr><td>Cookie:</td><td>{}</td></tr>\n".format(os.environ.get("HTTP_COOKIE")))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")
print("</body>")
print("</html>")

#!/usr/bin/python3
import cgi
import os
import sys

print("Cache-Control: no-cache")

# Get Name from Environment
name = sys.stdin.read()

# if len(name) > 0:
#print("Set-Cookie: {}".format(name))

print("Content-type: text/html\r\n\r\n")


# Set the cookie using a header

# Body - HTML
print("<html>")
print("<head><title>Python Sessions</title></head>\n")
print("<body>")
print("<h1>Python Sessions Page 1</h1>")
print("<table>")


if os.environ.get("HTTP_COOKIE") is not None and os.environ.get("HTTP_COOKIE") != "destroyed":
    print("<tr><td>Cookie:</td><td>{}</td></tr>\n".format(os.environ.get("HTTP_COOKIE")))
elif len(name) > 0:
    print("Set-Cookie: {}".format(name))
    print("<tr><td>Cookie:</td><td>{}</td></tr>\n".format(name))
else:
    print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")

# Links for other pages
print("<br />")
print("<a href=\"/cgi-bin/py-sessions-2.py\">Session Page 2</a>")
print("<br />")
print("<a href=\"/py-form.html\">Python Form</a>")
print("<br /><br />")

# Destroy Cookie button
print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
print("<button type=\"submit\">Destroy Session</button>")
print("</form>")

print("</body>")
print("</html>")

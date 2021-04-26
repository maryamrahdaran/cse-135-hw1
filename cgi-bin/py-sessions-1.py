#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")

  # Get Name from Environment
  name = sys.stdin.read()

   # Set the cookie using a header
   if len(name) > 0:
        print("Content-type: text/html\n")
        print("Set-Cookie: %s\n\n", name)
    else:
        print("Content-type: text/html\n\n")

    # Body - HTML
    print("<html>")
    print("<head><title>Python Sessions</title></head>\n")
    print("<body>")
    print("<h1>Python Sessions Page 1</h1>")
    print("<table>")

    print("</table>")
    print("</body>")
    print("</html>")

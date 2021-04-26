#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")

  # Get Name from Environment
  name = sys.stdin.read()

  # Body - HTML
print("<html>");
print("<head><title>C Sessions</title></head>\n");
print("<body>");
print("<h1>C Sessions Page 2</h1>");
print("<table>");

if os.environ.get("HTTP_COOKIE") != null:
  print("<tr><td>Cookie:</td><td>%s</td></tr>\n", os.environ.get("HTTP_COOKIE"))
else:
  print("<tr><td>Cookie:</td><td>None</td></tr>\n")

print("</table>")

    # Links for other pages
print("<br />");
print("<a href=\"/cgi-bin/py-sessions-1.py\">Session Page 1</a>");
print("<br />");
print("<a href=\"/c-cgiform.html\">py CGI Form</a>");
print("<br /><br />");


# include <stdio.h>
# include <stdlib.h>
# include <string.h>

  // Links for other pages
  printf("<br />");
  printf("<a href=\"/cgi-bin/c-sessions-1.cgi\">Session Page 1</a>");
  printf("<br />");
  printf("<a href=\"/c-cgiform.html\">C CGI Form</a>");
  printf("<br /><br />");

  // Destroy Cookie button
  printf("<form action=\"/cgi-bin/c-destroy-session.cgi\" method=\"get\">");
  printf("<button type=\"submit\">Destroy Session</button>");
  printf("</form>");

  printf("</body>");
  printf("</html>");
  return 0;
}

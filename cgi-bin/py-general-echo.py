#!/usr/bin/python3
import cgi
import os
import sys

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")


print("<html><head><title>General Request Echo</title></head><body>")
print("<h1 align=center>General Request Echo</h1><hr/>")
print("Environment Variables<br/>\n")
envs = os.environ
print("<b>Protocol: </b> {} <br/>".format(envs['SERVER_PROTOCOL']))
print("<b>Method: </b> {} <br/>".format(envs['REQUEST_METHOD']))
print("<b>Query String: </b> {} <br/>".format(envs['QUERY_STRING']))
data = sys.stdin.read()
print("<b>Message Body: </b> {}<br/>".format(data))
print("</body></html>")

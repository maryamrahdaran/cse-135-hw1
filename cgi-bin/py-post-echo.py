#!/usr/bin/python3
import cgi
import os
import sys

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")


print("<html><head><title>POST Request Echo</title></head><body>")
print("<h1 align=center>POST Request Echo</h1><hr/>")
print("<b>Message Body: </b>")
data = sys.stdin.read()
print("{} </br></br>".format(data))
dlist = data.split('&')
for d in dlist:
    eql = d.split('=')
    print("<li>{} = ".format(eql[0]))
    if(len(eql) > 1):
        print("{}</li>".format(eql[1]))

print("</body></html>")

#!/usr/bin/python3
import cgi
import os

print("Cache-Control: no-cache")
print("Content-type: text/html\r\n\r\n")


print("<html><head><title>GET query string</title></head><body>")
print("<h1 align=center>GET query string</h1><hr/>")
print("query string: <br/>\n")
query = os.environ.get(QUERY_STRING)
#query = "=hhhhh&bbb=ddddd"
qlist = query.split('&')
for q in qlist:
    eql = q.split('=')
    print("{} = ".format(eql[0]))
    if(len(eql) > 1):
        print("{}<br/>".format(eql[1]))

print("</body></html>")

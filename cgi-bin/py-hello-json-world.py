#!/usr/bin/python3
import cgi
import os
import datetime
import socket

print("Cache-Control: no-cache")
print("Content-type: application/json\r\n\r\n")

time = datetime.datetime.now()
hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

j = [
    "message": "hello"
]

#print(" Date & Time: {}".format(time))
#print("Your current IP address is: {}<br/>".format(os.environ['REMOTE_ADDR']))
print(j)

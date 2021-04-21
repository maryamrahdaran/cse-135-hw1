#!/usr/bin/python3
import cgi
import os
import datetime
import json

print("Cache-Control: no-cache")
print("Content-type: application/json\r\n\r\n")

time = datetime.datetime.now()
ip = os.environ['REMOTE_ADDR']
data = {"message": "hello python", "Date & Time": time.strftime(
    "%A, %m/%d/%Y, %H:%M:%S"), "IP address": ip}
j = json.dumps(data)
print(j)

#!/usr/bin/python3
import cgi
import os
import datetime
import simplejson as json

print("Cache-Control: no-cache")
print("Content-type: application/json\r\n\r\n")


data = {"message": "hello"}

#print(" Date & Time: {}".format(time))
#print("Your current IP address is: {}<br/>".format(os.environ['REMOTE_ADDR']))
# print(json.JSONEncoder().encode(data))
print(data)

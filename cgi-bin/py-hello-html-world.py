 #!/usr/bin/python

 import os
 import datetime 
 

  // Print HTML header
  print("Cache-Control: no-cache\n");
  print("Content-type: text/html\n\n");
  print("<html><head><title>Hello CGI World</title></head>\
	<body><h1 align=center>Hello HTML World</h1>\
  	<hr/>\n");

current_time = datetime.datetime.now
 print("Hello World<br/>\n");
 print("This program was generated at: {}\n<br/>").format(urrent_time);
 print("Your current IP address is: %s<br/>").format(os.environ["REMOTE_ADDR"]);
 
 // Print HTML footer
 print("</body></html>");
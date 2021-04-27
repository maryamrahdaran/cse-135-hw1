<?PHP
  header('Cache-Control: no-cache');
?>

<html>
<head>
<title>Php Sessions</title
</head>
<body>

<h1>Php Sessions Page 2</h1>
<table>
<?PHP 
if(isset($_COOKIE['username']) and $_COOKIE['username']!='destroyed'){
  echo "<tr><td>Cookie:</td><td>" .$_COOKIE['username']. "</td></tr>\n";}
else{
  echo("<tr><td>Cookie:</td><td>None</td></tr>\n");}

?>
</table>

<br />
<a href="/cgi-bin/php-sessions-1.php">Session Page 2</a>
<br />
<a href="/php-form.html">Python Form</a>")
<br /><br />
</body>
</html>

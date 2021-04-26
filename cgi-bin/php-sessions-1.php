<?PHP
  header('Cache-Control: no-cache');
?>

<?PHP
$name = file_get_contents('php://input');


if (strlen($name) > 0 and is_null($_SERVER["HTTP_COOKIE"])==false and $_SERVER["HTTP_COOKIE"] == "username=destroyed"){
    setcookie($name);
echo "<h1>errot</h1>";
}
    
if (strlen($name) > 0 and is_null($_SERVER["HTTP_COOKIE"])){
    setcookie($name);
    echo "<h1>errot</h1>";
}

?>

<html>
<head>
<title>Php Sessions</title
</head>
<body>

<h1>Php Sessions Page 1</h1>
<table>

<?PHP
if(is_null($_SERVER["HTTP_COOKIE"])==false and $_SERVER["HTTP_COOKIE"] != "username=destroyed"){
    echo "<tr><td>Cookie:</td><td>" .$_SERVER['HTTP_COOKIE']. "</td></tr>\n";}
else if( strlen(name) > 0){
    echo "<tr><td>Cookie:</td><td>" .$name. "</td></tr>\n";
}
else{
    echo("<tr><td>Cookie:</td><td>None</td></tr>\n");
}
?>

</table>

<br />
<a href="/cgi-bin/php-sessions-2.php">Session Page 2</a>
<br />
<a href="/php-form.html">Python Form</a>")
<br /><br />


<form action="/cgi-bin/php-destroy-session.php" method=\"post\">
<input type="hidden" name="username" value="destroyed" autocomplete="off">
<button type=\"submit\">Destroy Session</button>
</form>
</body>
</html>




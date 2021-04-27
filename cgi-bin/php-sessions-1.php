<?PHP
$name = file_get_contents('php://input');

$qlist = explode('=', $name);
$cookie_name='username';
$cookie_value='';
echo count($qlist);

if (count($qlist) > 1 and isset($_COOKIE[$cookie_name]) and $_COOKIE[$cookie_value]=='destroyed'){
    $cookie_value = $qlist[1];
    setcookie($cookie_name,$cookie_value);
}
    
if (count($qlist) > 1 and !isset($_COOKIE[$cookie_name])){
    $cookie_value = $qlist[1];
    setcookie($cookie_name,cookie_value);
}


  header('Cache-Control: no-cache');

?>

<html>
<head>
<title>Php Sessions</title
</head>
<body>

<h1>Php Sessions Page 1</h1>
<table>

<?PHP
if(isset($_COOKIE[$cookie_name]) and $_COOKIE[$cookie_value]!='destroyed'){
    echo "<tr><td>Cookie:</td><td>" .$_COOKIE[$cookie_value]. "</td></tr>\n";}
else if( count($qlist) > 1){
    echo "<tr><td>Cookie:</td><td>" .$qlist[1]. "</td></tr>\n";
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




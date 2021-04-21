<?PHP
  header('Cache-Control: no-cache');
?>
<html>
<head>
<title>Hello, Php!</title>
</head>
<body>

<p>This page was generated with the Php programming langauge</p>
<?PHP

$date = date('l, Y-m-d H:i:s');
//https://stackoverflow.com/questions/3003145/how-to-get-the-client-ip-address-in-php
$address = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);

echo "<p>Current Time: " .$date. "</p>";
echo "<p>Your IP Address: " .$address. "</p>";
?>



</body>
</html>

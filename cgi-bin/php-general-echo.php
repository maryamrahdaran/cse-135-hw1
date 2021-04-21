<?PHP
  header('Cache-Control: no-cache');
?>

<html>
<head>
  <title>General Request Echo</title>
</head>
<body><h1 align="center">General Request Echo</h1>
<hr>

<?PHP
$envs = $_SERVER;
$data = file_get_contents('php://input');

echo "<b>Protocol: </b>" .$envs['SERVER_PROTOCOL']. "<br/>";
echo "<b>Protocol: </b>" .$envs['REQUEST_METHOD']. "<br/>";
echo "<b>Protocol: </b>" .$envs['QUERY_STRING']. "<br/>";
echo "<b>Message Body: </b>" .$data. "<br/>";
?>

</body>
</html>

<?PHP
  header('Cache-Control: no-cache');
?>

<html>
<head>
  <title>Environment Variables</title>
</head>
<body><h1 align="center">Environment Variables</h1>
<hr>
<?PHP
$request = $_REQUEST;
echo "<p>Current Time: " .$request. "</p>";
?>



</body>
</html>

<?PHP
  header('Cache-Control: no-cache');
?>

<html>
<head>
  <title>GET query string</title>
</head>
<body><h1 align="center">GET query string</h1>
<p>query string:</p>
<hr>
<?PHP
$query = $_SERVER['QUERY_STRING'];
echo .$query. "br/";
$qlist = split('&', $query);

foreach($qlist as $q){
  $eql = split('=', $qlist);
  echo .$eql[0]. "= ";
  if(count($eql) > 1){
    echo .$eql[1]. "</br>;
  } 
}
?>
</body>
</html>
<?PHP
  header('Cache-Control: no-cache');
?>

<html>
<head>
  <title>GPOST Request Echo</title>
</head>
<body><h1 align="center">POST Request Echo</h1>
<b>Message Body:</b></br></br>
<?PHP
$query = fopen('php://stdin','r');
$qlist = explode('&', $query);

foreach($qlist as $q){
  $eql = explode('=', $q);
  echo "<li>" .$eql[0]. "= ";
  if(count($eql) > 1){
    echo "$eql[1] </li></br>";
  }
}
?>
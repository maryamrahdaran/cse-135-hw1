<?PHP
  header('Cache-Control: no-cache');
?>

<html>
<head>
  <title>POST Request Echo</title>
</head>
<body><h1 align="center">POST Request Echo</h1>
<b>Message Body:</b></br></br>
<?PHP
$data = file_get_contents('php://input');
echo "$data <br/>";
$qlist = explode('&', $data);

foreach($qlist as $q){
  $eql = explode('=', $q);
  echo "<li>" .$eql[0]. "= ";
  if(count($eql) > 1){
    echo "$eql[1] </li></br>";
  }
}
?>
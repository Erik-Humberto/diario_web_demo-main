<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="manifest" href="./manifest.json">
    <link rel="stylesheet" href="../estaticos/css/style.css">

    <title>El desinformante</title>
</head>
<body>
   <script> window.location("noticias/"); </script>
<?php
ob_start();
/* Redireccionamiento a la página principal de noticias */
header("location:noticias/");

ob_end_flush();

?>

</body>
</html>
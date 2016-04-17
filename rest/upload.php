<?php

require_once 'db.php';
require_once 'misc.php';

// var_dump($_FILES);
// var_dump($_POST);

$curDate = date("Y/m/d");
$hash_id = hash_file("sha256", $_FILES["image"]["tmp_name"]);

$db = new DBCon();
$db->connect();
$sqlCheck = "SELECT COUNT(*) AS count FROM photos WHERE id = '$hash_id';";

if ($db->countQuery($sqlCheck) == "1") {
  print "MySQL entry already exists, aborting.\n";
  return;
}

$extTmp = explode(".", $_FILES["image"]["name"]);
$extension = $extTmp[count($extTmp) - 1];
$destinationPath = generate_path($curDate, $hash_id);
$fullFilePath = $destinationPath . "/original." . $extension;


if (file_exists($fullFilePath)) {
  print "File exists, aborting!\n";
  return;
}
move_uploaded_file($_FILES["image"]["tmp_name"], $fullFilePath);
generate_imgs($fullFilePath, $destinationPath, $extension);
$sqlInsert = "INSERT INTO photos (id, createdDate, loc) VALUES ('$hash_id', CURDATE(), '4chan, Internet');";

// print "\n" . $sqlInsert . "\n";

$check = $db->insert_query($sqlInsert);
print $check . "\n";


?>
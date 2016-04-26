<?php

require_once 'db.php';
require_once 'misc.php';

function createInsertQuery($hash_id) {
  $albums = $_POST['albums'];
  


  // INSERT INTO photos (id, createdDate, loc) VALUES ('$hash_id', CURDATE(), '4chan, Internet');
}

function handleUploadedFiles() {
  $emptyOrNotEmpty = !empty($_FILES['images']);
  if ($emptyOrNotEmpty) {
    $db = new DBCon();
    $db->connect();
    $x = sizeof($_FILES['images']['name']);
    $curDate = date("Y/m/d");
    print("We have received $x images!\n");
    foreach ($_FILES['images']['name'] as $key => $fileName) {
      $hash_id = hash_file("sha256", $_FILES['images']['tmp_name'][$key]);
      $sqlCheck = "SELECT COUNT(*) AS count FROM photos WHERE id = '$hash_id';"; // Query to check if image already exists
      $extTmp = explode(".", $_FILES['images']['name'][$key]);
      $extension = $extTmp[count($extTmp) - 1];
      $destinationPath = generate_path($curDate, $hash_id);
      $fullFilePath = $destinationPath . "/original." . $extension;
      if ($db->countQuery($sqlCheck) == "1") {                                   // Check if already exists in database
        print "MySQL entry already exists, skipping MySQL entry...\n";           // Abort handling this entry

      } else {
        $sqlInsert = createInsertQuery($hash_id);
        $check = $db->insert_query($sqlInsert);
      }
      if (file_exists($fullFilePath)) {                                          // Check whether the file exists in the filesystem
        print "File exists in filesystem, skipping...\n";                        // already, and skip moving if so.
      } else{
        move_uploaded_file($_FILES['images']['tmp_name'][$key], $fullFilePath);
        generate_imgs($fullFilePath, $destinationPath, $extension);
      }
    }
  }
}

?>
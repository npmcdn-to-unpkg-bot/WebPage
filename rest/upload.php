<?php

require_once 'db.php';
require_once 'misc.php';

function createInsertQuery($hash_id) {
  // $albums = $_POST['albums'];
  // INSERT INTO photos (id, createdDate, loc) VALUES ('$hash_id', CURDATE(), '4chan, Internet');
  $resultQuery = "INSERT INTO photos (id, createdDate, loc) VALUES ('$hash_id', CURDATE(), '4chan, Internet');";
  return $resultQuery;
}

function handleUploadedFiles() {
  $emptyOrNotEmpty = !empty($_FILES['images']);
  $result = array();
  if ($emptyOrNotEmpty) {
    $db = new DBCon();
    $db->connect();
    $curDate = date("Y/m/d");
    foreach ($_FILES['images']['name'] as $key => $fileName) {
      $fileResult = array('id' => $_FILES['images']['name'][$key],               // Preparing a logging variable for any errors
                          'errors' => array());
      $hash_id = hash_file("sha256", $_FILES['images']['tmp_name'][$key]);       // that might occur.
      
      $sqlCheck = "SELECT COUNT(*) AS count FROM photos WHERE id = '$hash_id';"; // Query to check if image already exists
      $extTmp = explode(".", $_FILES['images']['name'][$key]);
      $extension = $extTmp[count($extTmp) - 1];
      $destinationPath = generate_path($curDate, $hash_id);
      $fullFilePath = $destinationPath . "/original." . $extension;

      if ($db->countQuery($sqlCheck) == "1") {                                   // Check if the file already exists in database
        array_push($fileResult['errors'], 'file_exists_in_db');                  // Push an error saying file exists in db
      } else {
        $sqlInsert = createInsertQuery($hash_id);
        $check = $db->insert_query($sqlInsert);
      }

      if (file_exists($fullFilePath)) {                                          // Check whether the file exists in the filesystem
        array_push($fileResult['errors'], 'file_exists_in_fs');                  // Push an error saying file exists in fs
      } else{
        move_uploaded_file($_FILES['images']['tmp_name'][$key], $fullFilePath);
        generate_imgs($fullFilePath, $destinationPath, $extension);
      }
      if (empty($fileResult['errors']))
        $fileResult['status'] = 'ok';
      array_push($result, $fileResult);
    }
    
    if (empty($result))
      return array('status' => 'ok');
    return $result;
  }
}

?>
<?php

require_once 'tags.php';
require_once 'albums.php';
require_once 'photos.php';

$url = "ang2/rest/api.php?type=album&req=all&id=2&x=4&y=1";

// $_POST["type"] = "tag";
// $_POST["req"] = "list";
// $_POST["id"] = "2";
// $_POST["x"] = "1";
// $_POST["y"] = "1";

// This is where we handle ALL requests. We will need to add a security layer on top to make sure
// no bad boys get access and delets all my photos later on. 
switch($_GET['type']) {
  case 'album':
    $albumFetcher = new AlbumSupplier();
    $response = $albumFetcher->publicQuery($_GET["req"], $_GET["x"], $_GET["y"]);
    print $response;
    break;
  default:
    print json_encode(array('type' => array('error', 'undefined_type')));
    break;
}

?>
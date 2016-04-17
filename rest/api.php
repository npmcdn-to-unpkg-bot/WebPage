<?php

require_once 'tags.php';
require_once 'albums.php';
require_once 'photos.php';
// require_once 'misc.php';

$path = "/srv/photos/YYYY/MM/DD/<SHA-HASH>/*";
$url = "ang2/rest/api.php?type=album&req=all&id=2&x=4&y=1";

function utf8ize($d) {
    if (is_array($d)) {
        foreach ($d as $k => $v) {
            $d[$k] = utf8ize($v);
        }
    } else if (is_string ($d)) {
        return utf8_encode($d);
    }
    return $d;
}

// Log our $_POST and $_GET
//$log_msg_post = "This is our POST: ";
//$log_msg_get = "This is our GET: ";
//error_log(print_r($log_msg_get + var_dump($_GET), false));
//error_log(print_r($log_msg_post + var_dump($_POST), false));

// $_POST["type"] = "tag";
// $_POST["req"] = "list";
// $_POST["id"] = "2";
// $_POST["x"] = "1";
// $_POST["y"] = "1";

// This is where we handle ALL requests. We will need to add a security layer on top to make sure
// no bad boys get access and delets all my photos later on.
// print file_get_contents('php://input');

switch($_POST['type']) {
  case 'album':
    switch($_POST['req']) {
      case 'all':
        $albumFetcher = new AlbumSupplier();
        $response = $albumFetcher->publicQuery($_POST["req"], 4, 1);
        //print var_dump($response);
        print json_encode($response);
        break;
      default:
        print json_encode(array('req' => array('error', 'undefined_request')));
        break;
    }
    break;
  default:
    print json_encode(array('type' => array('error', 'undefined_type')));
    break;
}


?>
<?php

define("PHOTOS_BASEDIR", "/srv/photos/");

function prepare_dir($dir) {
  if (!is_dir($dir)) {
    mkdir($dir, 0754, true);
  }
}

function generate_path($date, $hash_id) {
  $datePath = str_replace("-", "/", $date);
  $fullPath = PHOTOS_BASEDIR . $datePath . "/" . $hash_id;
  prepare_dir($fullPath);
  print $fullPath . " has been created!";
}

function generate_imgs($imgPath) {
  return hash("sha256", $imgPath);
}


?>
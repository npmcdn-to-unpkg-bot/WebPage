<?php

define("PHOTOS_BASEDIR", "/srv/photos/");
//define("PHOTOS_BASEDIR", "../assets/photos/");
define("PHOTO_HIGH_W", 1920);
define("PHOTO_HIGH_H", 1080);
define("PHOTO_MED_W", 800);
define("PHOTO_MED_H", 600);
define("PHOTO_LOW_W", 400);
define("PHOTO_LOW_H", 320);
define("PHOTO_THUMB_W", 100);
define("PHOTO_THUMB_H", 100);

function prepare_dir($dir) {
  if (!is_dir($dir)) {
    mkdir($dir, 0754, true);
  }
}

function generate_path($date, $hash_id) {
  $datePath = str_replace("-", "/", $date);
  $fullPath = PHOTOS_BASEDIR . $datePath . "/" . $hash_id;
  prepare_dir($fullPath);
  return $fullPath;
}

function generate_copy($sourcePath, $destPath, $ext, $destHeight, $destWidth, $srcX, $srcY, $destX, $destY) {
  list($origWidth, $origHeight) = getimagesize($sourcePath);
  $source = '';
  switch($ext) {
    case 'jpg':
    case 'jpeg':
    case 'JPG':
    case 'JPEG':
      $source = imagecreatefromjpeg($sourcePath);
      break;
    case 'png':
    case 'PNG':
      $source = imagecreatefrompng($sourcePath);
      break;
    default:
      print "Unsupported file format!\n";
      break;
  }
  
  $dest = imagecreatetruecolor($destWidth, $destHeight);
  imagecopyresized($dest, $source, $destX, $destY, $srcX, $srcY, $destWidth, $destHeight, $origWidth, $origHeight);
  $ret = FALSE;
  switch($ext) {
    case 'jpg':
    case 'jpeg':
    case 'JPG':
    case 'JPEG':
      $ret = imagejpeg($dest, $destPath);
      break;
    case 'png':
    case 'PNG':
      $ret = imagepng($dest, $destPath);
      break;
    default:
      print "Unsupported file format!\n";
      break;
  }
  if (!$ret) {
      print("An error occured\nYour picture was not handled properly.");
  }
  imagedestroy($dest);
  imagedestroy($source);
}

function generate_imgs($imgPath, $folder, $extension) {
  $targetHeights = array(PHOTO_HIGH_H, PHOTO_MED_H, PHOTO_LOW_H, PHOTO_THUMB_H);
  $targetWidths = array(PHOTO_HIGH_W, PHOTO_MED_W, PHOTO_LOW_W, PHOTO_THUMB_W);
  $targetPaths = array($folder . "/high." . $extension, $folder . "/med." . $extension,
                       $folder . "/low." . $extension, $folder . "/thumb." . $extension);
  
  for ($i = 0; $i < 4; $i++) {
    generate_copy($imgPath, $targetPaths[$i], $extension,
                  $targetHeights[$i], $targetWidths[$i],
                  0, 0, 0, 0);
  }
}

  // list($width, $height) = getimagesize($imgPath);
  // $highPath = $folder . "/high" . $extension;
  // $medPath = $folder . "/med" . $extension;
  // $lowPath = $folder . "/low" . $extension;
  // $thumbPath = $folder . "/thumb" . $extension;
  // imagecopyresized(, $imgPath, 0, 0, 0, 0, PHOTO_HIGH_W, PHOTO_HIGH_H, $width, $height);
  // imagecopyresized(, $imgPath, 0, 0, 0, 0, PHOTO_MED_W, PHOTO_MED_H, $width, $height);
  // imagecopyresized(, $imgPath, 0, 0, 0, 0, PHOTO_LOW_W, PHOTO_LOW_H, $width, $height);
  // imagecopyresized(, $imgPath, 0, 0, 0, 0, PHOTO_THUMB_W, PHOTO_THUMB_H, $width, $height);

?>
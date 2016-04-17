<?php

function prepare_dir($dir) {
  if (!is_dir($dir)) {
    mkdir($dir, 644, true);
  }
}

function generate_path($date, $hash_id) {

}

function generate_imgs($path) {
  return hash("sha256", $path);
}

?>
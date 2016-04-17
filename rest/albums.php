<?php

require_once 'db.php';


// x = index in array $fields
// y = index in array $orderOptions
class AlbumSupplier {
  private $db;
  private $storagePath;
  private $fields = array("id", "albumName", "tagList", "descID", "createdDate");
  private $orderOptions = array("ASC", "DESC");

  function __construct() {
    $this->db = new DBCon;
    $this->db->connect();
  }

  function __destruct() {
    $this->db->disconnect();
    $this->db = NULL;
  }

  private function queryAlbum($id) {
    $sql = "SELECT * FROM photos WHERE id = '$id';";
    return $this->db->query($sql);
  }

  private function queryAlbums($orderField, $orderBy) {
    // TODO: Implement the feature to pass which fields we want
    $field = $this->fields[$orderField];
    $direction = $this->orderOptions[$orderBy];
    $sql = "SELECT * FROM photos ORDER BY '$field' '$direction';";
    return $this->db->query($sql);
  }

  public function publicQuery($request, $orderField, $orderBy) {
    switch($request) {
      case 'all':
        return $this->queryAlbums($orderField, $orderBy);
        break;
      default:
        return array('albums' => array('error' => 'undefined_request'));
        break;
    }
  }
}

?>
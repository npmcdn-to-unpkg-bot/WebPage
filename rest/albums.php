<?php

require_once 'db.php';

class AlbumSupplier {
  private $db;
  private $storagePath;

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
    print $this->db->query_json($sql);
  }

  private function queryAlbums($orderBy, $fields) {
    // TODO: Implement the feature to pass which fields we want
    $sql = "SELECT * FROM photos ORDER BY '$orderBy' DESC;";
    print $this->db->query_json($sql);
  }

  public function publicQuery($request) {
    switch($request) {
      case 'all':
        queryAlbums("createdDate");
        break;
      default:
        print json_encode(array('albums' => array('error' => 'undefined_request')));
        break;
    }
  }
}

?>
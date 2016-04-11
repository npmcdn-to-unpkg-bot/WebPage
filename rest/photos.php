<?php

require_once 'db.php';

class Photos {
  private $db;
  private $storagePath;

  function __construct() {
    $this->db = new DBCon;
    $this->db->connect();
    $this->storagePath = "/srv/photos/";
  }

  function __destruct() {
    $this->db->disconnect();
    $this->db = NULL;
  }

  private function queryPhoto($id) {
    $sql = "SELECT * FROM photos WHERE id = '$id';";
    print $this->db->query_json($sql);
  }

  private function queryPhotos($orderBy, $fields) {
    // TODO: Implement the feature to pass which fields we want
    $sql = "SELECT createdDate,id,dirPath,descID,albumListID,location FROM photos ORDER BY '$orderBy' DESC;";
    print $this->db->query_json($sql);
  }

  public function publicQuery($request) {
    switch($request) {
      case 'all':
        queryPhotos("createdDate");
        break;
      default:
        print json_encode(array('products' => array('error' => 'illegal request')));
        break;
    }
  }
}

?>
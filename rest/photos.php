<?php

require_once 'db.php';

class Photos {
  private $db;

  function __construct() {
    $this->db = new DBCon;
    $this->db->connect();
  }

  function __destruct() {
    $this->db->disconnect();
    $this->db = NULL;
  }

  public function queryPhoto($id) {
    $sql = "SELECT * FROM photos WHERE id = '$id';";
    print $this->db->query_json($sql);
  }

  public function queryPhotos($orderBy, $fields) {
    // TODO: Implement the feature to pass which fields we want
    $sql = "SELECT createdDate,id,dirPath,descID,albumListID,location FROM photos ORDER BY '$orderBy' DESC;";
    print $this->db->query_json($sql);
  }

  public function publicQuery($request) {
    switch($request) {
      case 'all':
        queryPhotos("createdDate");
        print $this->db->query_json($sql);
        break;
      case 'schampoo';
        break;
      case 'soap';
        $sql = "SELECT name,type,price,description FROM products p INNER JOIN descriptions d ON d.ID = p.descID WHERE type = '$request'";
        print $this->db->query_json($sql);
        break;
      case 'offers';
        $sql = "SELECT name,type,price FROM offers";
        print $this->db->query_json($sql);
        break;
      default:
        print json_encode(array('products' => array('error' => 'illegal request')));
        break;
    }
  }
}

?>
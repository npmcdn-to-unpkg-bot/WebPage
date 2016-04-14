<?php

require_once 'db.php';

class TagSupplier {
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

  private function queryTag($id) {
    $sql = "SELECT tag FROM tags WHERE id = '$id';";
    print $this->db->query_json($sql);
  }

  private function queryTagList($orderBy, $fields) {
    // TODO: Implement the feature to pass which fields we want
    $sql = "SELECT '$fields' FROM tags WHERE id IN (SELECT) ORDER BY '$orderBy[0]' '$oderBy[1]';";
    print $this->db->query_json($sql);
  }

  public function publicQuery($req) {
    switch($req) {
      case 'all':
        queryTags("id");
        break;
      case 'list':
        queryTagList(["tag", "DESC"], "id,tag");
      default:
        print json_encode(array('tags' => array('error' => 'undefined_request')));
        break;
    }
  }
}

?>
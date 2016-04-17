<?php

  class DBCon {
    private $conn = NULL;
    private $sqlservername = "localhost:3306";
    private $sqlusername = "gallery";
    private $sqlpassword = "snes20kr";
    private $dbname = "gallery";

    function __construct() {

    }

    function __destruct() {

    }

    public function connect() {
      $this->conn = new mysqli(
      $this->sqlservername,
      $this->sqlusername,
      $this->sqlpassword,
      $this->dbname);
      if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
        return TRUE;
      }
      return FALSE;
    }

    public function disconnect() {
      $this->conn->close();
      $this->conn = NULL;
    }

    public function query_json($query) {
      $result = $this->conn->query($query);
      $rows = array();
      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $rows[] = $row;
        }
      }
      return json_encode($rows);
    }

    public function query($query) {
      $result = $this->conn->query($query);
      $rows = array();
      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $rows[] = $row;
        }
      }
      return $rows;
    }

    public function insert_query($query) {
      if ($this->conn->query($query) === TRUE) {
        return TRUE;
      } else {
        return FALSE;
      }
    }

    public function validateLoginSession($username, $password) {
      $myusername = $this->conn->real_escape_string($username);
      $mypassword = $this->conn->real_escape_string($password);
      $query = "SELECT id,status FROM users WHERE username = '" . $myusername . "' AND password = '" . $mypassword . "'";
      $result = $this->conn->query($query);
      $count = $result->num_rows;
      $row = $result->fetch_assoc();
      $status = $row['status'];

      // TODO fix this
      $status = 1;
      if ($count == 1 && $status == 1) {
        $_SESSION['id'] = $row['id'];
        return TRUE;
      }
      return FALSE;
    }
  }


?>
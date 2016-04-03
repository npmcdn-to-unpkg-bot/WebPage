USE gallery;

CREATE TABLE descriptions (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       description VARCHAR(255)
);

CREATE TABLE albumList (
       listID INT NOT NULL,
       photoID INT NOT NULL,
       CONSTRAINT `uKey` PRIMARY KEY (listID, photoID)
);


CREATE TABLE albums (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(64) NOT NULL,
       descID INT,
       createdDate DATE NOT NULL,
       CONSTRAINT `albums_desc_foreign_key`
       		  FOREIGN KEY (descID) REFERENCES descriptions (id)
);


CREATE TABLE photos (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       descID INT DEFAULT 0,
       albumListID INT,
       createdDate DATE NOT NULL,
       CONSTRAINT `photos_desc_foreign_key`
		  FOREIGN KEY (descID) REFERENCES descriptions (id)
);

DELIMITER $$
CREATE TRIGGER `default_date` BEFORE INSERT ON (albums OR photos) FOR EACH ROW
       if ( isnull(new.createdDate) ) then
       	  set new.createdDate = CURDATE();
       end if;
$$
delimiter ;

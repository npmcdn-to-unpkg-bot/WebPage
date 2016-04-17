USE gallery;

CREATE TABLE descriptions (
       id INT NOT NULL PRIMARY KEY,
       description VARCHAR(255)
);

CREATE TABLE albumList (
       listID INT NOT NULL,
       photoID INT NOT NULL,
       CONSTRAINT `albumlist_key` PRIMARY KEY (listID, photoID)
);


CREATE TABLE albums (
       id INT NOT NULL PRIMARY KEY,
       albumName VARCHAR(64) NOT NULL,
       tagList INT,
       descID INT,
       createdDate DATE NOT NULL,
       CONSTRAINT `albums_desc_foreign_key`
       		  FOREIGN KEY (descID) REFERENCES descriptions (id)
);

CREATE TABLE photos (
       id VARCHAR(64) PRIMARY KEY,
       descID INT DEFAULT 0,
       albumListID INT,
       tagListID INT,
       createdDate DATE NOT NULL,
       loc VARCHAR(255) NOT NULL,
       CONSTRAINT `photos_desc_foreign_key`
		  FOREIGN KEY (descID) REFERENCES descriptions (id)
);

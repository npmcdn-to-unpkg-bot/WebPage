USE gallery;

CREATE TABLE descriptions (
       id INT NOT NULL PRIMARY KEY,
       description VARCHAR(255)
);


CREATE TABLE albums (
       id INT AUTO_INCREMENT PRIMARY KEY,
       albumName VARCHAR(64) NOT NULL,
       thumbnail VARCHAR(64),
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
       hasRaw BOOLEAN DEFAULT FALSE,
       CONSTRAINT `photos_desc_foreign_key`
		  FOREIGN KEY (descID) REFERENCES descriptions (id)
);

CREATE TABLE albumList (
       albumID INT NOT NULL,
       photoID VARCHAR(64) NOT NULL,
       CONSTRAINT `albumlist_key` PRIMARY KEY (albumID, photoID),
       CONSTRAINT `albumlist_album_fkey` FOREIGN KEY (albumID) REFERENCES albums (id) ON DELETE CASCADE,
       CONSTRAINT `albumlist_photo_fkey` FOREIGN KEY (photoID) REFERENCES photos (id) ON DELETE CASCADE
);

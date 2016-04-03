USE gallery;

CREATE TABLE descriptions (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       description VARCHAR(255)
);

CREATE TABLE albums (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(64) NOT NULL,
       descID INT,
       createdDate date DEFAULT GETDATE(),
       FOREIGN KEY (descID) REFERENCES descriptions(id)
);

CREATE TABLE albumList (
       listID INT NOT NULL,
       photoID INT NOT NULL,
       CONSTRAINT uKey PRIMARY KEY (listID, photoID)
);

CREATE TABLE photos (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       descID INT DEFAULT 0,
       albumListID INT,
       createdDate date DEFAULT GETDATE(),
       FOREIGN KEY (descID) REFERENCES descriptions(id),
);

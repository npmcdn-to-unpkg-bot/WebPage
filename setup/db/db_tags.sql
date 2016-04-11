USE gallery;

CREATE TABLE tagList (
       id INT NOT NULL,
       tagID INT NOT NULL,
       CONSTRAINT `taglist_key` PRIMARY KEY (id, tagID)
);

CREATE TABLE tags (
       id INT NOT NULL PRIMARY KEY,
       tag VARCHAR(64) NOT NULL
);

INSERT INTO tags (id, tag) VALUES (0, 'album');
INSERT INTO tags (id, tag) VALUES (1, 'photo');
INSERT INTO tags (id, tag) VALUES (2, 'albums');
INSERT INTO tags (id, tag) VALUES (3, 'photos');

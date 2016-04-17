USE gallery;

INSERT INTO descriptions (id, description) VALUES (0, '');

INSERT INTO descriptions (id, description) VALUES (1, 'Arvike is so nice!');
INSERT INTO albums (id, albumName, descID, createdDate)
       	    VALUES (1, 'Arvika-festivalen', 1, CURDATE());

INSERT INTO descriptions (id, description) VALUES (2, 'Jävla flytande körvar!');
INSERT INTO albums (id, albumName, descID, createdDate)
       	    VALUES (2, 'Jävla falubor', 2, CURDATE());

INSERT INTO descriptions (id, description) VALUES (3, 'Man gamar och rockar!');
INSERT INTO albums (id, albumName, descID, createdDate)
       	    VALUES (3, 'Gamfestivalen', 3, CURDATE());

INSERT INTO descriptions (id, description) VALUES (4, 'De slänger tydligen korv i ån!');
INSERT INTO albums (id, albumName, descID, createdDate)
       	    VALUES (4, 'Falukorvens dag', 4, CURDATE());

INSERT INTO descriptions (id, description) VALUES (5, 'Här får man fan ligga!');
INSERT INTO albums (id, albumName, descID, createdDate)
       	    VALUES (5, 'Swiden-Rock-festivalen', 5, CURDATE());

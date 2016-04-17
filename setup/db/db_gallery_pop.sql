USE gallery;

INSERT INTO descriptions (id, description) VALUES (0, '');

INSERT INTO descriptions (id, description) VALUES (1, 'More descriptions about this album');
INSERT INTO albums (id, albumName, descID, createdDate)
       	    VALUES (1, 'Arvika-festivalen', 1, CURDATE());

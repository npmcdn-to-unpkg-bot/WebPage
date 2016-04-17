# when in mysql, just nu 'source setup.sql'
SOURCE db_drop.sql;

SOURCE db_create.sql;
use gallery;
SOURCE db_gallery.sql;
SOURCE db_gallery_pop.sql;
SHOW TABLES;
SELECT * FROM albums;
SELECT * FROM descriptions;
SELECT * FROM photos;
SELECT * FROM albumList;

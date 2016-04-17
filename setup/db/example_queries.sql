-- Info: Get all fields of the table tags where the id of tagList matches 0.
-- In other words, get a list of tags with id = 0.
SELECT * FROM tags WHERE id IN (SELECT tagID FROM tagList WHERE `id` = 0) ORDER BY tag DESC;


-- Info: Get all albums with their name, creation date and descriptions. Data is pulled from
-- two tables; albums and descriptions. Ordered by descending date.
SELECT A.albumName,A.createdDate,D.description FROM albums AS A, descriptions AS D WHERE A.descID = D.id ORDER BY A.createdDate DESC;

-- Info: Get all fields of the table tags where the id of tagList matches 0.
-- In other words, get a list of tags with id = 0.
SELECT * FROM tags WHERE id IN (SELECT tagID FROM tagList WHERE `id` = 0) ORDER BY tag DESC;


-- Info: Get all albums and their related data.
-- SELECT * FROM albums 

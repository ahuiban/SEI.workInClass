-- Find all airports in New York
SELECT * FROM airports WHERE city='New York';

-- Find all airports in Paris
SELECT * FROM airports WHERE city='Paris';

-- Find out how many routes originate from New York
SELECT COUNT(*) FROM routes JOIN airports ON routes.origin_id = airports.id WHERE city='New York';
-- or 
select count(*) from routes where origin_code in (select iata_faa from airports where city ='New York');

-- Find out how many routes have destinations in Paris
SELECT COUNT(*) FROM routes JOIN airports ON routes.dest_id = airports.id WHERE city='Paris';

-- Try to decide which statements are necessary and find how to combine them to 
-- find out how many routes originate from New York and land in Paris!
-- ¯\_(ツ)_/¯ - SUPER BONUS CHALLENGE: see if you can figure it out
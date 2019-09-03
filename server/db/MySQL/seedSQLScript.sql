use airbnb
load data local infile './server/db/records.csv'
into table checkout
fields terminated by ','
lines terminated by '\n'
ignore 1 rows
(checkin, checkout)
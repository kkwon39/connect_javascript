
CREATE TABLE  IF NOT EXISTS  fleet (
  id serial PRIMARY KEY,
  fleet_name VARCHAR(50)
);

CREATE TABLE  IF NOT EXISTS ship (
  id serial PRIMARY KEY,
  fleet_id int NOT NULL REFERENCES fleet(id),
  date_built VARCHAR(50),
  name VARCHAR(50)
);

CREATE TABLE  IF NOT EXISTS  sailor (
  id serial PRIMARY KEY,
  ship_id int REFERENCES ship(id),
  name VARCHAR(50),
  dob DATE
);

CREATE TABLE  IF NOT EXISTS  rank (
  id serial PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE  IF NOT EXISTS  assignment (
  id serial PRIMARY KEY,
  sailor_id int REFERENCES sailor(id),
  rank_id int REFERENCES rank(id),
  ship_id int REFERENCES ship(id),
  name VARCHAR(50),
  start_date DATE,
  end_date DATE
);




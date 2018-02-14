DROP DATABASE IF EXISTS insta;
CREATE DATABASE insta;

\c insta;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL, 
  full_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL, 
  user_description VARCHAR, 
  user_followers VARCHAR[], 
  user_following VARCHAR[]
);

/* katherine.reyes, password: 123456 */

INSERT INTO users (username, password_digest, full_name, email, user_description, user_followers, user_following)
  VALUES ('katherine.reyes', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Katherine Reyes',
  'katherine@gmail.com', 'Espresso.','{"john", "steven"}', '{"brian"}'),
 ('Mario3', '$2a$10$Luwu18FIx.rSW24X6DKa.OU/t3BKIKIQtBEiI8mo2veV7mlVnGNhS', 'Anna Thornton',
  'anna@gmail.com', 'Coffee drinker and starter upper','{"steven"}', '{"brian"}');


CREATE TABLE images (
  ID SERIAL PRIMARY KEY,
  img_URL VARCHAR, 
  img_likes VARCHAR[],
  user_ID SERIAL REFERENCES users
);

INSERT INTO images (img_URL, img_likes, user_ID)
  VALUES ('https://images.pexels.com/photos/90294/pexels-photo-90294.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('https://images.pexels.com/photos/21809/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('https://images.pexels.com/photos/21809/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('https://images.pexels.com/photos/442544/pexels-photo-442544.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('https://images.pexels.com/photos/102726/pexels-photo-102726.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1),
  ('https://images.pexels.com/photos/845242/pexels-photo-845242.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('https://images.pexels.com/photos/850453/pexels-photo-850453.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('https://images.pexels.com/photos/848594/pexels-photo-848594.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb', '{"john", "steven", "luiza"}', 1), 
  ('http:dsghjdsg.jpg', '{"john", "steven", "luiza"}', 2);


CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  comment VARCHAR, 
  username VARCHAR,
  comment_timestamp timestamp not null default CURRENT_TIMESTAMP,
  img_ID SERIAL REFERENCES images
);

INSERT INTO comments (comment, username, img_ID)
  VALUES ('amazing', 'luiza', 2),
  ('great', 'mario3', 1), 
  ('love it', 'mario4', 1), 
  ('fire', 'mario5', 1);
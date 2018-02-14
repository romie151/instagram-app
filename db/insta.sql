DROP DATABASE IF EXISTS insta;
CREATE DATABASE insta;

\c insta;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR, 
  full_name VARCHAR,
  email VARCHAR, 
  user_description VARCHAR, 
  user_followers VARCHAR[], 
  user_following VARCHAR[]
);

/* tyler, password: 123456 */

INSERT INTO users (username, password_digest, full_name, email, user_description, user_followers, user_following)
  VALUES ('Tyler21', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'Tyler Wentworth',
  'tyler@gmail.com', 'Animal lover who hikes all the time','{"john", "steven"}', '{"brian"}');

  INSERT INTO users (username, password_digest, full_name, email, user_description, user_followers, user_following)
  VALUES ('Mario3', '$2a$10$Luwu18FIx.rSW24X6DKa.OU/t3BKIKIQtBEiI8mo2veV7mlVnGNhS', 'Anna Thornton',
  'anna@gmail.com', 'Coffee drinker and starter upper','{"steven"}', '{"brian"}');


CREATE TABLE images (
  ID SERIAL PRIMARY KEY,
  img_URL VARCHAR, 
  img_likes VARCHAR[],
  user_ID SERIAL REFERENCES users
);

INSERT INTO images (img_URL, img_likes, user_ID)
  VALUES ('http:hsjghsdg.jpg', '{"john", "steven", "luiza"}', 1);

INSERT INTO images (img_URL, img_likes, user_ID)
  VALUES ('http:dsghjdsg.jpg', '{"john", "steven", "luiza"}', 2);


CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  comment VARCHAR, 
  username VARCHAR,
  comment_timestamp timestamp not null default CURRENT_TIMESTAMP,
  img_ID SERIAL REFERENCES images
);

INSERT INTO comments (comment, username, img_ID)
  VALUES ('amazing', 'luiza', 1);
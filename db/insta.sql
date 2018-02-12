DROP DATABASE IF EXISTS insta;
CREATE DATABASE insta;

\c insta;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR, 
  email VARCHAR, 
  user_followers VARCHAR[], 
  user_following VARCHAR[]
);

/* tyler, password: 123456 */

INSERT INTO users (username, password_digest, email, user_followers, user_following)
  VALUES ('Tyler21', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 
  'luiza@gmail.com', '{"john", "steven"}', '{"brian"}');


CREATE TABLE images (
  ID SERIAL PRIMARY KEY,
  img_URL VARCHAR, 
  img_likes VARCHAR[],
  user_ID SERIAL REFERENCES users
);

INSERT INTO images (img_URL, img_likes, user_ID)
  VALUES ('http:hsjghsdg.jpg', '{"john", "steven", "luiza"}', 1);
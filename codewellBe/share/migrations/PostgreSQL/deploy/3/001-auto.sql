--
-- Created by SQL::Translator::Producer::PostgreSQL
-- Created on Tue May  5 23:46:45 2020
--
;
--
-- Table: users
--
CREATE TABLE "users" (
  "id" text NOT NULL,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "password" text NOT NULL,
  "mail" text NOT NULL,
  PRIMARY KEY ("id")
);

;

--
-- Created by SQL::Translator::Producer::PostgreSQL
-- Created on Wed May  6 00:24:57 2020
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
  PRIMARY KEY ("id"),
  CONSTRAINT "users_mail" UNIQUE ("mail")
);

;

--
-- Created by SQL::Translator::Producer::PostgreSQL
-- Created on Mon May  4 15:08:04 2020
--
;
--
-- Table: dbix_class_deploymenthandler_versions
--
CREATE TABLE "dbix_class_deploymenthandler_versions" (
  "id" serial NOT NULL,
  "version" character varying(50) NOT NULL,
  "ddl" text,
  "upgrade_sql" text,
  PRIMARY KEY ("id"),
  CONSTRAINT "dbix_class_deploymenthandler_versions_version" UNIQUE ("version")
);

;

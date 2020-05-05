-- Convert schema '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/2/001-auto.yml' to '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/3/001-auto.yml':;

;
BEGIN;

;
ALTER TABLE "users" ADD COLUMN "first_name" text NOT NULL;

;
ALTER TABLE "users" ADD COLUMN "last_name" text NOT NULL;

;
ALTER TABLE "users" ADD COLUMN "password" text NOT NULL;

;

COMMIT;


-- Convert schema '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/3/001-auto.yml' to '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/4/001-auto.yml':;

;
BEGIN;

;
ALTER TABLE "users" ADD CONSTRAINT "users_mail" UNIQUE ("mail");

;

COMMIT;


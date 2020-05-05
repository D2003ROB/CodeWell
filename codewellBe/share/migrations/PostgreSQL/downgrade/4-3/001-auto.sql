-- Convert schema '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/4/001-auto.yml' to '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/3/001-auto.yml':;

;
BEGIN;

;
ALTER TABLE "users" DROP CONSTRAINT "users_mail";

;

COMMIT;


-- Convert schema '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/3/001-auto.yml' to '/Users/petru/Projects/wellcode/CodeWell/codewellBe/share/migrations/_source/deploy/2/001-auto.yml':;

;
BEGIN;

;
ALTER TABLE "users" DROP COLUMN "first_name";

;
ALTER TABLE "users" DROP COLUMN "last_name";

;
ALTER TABLE "users" DROP COLUMN "password";

;

COMMIT;


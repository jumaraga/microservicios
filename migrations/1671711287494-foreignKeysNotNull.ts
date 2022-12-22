import { MigrationInterface, QueryRunner } from "typeorm";

export class foreignKeysNotNull1671711287494 implements MigrationInterface {
    name = 'foreignKeysNotNull1671711287494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_373ead146f110f04dad60848154"`);
        await queryRunner.query(`ALTER TABLE "auth" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_follow" DROP CONSTRAINT "FK_c587f51135695f7bffa3ac9e305"`);
        await queryRunner.query(`ALTER TABLE "users_follow" DROP CONSTRAINT "FK_07554a885ddd8af25cbb6e1c644"`);
        await queryRunner.query(`ALTER TABLE "users_follow" ALTER COLUMN "user_from" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_follow" ALTER COLUMN "user_to" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_373ead146f110f04dad60848154" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_follow" ADD CONSTRAINT "FK_c587f51135695f7bffa3ac9e305" FOREIGN KEY ("user_from") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_follow" ADD CONSTRAINT "FK_07554a885ddd8af25cbb6e1c644" FOREIGN KEY ("user_to") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_follow" DROP CONSTRAINT "FK_07554a885ddd8af25cbb6e1c644"`);
        await queryRunner.query(`ALTER TABLE "users_follow" DROP CONSTRAINT "FK_c587f51135695f7bffa3ac9e305"`);
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_373ead146f110f04dad60848154"`);
        await queryRunner.query(`ALTER TABLE "users_follow" ALTER COLUMN "user_to" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_follow" ALTER COLUMN "user_from" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_follow" ADD CONSTRAINT "FK_07554a885ddd8af25cbb6e1c644" FOREIGN KEY ("user_to") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_follow" ADD CONSTRAINT "FK_c587f51135695f7bffa3ac9e305" FOREIGN KEY ("user_from") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_373ead146f110f04dad60848154" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

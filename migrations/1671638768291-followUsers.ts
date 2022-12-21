import { MigrationInterface, QueryRunner } from "typeorm";

export class followUsers1671638768291 implements MigrationInterface {
    name = 'followUsers1671638768291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_follow" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "user_from" integer, "user_to" integer, CONSTRAINT "PK_e5372cdb5aba2a6deacc419cfbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_follow" ADD CONSTRAINT "FK_c587f51135695f7bffa3ac9e305" FOREIGN KEY ("user_from") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_follow" ADD CONSTRAINT "FK_07554a885ddd8af25cbb6e1c644" FOREIGN KEY ("user_to") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_follow" DROP CONSTRAINT "FK_07554a885ddd8af25cbb6e1c644"`);
        await queryRunner.query(`ALTER TABLE "users_follow" DROP CONSTRAINT "FK_c587f51135695f7bffa3ac9e305"`);
        await queryRunner.query(`DROP TABLE "users_follow"`);
    }

}

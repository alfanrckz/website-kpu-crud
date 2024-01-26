import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1705132331973 implements MigrationInterface {
    name = 'MyMigration1705132331973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "address" character varying NOT NULL, "sex" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "blogs" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "author" character varying NOT NULL, "image" character varying NOT NULL, "dateCreated" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "PK_e113335f11c926da929a625f118" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partai" ("id" SERIAL NOT NULL, "partaiNumber" integer NOT NULL, "name" character varying NOT NULL, "leader" character varying NOT NULL, "image" character varying NOT NULL, "visionMission" character varying NOT NULL, "address" character varying NOT NULL, "paslonId" integer, CONSTRAINT "PK_9c5c70fa29884e15f3b88a1b40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "sex" character varying NOT NULL, "paslonName" character varying NOT NULL, "userId" integer, "paslonId" integer, CONSTRAINT "REL_18fe28e13757e8e149dfd8f7fa" UNIQUE ("userId"), CONSTRAINT "PK_a58842a42a7c48bc3efebb0a305" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paslon" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "paslonNumber" integer NOT NULL, "visionMission" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_f3367efce21ffeeff1e3f58244d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "blogs" ADD CONSTRAINT "FK_50205032574e0b039d655f6cfd3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "partai" ADD CONSTRAINT "FK_6e81e0a136eec2e38810173f217" FOREIGN KEY ("paslonId") REFERENCES "paslon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_18fe28e13757e8e149dfd8f7faa" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voters" ADD CONSTRAINT "FK_9339a9999327e10d962c491d2d1" FOREIGN KEY ("paslonId") REFERENCES "paslon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_9339a9999327e10d962c491d2d1"`);
        await queryRunner.query(`ALTER TABLE "voters" DROP CONSTRAINT "FK_18fe28e13757e8e149dfd8f7faa"`);
        await queryRunner.query(`ALTER TABLE "partai" DROP CONSTRAINT "FK_6e81e0a136eec2e38810173f217"`);
        await queryRunner.query(`ALTER TABLE "blogs" DROP CONSTRAINT "FK_50205032574e0b039d655f6cfd3"`);
        await queryRunner.query(`DROP TABLE "paslon"`);
        await queryRunner.query(`DROP TABLE "voters"`);
        await queryRunner.query(`DROP TABLE "partai"`);
        await queryRunner.query(`DROP TABLE "blogs"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

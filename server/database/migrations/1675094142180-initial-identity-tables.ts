import { MigrationInterface, QueryRunner } from "typeorm";

export class initialIdentityTables1675094142180 implements MigrationInterface {
    name = 'initialIdentityTables1675094142180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "claim" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "type" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_466b305cc2e591047fa1ce58f81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "street" character varying NOT NULL, "street2" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "zip" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "address_id" uuid NOT NULL, "app_user_id" uuid NOT NULL, CONSTRAINT "REL_fb70f0dc1dda3ae5e1b7fb0c93" UNIQUE ("address_id"), CONSTRAINT "REL_ca59a42ecd57999dd812f134ab" UNIQUE ("app_user_id"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "refresh_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "refresh_token" character varying NOT NULL, "is_blacklisted" boolean NOT NULL DEFAULT false, "app_user_id" uuid NOT NULL, CONSTRAINT "PK_b575dd3c21fb0831013c909e7fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "name" character varying NOT NULL, "tenant_id" uuid NOT NULL, CONSTRAINT "REL_c7cc4dfd56eae9c297242dcb15" UNIQUE ("tenant_id"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "identifier" uuid NOT NULL DEFAULT uuid_generate_v4(), "domain" character varying NOT NULL, "connection_string" character varying NOT NULL, "is_locked_out" boolean NOT NULL, CONSTRAINT "PK_da8c6efd67bb301e810e56ac139" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_82b3bfa949c71a873d4818874d" ON "tenant" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "app_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "password_reset_token" uuid NOT NULL DEFAULT uuid_generate_v4(), "password_reset_token_expiration" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "email" character varying NOT NULL, "is_email_confirmed" boolean NOT NULL DEFAULT false, "is_locked_out" boolean NOT NULL DEFAULT false, "tenant_id" uuid NOT NULL, CONSTRAINT "UQ_c480e576dd71729addbc2d51b67" UNIQUE ("username"), CONSTRAINT "UQ_3fa909d0e37c531ebc237703391" UNIQUE ("email"), CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c480e576dd71729addbc2d51b6" ON "app_user" ("username") `);
        await queryRunner.query(`CREATE TABLE "device_code" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT NULL, "token" character varying NOT NULL, CONSTRAINT "UQ_f9958a4febb3773972b11898ebd" UNIQUE ("token"), CONSTRAINT "PK_3a62a161670ed87b6720f511f8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f9958a4febb3773972b11898eb" ON "device_code" ("token") `);
        await queryRunner.query(`CREATE TABLE "role_claim" ("role_id" uuid NOT NULL, "claim_id" uuid NOT NULL, CONSTRAINT "PK_124de9fd2a49b6a181fdb3a1499" PRIMARY KEY ("role_id", "claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_36443e45eaaf4ead6206702d74" ON "role_claim" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8f3a18392322c8151466152ff3" ON "role_claim" ("claim_id") `);
        await queryRunner.query(`CREATE TABLE "app_user_role" ("app_user_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_2704f227f03aa4e9baf1823e656" PRIMARY KEY ("app_user_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0099ab8422881c97a065df9d02" ON "app_user_role" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1f4225686754587fe55c288ddf" ON "app_user_role" ("role_id") `);
        await queryRunner.query(`CREATE TABLE "app_user_claim" ("app_user_id" uuid NOT NULL, "claim_id" uuid NOT NULL, CONSTRAINT "PK_2f1d354aafddb06744cb91178dc" PRIMARY KEY ("app_user_id", "claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf676fb33203d498a09e7fadd7" ON "app_user_claim" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b5738196c64753cc46880a054e" ON "app_user_claim" ("claim_id") `);
        await queryRunner.query(`CREATE TABLE "app_user_device_code" ("app_user_id" uuid NOT NULL, "device_code_id" uuid NOT NULL, CONSTRAINT "PK_3c0fff2f240084ed624df2e1c19" PRIMARY KEY ("app_user_id", "device_code_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e566bfcfd39966a07a904814c2" ON "app_user_device_code" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_fbd02729f4956440425a7a96dd" ON "app_user_device_code" ("device_code_id") `);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_fb70f0dc1dda3ae5e1b7fb0c93e" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_ca59a42ecd57999dd812f134abb" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "refresh_token" ADD CONSTRAINT "FK_5584392b8b0581e705bc12004de" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_c7cc4dfd56eae9c297242dcb153" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_29ed668eb2c458a129aa6bbd31a" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_36443e45eaaf4ead6206702d74b" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_claim" ADD CONSTRAINT "FK_8f3a18392322c8151466152ff3f" FOREIGN KEY ("claim_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_role" ADD CONSTRAINT "FK_0099ab8422881c97a065df9d02c" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_role" ADD CONSTRAINT "FK_1f4225686754587fe55c288ddf1" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" ADD CONSTRAINT "FK_bf676fb33203d498a09e7fadd76" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" ADD CONSTRAINT "FK_b5738196c64753cc46880a054e0" FOREIGN KEY ("claim_id") REFERENCES "claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" ADD CONSTRAINT "FK_e566bfcfd39966a07a904814c21" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" ADD CONSTRAINT "FK_fbd02729f4956440425a7a96ddc" FOREIGN KEY ("device_code_id") REFERENCES "device_code"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user_device_code" DROP CONSTRAINT "FK_fbd02729f4956440425a7a96ddc"`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" DROP CONSTRAINT "FK_e566bfcfd39966a07a904814c21"`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" DROP CONSTRAINT "FK_b5738196c64753cc46880a054e0"`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" DROP CONSTRAINT "FK_bf676fb33203d498a09e7fadd76"`);
        await queryRunner.query(`ALTER TABLE "app_user_role" DROP CONSTRAINT "FK_1f4225686754587fe55c288ddf1"`);
        await queryRunner.query(`ALTER TABLE "app_user_role" DROP CONSTRAINT "FK_0099ab8422881c97a065df9d02c"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_8f3a18392322c8151466152ff3f"`);
        await queryRunner.query(`ALTER TABLE "role_claim" DROP CONSTRAINT "FK_36443e45eaaf4ead6206702d74b"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_29ed668eb2c458a129aa6bbd31a"`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_c7cc4dfd56eae9c297242dcb153"`);
        await queryRunner.query(`ALTER TABLE "refresh_token" DROP CONSTRAINT "FK_5584392b8b0581e705bc12004de"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_ca59a42ecd57999dd812f134abb"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_fb70f0dc1dda3ae5e1b7fb0c93e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fbd02729f4956440425a7a96dd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e566bfcfd39966a07a904814c2"`);
        await queryRunner.query(`DROP TABLE "app_user_device_code"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b5738196c64753cc46880a054e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf676fb33203d498a09e7fadd7"`);
        await queryRunner.query(`DROP TABLE "app_user_claim"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1f4225686754587fe55c288ddf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0099ab8422881c97a065df9d02"`);
        await queryRunner.query(`DROP TABLE "app_user_role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8f3a18392322c8151466152ff3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_36443e45eaaf4ead6206702d74"`);
        await queryRunner.query(`DROP TABLE "role_claim"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9958a4febb3773972b11898eb"`);
        await queryRunner.query(`DROP TABLE "device_code"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c480e576dd71729addbc2d51b6"`);
        await queryRunner.query(`DROP TABLE "app_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_82b3bfa949c71a873d4818874d"`);
        await queryRunner.query(`DROP TABLE "tenant"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "refresh_token"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "claim"`);
    }

}

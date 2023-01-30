import { MigrationInterface, QueryRunner } from "typeorm"
import { Role, RoleTypes } from '../../libs/common/src';

export class seedsRoleTable1675094157260 implements MigrationInterface {
    name = 'seedsRoleTable1675094157260';

    private _roles: Partial<Role>[] = [
        {
            deletedAt: null,
            name: RoleTypes.ROOT,
            claims: null
        },
        {
            deletedAt: null,
            name: RoleTypes.ADMIN,
            claims: null
        },
        {
            deletedAt: null,
            name: RoleTypes.USER,
            claims: null
        }
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            this._roles.map(role => 
                queryRunner.manager.create<Role>(Role, role))
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM role`);
    }
}

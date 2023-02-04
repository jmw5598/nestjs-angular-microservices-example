import { IRepository, Role } from '@vsp/common';

export const ROLES_REPOSITORY_TOKEN: string = 'ROLES_REPOSITORY_TOKEN';

export interface IRolesRepository extends IRepository<Role, string> { }

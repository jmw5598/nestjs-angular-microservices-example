import { Client, IRepository } from '@vsp/common';

export const CLIENTS_REPOSITORY_TOKEN: string = 'CLIENTS_REPOSITORY_TOKEN';

export interface IClientsRepository extends IRepository<Client, string> { }

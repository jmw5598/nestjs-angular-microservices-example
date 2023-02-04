import { IRepository, RefreshToken } from '@vsp/common';

export const REFRESH_TOKENS_REPOSITORY_TOKEN: string = 'REFRESH_TOKENS_REPOSITORY_TOKEN';

export interface IRefreshTokensRepository extends IRepository<RefreshToken, string> { }


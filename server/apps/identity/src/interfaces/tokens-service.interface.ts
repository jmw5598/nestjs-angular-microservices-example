import { TokenPair, UserDetails } from '@vsp/common';

export const TOKENS_SERVICE_TOKEN: string = 'TOKENS_SERVICE_TOKEN';

export interface ITokensService {
  signToken(user: UserDetails): Promise<TokenPair>,
  refreshToken(tokens: TokenPair): Promise<TokenPair>
}

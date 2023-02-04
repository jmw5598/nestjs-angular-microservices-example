import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RefreshToken } from '@vsp/common';
import { BaseRepository } from '@vsp/common/repositories/base.repository';
import { Repository } from 'typeorm';
import { IRefreshTokensRepository } from '../interfaces/refresh-token-repository.interface';

@Injectable()
export class RefreshTokensRepository 
    extends BaseRepository<RefreshToken, string> 
    implements IRefreshTokensRepository {
  constructor(
    @InjectRepository(RefreshToken)
    protected readonly repository: Repository<RefreshToken>
  ) {
    super(repository);
  }
}

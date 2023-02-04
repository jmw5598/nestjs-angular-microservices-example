import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository, Role } from '@vsp/common';
import { Repository } from 'typeorm';
import { IRolesRepository } from '../interfaces/roles-repository.interface';

@Injectable()
export class RolesRepository extends BaseRepository<Role, string> implements IRolesRepository {
  constructor(
    @InjectRepository(Role)
    protected readonly repository: Repository<Role>
  ) {
    super(repository);
  }
}

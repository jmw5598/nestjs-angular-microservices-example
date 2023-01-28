import { Entity, Column, ManyToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class Role extends BaseEntity {
  @Column({ unique: true })
  public name: string

  @ManyToMany(type => User, user => user.roles)
  public users: User[];
}

import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { RefreshToken } from './refresh-token.entity';
import { Role } from './role.entity';

@Entity({ name: 'app_user' })
export class User extends BaseEntity {
  @Column({ unique: true })
  public username: string;

  @Column({ nullable: false })
  public password: string;

  @Column({ nullable: false })
  @Generated('uuid')
  public resetToken: string;

  @Column({ type: 'timestamp with time zone' })
  public resetTokenExpiration: Date;

  @ManyToMany(type => Role, role => role.users)
  @JoinTable({ name: 'user_role'})
  public roles: Role[];

  @OneToMany(type => RefreshToken, token => token.id)
  public refreshTokens: RefreshToken[];
}

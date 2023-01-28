import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class RefreshToken extends BaseEntity {
  @Column({ name: 'refresh_token' }) 
  public refreshToken: string;
  
  @Column({ default: false })
  public isBlacklisted: boolean;

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  public user: User;
}

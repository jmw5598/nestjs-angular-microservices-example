import { Column, Entity, Generated, Index, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Account } from "./account.entity";
import { User } from './user.entity';

@Entity()
export class Tenant extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  @Generated('uuid')
  public identifier: string;

  @Column()
  public domain: string;

  @Column()
  public connectionString: string;

  @Column()
  public isLockedOut: boolean;

  @OneToOne(type => Account, account => account.tenant)
  public account: Account;

  @OneToMany(type => User, user => user.id)
  public users: User[];
}
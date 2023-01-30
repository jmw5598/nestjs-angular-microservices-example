import { Column, Entity, Generated, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';

import { BaseEntity } from '../base.entity';
import { Claim } from './claim.entity';
import { DeviceCode } from './device-code.entity';
import { Profile } from './profile.entity';
import { RefreshToken } from './refresh-token.entity';
import { Role } from './role.entity';
import { Tenant } from './tenant.entity';

@Entity({ name: 'app_user' })
export class User extends BaseEntity {
  @Column({ unique: true })
  @Index()
  public username: string;

  @Column({ nullable: false })
  public password: string;

  @Column({ nullable: false })
  @Generated('uuid')
  public passwordResetToken: string;

  @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
  public passwordResetTokenExpiration: Date;

  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean = false;

  @Column({ default: false })
  public isLockedOut: boolean = false;

  @OneToOne(type => Profile, profile => profile.user)
  public profile: Profile;

  @ManyToMany(type => Role, { eager: false })
  @JoinTable({ 
    name: 'app_user_role',
    joinColumn: { name: 'app_user_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: "id" }
  })
  public roles: Role[];

  @ManyToMany(type => Claim, { eager: false })
  @JoinTable({ 
    name: 'app_user_claim',
    joinColumn: { name: 'app_user_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'claim_id', referencedColumnName: "id" }
  })
  public claims: Claim[];

  @ManyToMany(type => DeviceCode, { eager: false })
  @JoinTable({ 
    name: 'app_user_device_code',
    joinColumn: { name: 'app_user_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'device_code_id', referencedColumnName: "id" }
  })
  public deviceCodes: DeviceCode[];

  @OneToMany(type => RefreshToken, token => token.id)
  public refreshTokens: RefreshToken[];

  @Column()
  public tenantId: string;

  @ManyToOne(type => Tenant, tenant => tenant.users)
  @JoinColumn({ name: 'tenant_id' })
  public tenant: Tenant;
}

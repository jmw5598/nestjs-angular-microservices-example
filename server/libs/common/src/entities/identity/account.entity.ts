import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../entities/base.entity";
import { Tenant } from "./tenant.entity";

@Entity()
export class Account extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public tenantId: string;

  @OneToOne(type => Tenant, tenant => tenant.account)
  @JoinColumn({ name: 'tenant_id' })
  public tenant: Tenant;
}
import { Column, Entity, Index, ManyToMany } from "typeorm";
import { BaseEntity } from "../base.entity";
import { User } from "./user.entity";

@Entity()
export class DeviceCode extends BaseEntity {
  @Column({ unique: true })
  @Index()
  public token: string;

  @ManyToMany(type => User, { eager: false, cascade: true })
  public users: User[];
}

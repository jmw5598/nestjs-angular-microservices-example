import { PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'timestamp with time zone' })
  public createdAt: Date;

  @Column({ type: 'timestamp with time zone' })
  public updatedAt: Date;

  @Column({ type: 'timestamp with time zone' })
  public deletedAt: Date;

  @BeforeInsert()
  public beforeInsert() {
    const now: Date = new Date()
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  public BeforeUpdate() {
    const now: Date = new Date();
    this.updatedAt = now;
  }
}

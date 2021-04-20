import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("settings")
export default class Settings {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public username: string;

  @Column()
  public chat: boolean;

  @UpdateDateColumn()
  public updated_at: Date;

  @CreateDateColumn()
  public created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

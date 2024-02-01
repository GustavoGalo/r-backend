import { v4 as uuid } from "uuid";

export class Entity {
  public id: string;
  public active: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  constructor() {
    this.id = uuid();
    this.active = true;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

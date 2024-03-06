import { Entity } from "@domain/common";
import { CharacterSheet } from "@domain/entities";

export class User extends Entity {
  public characterSheet?: CharacterSheet[];

  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {
    super();
  }
}

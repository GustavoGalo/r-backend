import { Entity } from "@domain/common";
import { CharacterSheetClass } from "@domain/entities";

export class Class extends Entity {
  public characterSheetClass?: CharacterSheetClass[];
  constructor(public name: string) {
    super();
  }
}

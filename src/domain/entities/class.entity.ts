import { Entity } from "@domain/common";
import { CharacterSheetClass } from "./charactersheetClass.entity";

export class Class extends Entity {
  public characterSheetClass?: CharacterSheetClass[];
  constructor(public name: string) {
    super();
  }
}

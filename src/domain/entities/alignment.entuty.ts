import { Entity } from "@domain/common";
import { CharacterSheetAlignment } from "./charactersheetAlignment.entity";

export class Alignment extends Entity {
  public characterSheetAlignment?: CharacterSheetAlignment;
  constructor(public alignment: string) {
    super();
  }
}
